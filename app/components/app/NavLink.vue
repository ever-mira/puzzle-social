<template>
  <div class="pt-.5">
    <NuxtLink :to="to"
      class="block w-full rounded-xl hover:bg-highlight dark:hover:bg-highlight-dark leading-none flex items-center space-x-4 p-4 py-3.5 rounded-xl dark:shadow-gray-900/10 dark:hover:shadow-gray-900/20 transition-all"
      :class="isLinkActive(to) ? '!bg-highlight !dark:bg-highlight-dark font-medium !shadow-md' : ''"
      @click="hideSidebar">
      <slot></slot>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  }
})

const { hideSidebar } = useApp()

const route = useRoute()
const activeRoute = computed(() => route.path)

const isLinkActive = (linkRoute: string) => {
  return activeRoute.value.includes(linkRoute)
    && (linkRoute !== '/' || activeRoute.value === '/')
    || (linkRoute === '/people' && activeRoute.value.startsWith('/@'))
}
</script>