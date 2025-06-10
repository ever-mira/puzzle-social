<template>
  <NuxtLink to="/"
    class="text-indigo-600 lg:text-primary-600 dark:text-accent-400 text-[1.75rem] md:text-[1.7rem] lg:text-[1.85rem] font-semibold leading-none"
    @click="onClick">
    {{ t('title') }}
  </NuxtLink>
</template>

<script setup lang="ts">
const { t } = useI18n()
import Puzzle from '../steps/Puzzle.vue'

const { setStepComponent } = useSteps()
const { hideSidebar } = useApp()

const onClick = () => {
  setStepComponent(Puzzle)
  hideSidebar()
}
</script>

<i18n lang="json">{
  "de": {
    "title": "Puzzle."
  },
  "en": {
    "title": "Puzzle."
  }
}</i18n>
