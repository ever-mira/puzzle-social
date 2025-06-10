<template>
  <div>
    <div class="mt-7 relative text-3xl font-bold">{{ t('title') }}</div>
    <div class="mt-1 relative text-lg text-gray-600 dark:text-gray-300">{{ t('subtitle') }}</div>

    <div class="mt-12 relative">
      <Input :placeholder="t('usernamePlaceholder')" v-model="username" focus class="!w-[235px] md:!w-[220px]"
        @keydown.enter="next" />
      <div class="block clear-left md:clear-none md:inline ml.5 md:ml-3 mt-2 md:mt-0 text-green-600" v-if="available">
        {{ t('username_free') }}
      </div>
      <div class="block clear-left md:clear-none md:inline ml.5 md:ml-3 mt-2 md:mt-0 text-red-700"
        v-if="available === false">
        {{ t('username_taken') }}
      </div>

      <p class="mt-3.5 text-gray-500 dark:text-gray-300">https://puzzle.social/@{{ username }}</p>
    </div>

    <div class="mt-6 h-8" v-if="message">
      <span class="text-gray-700">{{ message }}</span>
    </div>
    <div class="mt-7">
      <Button @click="next" class="!px-7" :disabled="!available">{{ t('next') }}</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
import SignupStepLogin from './SignupStepLogin.vue'
import debounce from 'lodash.debounce'
import { validateUsername } from '@utils/usernameValidation'

const { setStepComponent, username } = useSteps()

const message = ref<string>('')
const available = ref<boolean | null>(null)

const checkAvailability = debounce(async (name: string) => {
  if (!name) {
    available.value = null
    return
  }

  const { valid, errors } = validateUsername(name)
  if (!valid) {
    message.value = errors[0] || ''
    return
  }

  try {
    const result = await $fetch<{ available: boolean }>(`/api/check-username?username=${encodeURIComponent(username.value)}`)

    available.value = result.available

  } catch (error: any) {
    message.value = error.statusMessage || t('requestProblem')
  }
}, 300)

watch(username, (newVal) => {
  available.value = null
  message.value = ''

  checkAvailability(newVal)
},
  { immediate: true })

const next = async () => {
  if (!available.value) return
  setStepComponent(SignupStepLogin)
}
</script>

<i18n lang="json">{
  "de": {
    "title": "Account erstellen",
    "subtitle": "Wie willst du auf Puzzle heißen?",
    "username_free": "frei",
    "username_taken": "vergeben",
    "next": "Weiter",
    "usernamePlaceholder": "Dein_Username",
    "requestProblem": "Es gab ein Problem mit der Anfrage"
  },
  "en": {
    "title": "Create Account",
    "subtitle": "Select a Username on Puzzle",
    "username_free": "available",
    "username_taken": "taken",
    "next": "Next",
    "usernamePlaceholder": "Your_Username",
    "requestProblem": "There was a problem with the request"
  }
}</i18n>