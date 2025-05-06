import type { Tables } from "~~/types/database.types"
type Profile = Tables<"profiles">

type ProfileWithDistance = Profile & {
  distance?: number
}

const selectedLocation = ref()

export function useUsers() {
  const users = useState<ProfileWithDistance[] | null>("users", () => null)

  async function loadUsers(limit?: number) {
    selectedLocation.value = null
    let url = "/api/users/"

    if (limit) {
      url += `?limit=${limit}`
    }

    const { data } = await useFetch<Profile[]>(url, {
      method: "GET",
      headers: useRequestHeaders(["cookie"]),
    })
    if (data.value) users.value = data.value
  }

  async function updateUserList(location?: Array<number>) {
    let url = "/api/users/"

    const params = new URLSearchParams()

    if (location && location.length === 2) {
      params.append("lon", String(location[0]))
      params.append("lat", String(location[1]))
    }

    try {
      const newUsers = await $fetch<ProfileWithDistance[]>(`${url}?${params.toString()}`)
      users.value = newUsers
    } catch (error) {
      console.error(error)
    }
  }

  return {
    users,
    loadUsers,
    updateUserList,
    selectedLocation,
  }
}
