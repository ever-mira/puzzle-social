<template>
  <Page>
    <div class="flex flex-col lg:flex-row w-full">
      <div class="flex-1">
        <Heading>
          {{ $t('pages.exchange.title') }}
          <template v-slot:subtitle>
            {{ $t('pages.exchange.subtitle') }}
          </template>
        </Heading>
      </div>

      <div class="flex-1">
        <div class="mt-11 lg:mt-4">
          <Button color="indigo" to="/exchange/create" class="!px-5">
            <PlusIcon class="inline w-4.5 mr-2 -mt.5" />Angebot hinzufügen
          </Button>
        </div>
      </div>
    </div>

    <div class="flex flex-col md:flex-row mt-12 md:mt-11">
      <div class="md:w-auto mb-2 text-[1.13rem] leading-8 text-gray-800 dark:text-gray-200">Kategorie:
      </div>
      <select v-model="filter_category_id"
        class="rounded-lg border border-gray-300 dark:border-gray-800 shadow-sm pl-2 pr-4 py-2 md:ml-4.5 text-sm bg-white dark:bg-black font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
        <option :value="null" selected>Alle</option>
        <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
      </select>
    </div>

    <ListGrid v-if="items">
      <ListTile v-for="item in items" :key="item.id" :url="`/exchange/items/${item.id}`"
        :avatarUrl="item.avatar_url || ''" :title="item.title" :subtitle="item.profiles.username">
        <template v-slot:right>
          <div class="text-right text-sm text-gray-600">{{ item.exchange_categories.name }}</div>
        </template>
      </ListTile>
    </ListGrid>

    <div v-if="items.length === 0" class="text-gray-700">
      Noch keine Einträge in dieser Kategorie.
    </div>

    <HintBox class="mt-19 lg:mt-22" name="exchange_friends" :icon="RocketLaunchIcon">
      Dinge tauschen, weil es Spaß macht, und neue Freunde finden.</HintBox>
    <div class="h-80"></div>
  </Page>
</template>

<script setup lang="ts">
import { PlusIcon } from '@heroicons/vue/24/solid'
import { RocketLaunchIcon } from '@heroicons/vue/24/outline'

const { items, loadItems, filter_category_id } = useExchange()

loadItems()

watch(filter_category_id, (newValue) => {
  loadItems()
})

const { data: categories } = await useFetch('/api/exchange/categories', {
  method: 'GET',
  headers: useRequestHeaders(['cookie'])
})
</script>

<style></style>
