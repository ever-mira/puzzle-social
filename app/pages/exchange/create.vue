<template>
  <Page>
    <Heading>
      Eintrag hinzufügen
      <template v-slot:subtitle>
        Beschreibe, was du abzugeben hast
      </template>
    </Heading>

    <div class="mt-11 w-full lg:w-200">
      <div class="mb-7">
        <photo-upload @uploaded="onPhotoUploaded" category="exchange" :preview="true" class="mt-6"></photo-upload>
      </div>
      <div class="mb-3">
        <select v-model="exchange_item.category_id"
          class="w-full rounded-lg border border-gray-300 dark:border-gray-800 shadow-sm pl-2 pr-4 py-2 bg-white dark:bg-black text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer">
          <option v-for="category in categories" :value="category.id">{{ category.name }}</option>
        </select>
      </div>
      <div class="mb-3">
        <Input type="text" placeholder="Titel" v-model="exchange_item.title" autofocus class="!w-full" />
      </div>
      <div class="mb-3">
      </div>
      <div class="mb-3">
        Beschreibe Dein Angebot:
      </div>
      <div class="mb-3">
        <Textarea type="text" placeholder="Beschreibung" v-model="exchange_item.text"
          class="!w-full h-90 resize-none" />
      </div>
      <div class="mb-7" v-if="message">
        {{ message }}
      </div>

      <div class="mt-10 mb-50">
        <Button color="red" to="/exchange" class="!px-5.5">
          Abbrechen
        </Button>
        <Button color="indigo" @click="save" class="ml-4 !px-5.5">
          Speichern
        </Button>
      </div>
    </div>

    <!-- preload CDN images -->
    <ImagePreload :url="exchange_item.avatar_url" v-if="exchange_item.avatar_url" />
  </Page>
</template>

<script setup lang="ts">
import PhotoUpload from '~/components/user/PhotoUpload.vue'
import ImagePreload from '~/components/app/ImagePreload.vue'

const exchange_item = reactive({
  category_id: 1,
  title: '',
  text: '',
  avatar_url: ''
})

const message = ref('')
const user = useSupabaseUser()
const router = useRouter()
const { reset_category_filter } = useExchange()

const categories = await $fetch('/api/exchange/categories', {
  method: 'GET',
  headers: useRequestHeaders(['cookie'])
})

async function save() {
  message.value = ''

  try {
    if (!exchange_item.title || !exchange_item.text) {
      message.value = 'Titel und Text sind erforderlich.'
      return
    }

    if (!user.value) {
      message.value = 'Du musst eingeloggt sein, um einen Trip-Bericht erstellen zu können.'
      return
    }

    const result = await $fetch('/api/exchange/items', {
      method: 'POST',
      body: toRaw(exchange_item),
      headers: useRequestHeaders(['cookie'])
    })

    reset_category_filter()
    router.push('/exchange')

  } catch (error: any) {
    message.value = error.message
  }
}

const onPhotoUploaded = (url: string) => {
  exchange_item.avatar_url = url
}
</script>

<style></style>
