<template>
  <NuxtLink to="/about"
    class="md:absolute flex flex-col right-0 top-15% text-right pr-4 text-gray-900 dark:text-gray-200">
    <div class="text-xl">
      <SparklesIcon class="inline w-7" />
    </div>
    <div class="text-2xl">
      {{ t('title') }}
    </div>
    <div class="text-xl">
      {{ t('builtByCommunity') }}
    </div>
    <div class="text-xl">
      {{ t('helpBuilding') }}
      <CursorArrowRippleIcon class="inline w-7 mt-1" />
    </div>
    <div class="text-sm">
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { t } = useI18n()
import { SparklesIcon } from '@heroicons/vue/24/solid'
import { CursorArrowRippleIcon } from '@heroicons/vue/24/solid'
</script>

<i18n lang="json">{
  "de": {
    "title": "Open Source",
    "builtByCommunity": "Von der Community entwickelt",
    "helpBuilding": "Hilf mit beim Entwickeln"
  },
  "en": {
    "title": "Open Source",
    "builtByCommunity": "Built by the community",
    "helpBuilding": "Help building"
  }
}</i18n>
