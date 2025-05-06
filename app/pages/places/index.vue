<template>
  <Page>

    <div class="flex flex-col lg:flex-row w-full">
      <div class="flex-1">
        <Heading>
          {{ $t('pages.places.title') }}
          <template v-slot:subtitle>
            {{ $t('pages.places.subtitle') }}
          </template>
        </Heading>
      </div>

      <div class="flex-1">
        <div class="mt-11 lg:mt-4">
          <Button color="indigo" to="/places/create" class="!px-5">
            <PlusIcon class="inline w-4.5 mr-2 -mt.5" />Projekt eintragen
          </Button>
        </div>
      </div>

      <div class="flex-1">
      </div>
    </div>

    <ListGrid v-if="places">
      <ListTile v-for="place in places" :key="place.id" :url="`/places/${place.id}`" :avatarUrl="place.avatar_url || ''"
        :title="place.name" :subtitle="place.description">
      </ListTile>
    </ListGrid>

    <HintBox class="mt-19 lg:mt-22" name="places_and_projects" :icon="GlobeEuropeAfricaIcon">
      Mache Orte sichtbar, die mehr Aufmerksamkeit verdienen.</HintBox>

    <div class="h-80"></div>

  </Page>
</template>

<script setup lang="ts">
import { PlusIcon, GlobeEuropeAfricaIcon } from '@heroicons/vue/24/solid'

const { data: places } = await useFetch(`/api/places/`, {
  method: 'GET',
  headers: useRequestHeaders(['cookie']),
})
</script>

<style></style>
