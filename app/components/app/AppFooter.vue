<template>
  <div>
    <ul class="flex flex-col md:flex-row md:space-x-7 py-2">
      <li class="font-medium">
        {{ $t('app.footer.copyright') }}
      </li>
      <li>
        <RouterLink to="/terms" class="text-sub dark:text-sub-dark hover:text-blue-800">
          {{ $t('app.footer.terms') }}
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/privacy" class="text-sub dark:text-sub-dark hover:text-blue-800">
          {{ $t('app.footer.privacy') }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
</script>
