<template>
  <div class="mt-19 lg:mt-31 grid grid-cols-1 md:grid-cols-2 gap-7 max-w-5xl">
    <div class="backdrop-blur-sm bg-white/80 dark:bg-[#111111]/80 shadow-md rounded-xl p-7">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Tausch-Netzwerk</h3>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        Dinge tauschen, weil es Spaß macht.
      </p>
      <NuxtLink to="/exchange"
        class="mt-6 inline-flex items-center text-indigo-600 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-lg">
        Zum Tauschen <span class="ml-2">→</span>
      </NuxtLink>
    </div>

    <div class="backdrop-blur-sm bg-white/80 dark:bg-[#111111]/80 shadow-md rounded-xl p-7">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white">Nachhaltige Projekte</h3>
      <p class="mt-4 text-gray-600 dark:text-gray-300">
        Ein Beziehungsnetzwerk, um nachhaltige Projekte zu erkunden.
      </p>
      <NuxtLink to="/places"
        class="mt-6 inline-flex items-center text-indigo-600 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 text-lg">
        Zu den Projekten <span class="ml-2">→</span>
      </NuxtLink>
    </div>
  </div>
</template>