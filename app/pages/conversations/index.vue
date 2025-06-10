<template>
  <Page>
    <Heading>
      {{ t('mailboxTitle') }}
      <template v-slot:subtitle>
        {{ t('yourInboxSubtitle') }}
      </template>
    </Heading>

    <div class="max-w-2xl mt-16">
      <div class="space-y-4">
        <div v-if="!conversations || conversations.length < 1" class="text-gray-700">{{ t('noConversationsYet') }}</div>

        <ConversationTile v-for="conversation in conversations" :key="conversation.username"
          :conversation="conversation" v-else />

      </div>
    </div>

    <HintBox class="mt-19" name="messages_improvisation" :icon="EnvelopeOpenIcon">
      {{ t('hintBoxContentMessagesImprovisation') }}
    </HintBox>

  </Page>
</template>

<script setup lang="ts">
const { t } = useI18n()
import { EnvelopeOpenIcon } from "@heroicons/vue/24/outline"
import ConversationTile
  from '~/components/conversation/ConversationTile.vue';
const { conversations, fetchConversations } = useConversations()

await fetchConversations()

</script>

<style></style>

<i18n lang="json">{
  "de": {
    "mailboxTitle": "Postfach",
    "yourInboxSubtitle": "Dein Posteingang",
    "noConversationsYet": "Noch keine Nachrichten.",
    "hintBoxContentMessagesImprovisation": "Experiment: neue Menschen mit einem Zufalls-Satz anschreiben. In der Improvisation (Schreiben bevor man denken kann) liegt eine merkwürdige Magie."
  },
  "en": {
    "mailboxTitle": "Mailbox",
    "yourInboxSubtitle": "Your Inbox",
    "noConversationsYet": "No conversations yet.",
    "hintBoxContentMessagesImprovisation": "Experiment: write to new people with a random sentence. There is a strange magic in improvisation (writing before you can think)."
  }
}</i18n>
