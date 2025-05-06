<template>
  <div>
    <div class="mt-7 mb-2 text-gray-800 dark:text-gray-200">Umkreissuche:</div>
    <AutocompleteLocation v-model="selectedLocation" />

    <ListGrid v-if="users">
      <ListTile v-for="user in users" :key="user.user_id" :url="`/@${user.username}`" :avatarUrl="user.avatar_url || ''"
        :title="user.username" :subtitle="user.location_label">

        <template v-slot:right>
          <div v-if="user.distance || user.distance === 0" class="text-right">
            <div class="text-sm" v-if="user.distance === 0">0 km</div>
            <div class="text-sm" v-if="user.distance > 0 && user.distance < 10">{{ user.distance.toFixed(1) }} km
            </div>
            <div class="text-sm" v-if="user.distance > 10">{{ user.distance.toFixed(0) }} km</div>
          </div>
        </template>

      </ListTile>
    </ListGrid>

  </div>
  <div class="h-80"></div>
</template>

<script setup lang="ts">
import AutocompleteLocation from '~/components/location/AutocompleteLocation.vue'

const { users, loadUsers, updateUserList, selectedLocation } = useUsers()
if (!selectedLocation.value) {
  await loadUsers()
}

watch(selectedLocation, async (newLocation) => {
  if (newLocation) {
    let coordinates = newLocation.value?.geometry?.coordinates
    if (coordinates) {
      await updateUserList(coordinates)
    }
  }
})
</script>
