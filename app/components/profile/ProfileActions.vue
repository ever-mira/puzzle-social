<template>
  <div>
    <div class="mt-9" v-if="!isOwnProfile">
      <Button color="white" size="small" class="border dark:border-gray-700 !font-normal"
        :to="`/conversations/@${profile?.username}`">
        <PaperAirplaneIcon class="inline w-5.5 text-gray-500 -mt.5 mr-1" />
        {{ t('sendMessage') }}
      </Button>
    </div>
    <div class="mt-4" v-if="!isOwnProfile">
      <Button color="white" @click="showModal(t('comingSoon'))" size="small"
        class="border dark:border-gray-700 !font-normal">
        <UserPlusIcon class="inline w-5.5 text-gray-500 -mt.5" />
        {{ t('addFriend') }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
import { PaperAirplaneIcon } from '@heroicons/vue/24/outline'
import { UserPlusIcon } from '@heroicons/vue/24/outline'

const { profile, isOwnProfile } = useProfile()
const { showModal } = useModal()
</script>

<i18n lang="json">{
  "de": {
    "sendMessage": "Nachricht senden",
    "addFriend": "Als Freund hinzufügen",
    "comingSoon": "Kommt bald"
  },
  "en": {
    "sendMessage": "Send Message",
    "addFriend": "Add Friend",
    "comingSoon": "Coming soon."
  }
}</i18n>
