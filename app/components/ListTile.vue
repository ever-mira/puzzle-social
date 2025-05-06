<template>
  <NuxtLink :to="`${props.url}`"
    class="flex ml-3 shadow-mdsm hover:bg-gray-100 border border-white dark:border-transparent dark:hover:border-gray-700 dark:hover:bg-transparent bg-opacity-40 hover:bg-opacity-40 py-3.1 pl-3 pr-5 rounded-xl"
    v-if="props.avatarUrl">
    <div class="flex w-full">
      <div class="flex grow">
        <NuxtImg :src="props.avatarUrl || ''" class="w-17 h-17 rounded-full border border-gray-300" height="70"
          width="70" fit="cover" v-if="props.avatarUrl" />
        <PlaceholderPhotoSmall v-else />

        <div class="py-.5 px-5.5">
          <div class="font-medium">{{ props.title }}</div>
          <div class="text-sm text-gray-500">{{ props.subtitle }}</div>
        </div>
      </div>

      <slot class="text-right" name="right"></slot>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
interface Props {
  url: string,
  avatarUrl: string,
  title: string | undefined | null,
  subtitle?: string | undefined | null,
}

const props = defineProps<Props>()
</script>