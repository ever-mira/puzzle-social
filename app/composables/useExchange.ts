import type { Tables } from "~~/types/database.types"
type Item = Tables<"exchange_items">

const filter_category_id = ref(null)

export function useExchange() {
  const items = useState<Item[] | null>("exchange_items", () => null)

  async function loadItems() {
    let url = "/api/exchange/items"
    if (filter_category_id.value) url += `?category_id=${filter_category_id.value}`

    const { data } = await useFetch<Item[]>(url, {
      method: "GET",
      headers: useRequestHeaders(["cookie"]),
    })
    if (data.value) items.value = data.value
  }

  function reset_category_filter() {
    filter_category_id.value = null
  }

  return {
    items,
    loadItems,
    filter_category_id,
    reset_category_filter,
  }
}
