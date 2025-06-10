<template>
  <Page>
    <Heading>
      {{ t('pageTitle') }}
      <template v-slot:subtitle>
        {{ t('pageSubtitle') }}
      </template>
    </Heading>

    <div class="mt-11 w-full lg:w-100">
      <div class="mb-7">
        <photo-upload @uploaded="onPhotoUploaded" category="event" :preview="true" class="mt-6"></photo-upload>
      </div>
      <div class="mb-3">
        <Input type="text" :placeholder="t('eventNamePlaceholder')" v-model="event.name" autofocus class="!w-full" />
      </div>
      <div class="mb-3">
        <Textarea type="text" :placeholder="t('descriptionPlaceholder')" v-model="event.description"
          class="!w-full h-40 resize-none" />
      </div>
      <div class="mb-7">
        <Input type="text" :placeholder="t('locationPlaceholder')" v-model="event.location" class="!w-full" />
      </div>
      <div class="mb-7">
        <VDatePicker v-model="event.date" mode="dateTime" is24hr :isDark="isDark" />
      </div>

      <div class="mb-7" v-if="message">
        {{ message }}
      </div>

      <div class="mt-10 mb-50">
        <Button color="red" to="/places" class="!px-5.5">
          {{ t('cancelButton') }}
        </Button>
        <Button color="indigo" @click="save" class="ml-4 !px-5.5">
          {{ t('saveButton') }}
        </Button>
      </div>

      <!-- preload CDN images -->
      <ImagePreload :url="event.avatar_url" v-if="event.avatar_url" />
    </div>

  </Page>
</template>

<script setup lang="ts">
const { t } = useI18n()
import PhotoUpload from '~/components/user/PhotoUpload.vue'
import ImagePreload from '~/components/app/ImagePreload.vue'

const event = reactive({
  name: '',
  description: '',
  website: '',
  location: '',
  avatar_url: '',
  date: new Date()
})

const message = ref('')
const user = useSupabaseUser()
const router = useRouter()

async function save() {
  message.value = ''

  try {
    if (!event.name || !event.description) {
      message.value = t('nameDescriptionRequiredError')
      return
    }

    if (!user.value) {
      message.value = t('mustBeLoggedInError')
      return
    }

    const result = await $fetch('/api/events', {
      method: 'POST',
      body: toRaw(event),
      headers: useRequestHeaders(['cookie'])
    })

    router.push('/events')

  } catch (error: any) {
    message.value = error.message
  }
}

const onPhotoUploaded = (url: string) => {
  event.avatar_url = url
}

const { isDark } = useApp()
</script>

<style></style>

<i18n lang="json">{
  "de": {
    "pageTitle": "Veranstaltung eintragen",
    "pageSubtitle": "trage eine neue Veranstaltung ein.",
    "eventNamePlaceholder": "Name der Veranstaltung",
    "descriptionPlaceholder": "Beschreibung",
    "locationPlaceholder": "Ort",
    "cancelButton": "Abbrechen",
    "saveButton": "Speichern",
    "nameDescriptionRequiredError": "Name und Beschreibung sind erforderlich",
    "mustBeLoggedInError": "Du musst eingeloggt sein, um eine Veranstaltung erstellen zu können."
  },
  "en": {
    "pageTitle": "Submit Event",
    "pageSubtitle": "Submit a new event.",
    "eventNamePlaceholder": "Name of the event",
    "descriptionPlaceholder": "Description",
    "locationPlaceholder": "Location",
    "cancelButton": "Cancel",
    "saveButton": "Save",
    "nameDescriptionRequiredError": "Name and description are required",
    "mustBeLoggedInError": "You must be logged in to create an event."
  }
}</i18n>
