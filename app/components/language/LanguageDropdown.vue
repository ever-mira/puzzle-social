<template>

  <div class="relative inline-block text-left mr-0 md:mr-1">
    <button type="button"
      class="inline-flex justify-center w-full rounded-md border border-gray-300 dark:border-gray-800 shadow-sm pl-5 pr-4 py-2 bg-white dark:bg-black text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-950 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500"
      id="language-menu" aria-expanded="true" aria-haspopup="true" @click.stop="menuClicked">

      <span>{{ selectedLocale.name }}</span>
      <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
        aria-hidden="true">
        <path fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd" />
      </svg>
    </button>

    <div
      class="origin-top-left absolute left-0 mt-2 w-44 bg-white dark:bg-black rounded-md shadow-lg ring-1 ring-black dark:ring-gray-800 ring-opacity-5 focus:outline-none"
      role="menu" aria-orientation="vertical" aria-labelledby="language-menu" v-if="open">
      <div role="none">
        <a v-for="language in locales" :value="language.code" href="#"
          class="block px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-900"
          :class="{ 'bg-gray-100 dark:bg-gray-900': language.code === locale }" role="menuitem"
          @click="setLocale(language.code)">{{
            language.name }}</a>
      </div>
    </div>
  </div>

</template>


<script setup lang="ts">
const { setLocale, locales, locale } = useI18n()

const selectedLocale = computed(() => {
  return locales.value.find((l) => l.code === locale.value)
})

let open = ref(false)

const menuClicked = () => {
  open.value = !open.value
}

onMounted(() => {
  document.addEventListener('click', () => open.value = false)
})
</script>
