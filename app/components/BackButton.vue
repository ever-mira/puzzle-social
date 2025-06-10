<template>
  <Button @click="goBack" class="!px-7 mt-10 lg:mt-27" color="indigo">
    <ArrowLeftIcon class="inline w-5 mr-1.5 -ml-2.2" />{{ t('back') }}
  </Button>
</template>

<script setup lang="ts">
import { useI18n } from '#imports'

const { t } = useI18n()
import { ArrowLeftIcon } from '@heroicons/vue/24/solid'

const router = useRouter()

const goBack = () => {
  router.back()
}
</script>

<style scoped></style>

<i18n lang="json">{
  "de": {
    "back": "Zurück"
  },
  "en": {
    "back": "Back"
  }
}</i18n>