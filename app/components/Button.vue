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


const baseClasses = 'text-white focus:outline-none rounded-xl !text-[.9rem] font-medium disabled:cursor-default cursor-pointer text-center shadow-sm transition-all duration-100'

const sizeClasses = computed(() => {
  switch (props.size) {
    case 'small':
      return 'px-3.75 py-2 text-sm'
    case 'large':
      return 'py-2.3 px-9 text-sm'
    default:
      return 'py-2.3 px-9 text-sm'
  }
})

const colorClasses = computed(() => {
  switch (props.color) {
    case 'indigo':
      return 'bg-indigo-200 !text-indigo-800 dark:!text-indigo-100 hover:bg-indigo-300 dark:bg-indigo-800 dark:hover:bg-indigo-700'
    case 'indigo_dark':
      return 'bg-indigo-500 !text-indigo-800 dark:!text-indigo-100 hover:bg-indigo-600 dark:bg-indigo-800 dark:hover:bg-indigo-700'
    case 'red':
      return 'bg-red-100 !text-red-600 dark:!text-red-200 hover:bg-red-200 dark:bg-red-900 dark:hover:bg-red-800'
    case 'blue':
      return 'bg-blue-500 !text-white dark:!text-blue-200 hover:bg-blue-400 dark:bg-blue-900 dark:hover:bg-blue-800'
    case 'transparent':
      return '!text-gray-800 !dark:text-gray-300 dark:hover:bg-gray-900 !shadow-none'
    case 'white':
      return '!text-gray-800 bg-white dark:bg-black !dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900'
    case 'gray':
      return '!text-gray-800 !dark:text-gray-300 bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-800'
    default:
      return 'bg-indigo-200 disabled:bg-gray-200 !text-indigo-800 disabled:!text-gray-600 dark:!text-indigo-100 disabled:dark:!text-gray-400 enabled:hover:bg-indigo-300 dark:bg-indigo-800 disabled:dark:bg-gray-700 enabled:dark:hover:bg-indigo-700'
  }
})

const handleClick = () => {
  if (!props.to) {
    emit('click')
  }
}

</script>

<style scoped></style>