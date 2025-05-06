<template>
  <Page>
    <div class="flex flex-col lg:flex-row w-full">
      <div class="flex-1">
        <Heading>
          {{ $t('pages.events.title') }}
          <template v-slot:subtitle>
            {{ $t('pages.events.subtitle') }}
          </template>
        </Heading>
      </div>

      <div class="flex-1">
        <div class="mt-11 lg:mt-4">
          <Button color="indigo" to="/events/create" class="!px-5">
            <PlusIcon class="inline w-4.5 mr-2 -mt.5" />Veranstaltung erstellen
          </Button>
        </div>
      </div>

      <div class="flex-1">
      </div>
    </div>

    <ListGrid v-if="events">
      <ListTile v-for="event in events" :key="event.id" :url="`/events/${event.id}`" :avatarUrl="event.avatar_url || ''"
        :title="event.name" :subtitle="formatDate(event.date)">
      </ListTile>
    </ListGrid>

    <HintBox class="mt-19 lg:mt-22" name="events_possibilities" :icon="CalendarIcon">
      Erstelle Events, die dir wirklich wichtig sind, und erschaffe neue Möglichkeiten.</HintBox>

    <div class="h-80"></div>

  </Page>
</template>

<script setup lang="ts">
import { CalendarIcon } from '@heroicons/vue/24/solid'
import type { Tables } from "~~/types/database.types"
type Event = Tables<"events">
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { PlusIcon } from '@heroicons/vue/24/solid'
import ListTile from "~/components/ListTile.vue"
import ListGrid from "~/components/ListGrid.vue"

const { data: events } = await useFetch<Event[]>(`/api/events/`, {
  method: 'GET',
  headers: useRequestHeaders(['cookie']),
})

const formatDate = (date: string) => {
  if (date) {
    return format(new Date(date), "EEEE, d. MMMM yyyy, HH:mm", { locale: de })
  }
}
</script>

<style></style>
