<template>
  <div class="mt-19 lg:mt-31 grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl">
    <div class="backdrop-blur-sm bg-white/80 dark:bg-[#111111]/80 shadow-md rounded-xl p-7">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('exchangeNetworkTitle') }}</h3>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        {{ t('exchangeNetworkDescription') }}
      </p>
      <NuxtLink to="/exchange"
        class="mt-6 inline-flex items-center text-indigo-600 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-lg">
        {{ t('goToExchange') }} <span class="ml-2">→</span>
      </NuxtLink>
    </div>

    <div class="backdrop-blur-sm bg-white/80 dark:bg-[#111111]/80 shadow-md rounded-xl p-7">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">{{ t('sustainableProjectsTitle') }}</h3>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        {{ t('sustainableProjectsDescription') }}
      </p>
      <NuxtLink to="/places"
        class="mt-6 inline-flex items-center text-indigo-600 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-lg">
        {{ t('goToProjects') }} <span class="ml-2">→</span>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="json">{
  "de": {
    "exchangeNetworkTitle": "Tausch-Netzwerk",
    "exchangeNetworkDescription": "Dinge tauschen, weil es Spaß macht.",
    "goToExchange": "Zum Tauschen",
    "sustainableProjectsTitle": "Nachhaltige Projekte",
    "sustainableProjectsDescription": "Ein Beziehungsnetzwerk, um nachhaltige Projekte zu erkunden.",
    "goToProjects": "Zu den Projekten"
  },
  "en": {
    "exchangeNetworkTitle": "Exchange Network",
    "exchangeNetworkDescription": "Swap things because it's fun.",
    "goToExchange": "To Exchange",
    "sustainableProjectsTitle": "Sustainable Projects",
    "sustainableProjectsDescription": "A relationship network to explore sustainable projects.",
    "goToProjects": "To Projects"
  }
}</i18n>