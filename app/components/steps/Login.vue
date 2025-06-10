<template>
  <div>
    <div class="mt-7 relative text-3xl font-bold text-heading">{{ t('title') }}</div>
    <div class="mt-1 relative text-lg text-gray-600 dark:text-gray-400">{{ t('subtitle') }}</div>
    <table class="mt-7">
      <tbody>
        <tr>
          <td>
            <Input type="email" ref="mailInputRef" :placeholder="t('email')" v-model="credentials.email" focus />
          </td>
        </tr>
        <tr>
          <td class="pt-3.5">
            <Input type="password" :placeholder="t('password')" v-model="credentials.password"
              @keydown.enter="signIn" />
          </td>
        </tr>
      </tbody>
    </table>
    <div class="mt-6 h-8" v-if="message">
      <span class="text-gray-700">{{ message }}</span>
    </div>
    <div class="mt-7">
      <Button @click="signIn" class="!px-7.5">{{ t('button') }}</button>
    </div>
  </div>
</template>


<script setup lang="ts">
const { t } = useI18n()
import Loggedin from "./Loggedin.vue"

const { setStepComponent } = useSteps()
const supabase = useSupabaseClient()
const router = useRouter()

const credentials = reactive({
  email: '',
  password: ''
})

const message = ref('')

const signIn = async () => {
  message.value = ''
  const { error } = await supabase.auth.signInWithPassword(credentials)
  if (error) {
    message.value = error.message
  } else {
    setStepComponent(Loggedin)
    router.push({ path: '/' })
  }
}
</script>

<i18n lang="json">{
  "de": {
    "title": "Login",
    "subtitle": "Puzzle",
    "email": "E-Mail",
    "password": "Passwort",
    "button": "Login"
  },
  "en": {
    "title": "Login",
    "subtitle": "Puzzle",
    "email": "E-Mail",
    "password": "Password",
    "button": "Login"
  }
}</i18n>
