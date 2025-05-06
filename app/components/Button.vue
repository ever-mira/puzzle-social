<template>
  <template v-if="props.to">
    <NuxtLink :to="props.to" :class="`${baseClasses} ${colorClasses} ${sizeClasses} ${$attrs.class}`" v-bind="$attrs"
      @click="handleClick">
      <slot />
    </NuxtLink>
  </template>
  <template v-else>
    <button :class="`${baseClasses} ${colorClasses} ${sizeClasses} ${$attrs.class || ''}`" v-bind="$attrs"
      @click="handleClick">
      <slot />
    </button>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  color?: string
  size?: 'small' | 'large'
  to?: string // Add `to` prop for router-link functionality
}

const props = defineProps<Props>()
const emit = defineEmits<{ (e: 'click'): void }>()


const baseClasses = 'text-white focus:outline-none rounded-xl !text-[.9rem] font-medium disabled:cursor-default cursor-pointer text-center shadow-sm transition-all duration-200'

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'px-4 py-2 text-sm'
    case 'large':
      return 'py-3 px-8 text-lg'
    default:
      return 'py-2.5 px-6 text-base'
  }
})

const colorClasses = computed(() => {
  switch (props.color) {
    case 'indigo':
      return 'bg-indigo-600 !text-white dark:!text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 shadow-md hover:shadow-lg'
    case 'indigo_dark':
      return 'bg-indigo-600 !text-white dark:!text-white hover:bg-primary-700 dark:bg-primary-700 dark:hover:bg-primary-600 shadow-md hover:shadow-lg'
    case 'red':
      return 'bg-red-500 !text-white dark:!text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-500 shadow-md hover:shadow-lg'
    case 'blue':
      return 'bg-primary-500 !text-white dark:!text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 shadow-md hover:shadow-lg'
    case 'transparent':
      return '!text-gray-800 !dark:text-gray-200 dark:hover:bg-gray-800/50 !shadow-none hover:bg-gray-100 dark:hover:bg-gray-800/30'
    case 'white':
      return '!text-gray-800 bg-white dark:bg-gray-900 !dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 shadow-md hover:shadow-lg'
    case 'gray':
      return '!text-gray-800 !dark:text-gray-200 bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 shadow-sm hover:shadow-md'
    default:
      return 'bg-indigo-600 dark:bg-indigo-700 disabled:bg-gray-300 !text-white disabled:!text-gray-500 dark:!text-white disabled:dark:!text-gray-400 enabled:hover:bg-primary-600 dark:bg-primary-600 disabled:dark:bg-gray-700 enabled:dark:hover:bg-primary-500 shadow-md hover:shadow-lg'
  }
})

const handleClick = () => {
  if (!props.to) {
    emit('click')
  }
}

</script>

<style scoped></style>