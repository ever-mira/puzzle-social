<template>
  <Page>
    <Heading v-if="item">
      {{ item.title }}
      <template v-slot:subtitle>
        <NuxtLink :to="`/@${item.profiles.username}`" class="text-blue-600 hover:text-blue-500">{{
          item.profiles.username }}
        </NuxtLink>
      </template>
    </Heading>
    <Heading v-else>
      Item not found
      <template v-slot:subtitle>
        404
        <div class="h-20"></div>
      </template>
    </Heading>

    <div class="mt-9 lg:mt-11" v-if="item">
      <NuxtImg :src="item.avatar_url || undefined" width="700"
        class="rounded-lg max-w-65 md:max-w-83 mt-10 cursor-pointer" v-if="item.avatar_url"
        @click="showModal(item.avatar_url)" />
      <PlaceholderPhoto v-else />

      <div class="flex mt-9">
        <div class="grow">
          <div class="font-bold">Kategorie:</div>
          {{ item.exchange_categories.name }}
        </div>
        <div>
          <div class="font-bold text-right">Datum:</div>
          {{ formattedDate }}
        </div>
      </div>
      <div class="mt-9">
        <div class="font-bold mb-2">Beschreibung:</div>
        <div class="whitespace-pre-wrap">
          {{ item.text }}
        </div>
      </div>

    </div>


    <div class="mt-20 lg:mt-24">
      <Button @click="goBack" class="!px-8">Zurück</Button>
    </div>

    <div class="h-60"></div>
  </Page>
</template>

<script setup lang="ts">
import type { Tables } from "~~/types/database.types"
type ExchangeItem = Tables<'exchange_items'>
import { useRoute } from 'vue-router'
import { format } from "date-fns"
import { de } from "date-fns/locale"

const router = useRouter()
const route = useRoute()
const id = route.params.id

const item = ref<ExchangeItem | null>(null)

if (id) {
  const { data } = await useFetch<ExchangeItem>(`/api/exchange/items/${id}`, {
    method: 'GET',
    headers: useRequestHeaders(['cookie']),
  })

  if (data.value) {
    item.value = data.value
  }
}

const { showModal } = useImageModal()

const formattedDate = computed(() => {
  if (item.value) {
    return format(new Date(item.value.created_at), "d. MMMM yyyy HH:mm", { locale: de })
  }
})

const goBack = () => {
  router.back()
}

</script>