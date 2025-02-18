import { defineEventHandler, readBody } from "h3"
import { serverSupabaseClient, serverSupabaseUser } from "#supabase/server"
import type { Database } from "~~/types/database.types"

export default defineEventHandler(async (event) => {
  const { title, category_id, text, avatar_url } = await readBody(event)

  try {
    const client = await serverSupabaseClient<Database>(event)
    const user = await serverSupabaseUser(event)

    if (!user) {
      throw createError({ statusCode: 401, statusMessage: "Nicht authentifiziert" })
    }

    const { data, error } = await client
      .from("exchange_items")
      .insert({
        title,
        category_id,
        text,
        avatar_url,
      })
      .select("*")

    if (error) {
      throw error
    }
    return data
  } catch (error: any) {
    throw error
  }
})
