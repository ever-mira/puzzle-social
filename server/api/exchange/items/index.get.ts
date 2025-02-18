import { defineEventHandler } from "h3"
import { serverSupabaseClient } from "#supabase/server"

export default defineEventHandler(async (event) => {
  const supabase = await serverSupabaseClient(event)
  const { category_id, user_id } = getQuery(event)

  try {
    const query = supabase.from("exchange_items").select(
      `
      id,
      title,
      category_id,
      exchange_categories (name),
      text,
      avatar_url,
      user_id,
      created_at,
      profiles (
        username
      )
    `
    )

    if (category_id) query.eq("category_id", category_id)
    if (user_id) query.eq("user_id", user_id)

    query.order("created_at")

    const { data, error } = await query

    if (error) {
      throw new Error("Fehler beim Laden der Items: " + error.message)
    }

    return data
  } catch (error: any) {
    throw error
  }
})
