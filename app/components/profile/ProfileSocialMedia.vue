<template>
  <div class="text-left lg:text-right">
    <div class="text-xl mb-1 font-medium">{{ t('title') }}</div>
    <div class="">{{ t('instagram') }}</div>
    <!-- <div class="text-blue-700">https://www.instagram.com/test123/</div> -->

    <div class="">{{ t('youtube') }}</div>
    <!-- <div class="text-blue-700">https://www.youtube.com/@test123</div> -->

    <div class="text-lg text-gray-400 mt-1">{{ t('comingSoon') }}</div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="json">{
  "de": {
    "title": "Social Media",
    "instagram": "Instagram",
    "youtube": "Youtube",
    "comingSoon": "Kommt bald"
  },
  "en": {
    "title": "Social Media",
    "instagram": "Instagram",
    "youtube": "Youtube",
    "comingSoon": "Coming Soon"
  }
}</i18n>
