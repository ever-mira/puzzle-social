<template>
  <div>
    <div class="mt-9 relative text-3xl font-bold text-heading">{{ t('logged_in') }}</div>
    <div class="mt-9 relative">
      {{ t('no_new_messages') }}
    </div>

    <div class="mt-9">
      <Button to="/conversations" class="!px-6">{{ t('mailbox') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<i18n lang="json">{
  "de": {
    "logged_in": "Eingeloggt.",
    "no_new_messages": "Du hast keine neuen Nachrichten.",
    "mailbox": "Postfach"
  },
  "en": {
    "logged_in": "You are logged in.",
    "no_new_messages": "You have no new messages.",
    "mailbox": "Mailbox"
  }
}</i18n>
