<template>
  <div>
    <ul class="flex flex-col md:flex-row md:space-x-7 py-2">
      <li class="font-medium">
        {{ t('copyright') }}
      </li>
      <li>
        <RouterLink to="/terms" class="text-sub dark:text-sub-dark hover:text-blue-800">
          {{ t('terms') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/privacy" class="text-sub dark:text-sub-dark hover:text-blue-800">
          {{ t('privacy') }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="json">{
  "de": {
    "copyright": "© 2025 Puzzle Social",
    "terms": "Nutzungsbedingungen",
    "privacy": "Datenschutzerklärung"
  },
  "en": {
    "copyright": "© 2025 Puzzle Social",
    "terms": "Terms of Service",
    "privacy": "Privacy Policy"
  }
}</i18n>
