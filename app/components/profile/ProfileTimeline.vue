<template>
  <div class="border-l border-gray-3 pl-3">
    <div class="text-xl">
      <SparklesIcon class="inline w-5.5 text-gray-900 dark:text-gray-200 -mt-1 mr-2" />Action
    </div>

    <div class="lg:text-lg" v-if="profile">
      <div class="mt-6 lg:mt-7" v-if="profile.created_at">
        <div class="grow font-medium">{{ formatDate(profile.created_at) }}</div>
        <div class="grow mt-2">
          <CakeIcon class="inline w-5 -mt-1 mr-2" />Bei Puzzle angemeldet
        </div>
      </div>

      <div class="mt-3 lg:mt-4" v-for="item in exchange_items" :class="{ 'mt-6 lg:mt-7': item.formattedDate }">
        <div class="grow font-medium">{{ item.formattedDate }}</div>
        <div class="grow mt-2">
          <NuxtLink :to="`/exchange/items/${item.id}`">
            <PencilIcon class="inline w-5 -mt-1 mr-2" /><span class="underline">Angebot</span> in <span
              class="font-medium">{{ item.exchange_categories.name
              }}</span>: "<span class="font-italic">{{ item.title }}</span>"
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { format } from "date-fns"
import { de } from "date-fns/locale"
import { SparklesIcon } from '@heroicons/vue/24/outline'
import { CakeIcon } from '@heroicons/vue/24/outline'
import { PencilIcon } from '@heroicons/vue/24/outline'
import type { Tables } from "~~/types/database.types"
type ExchangeItem = Tables<"exchange_items">

const { profile } = useProfile()

const { data: exchange_items } = await useFetch<ExchangeItem[]>("/api/exchange/items/" + `?user_id=${profile.value?.user_id}`, {
  method: "GET",
  headers: useRequestHeaders(["cookie"]),
})

let previousDate: string = ''

if (exchange_items.value) {
  exchange_items.value.forEach((item) => {
    let formattedDate: string = formatDate(item.created_at)
    if (formattedDate !== previousDate) {
      item.formattedDate = formattedDate
    }
    previousDate = formattedDate
  })
}

function formatDate(dateString: string) {
  let formattedDate: string = format(new Date(dateString), "d. MMMM yyyy", { locale: de })
  return formattedDate
}

</script>
