<template>
  <div>
    <div class="md:ml-7">
      <div class="text-center">
        <div class="animate-float">
          <div class="text-[3.5rem] lg:text-[4.5rem] gradient-glow-text mt-8 font-figtree" data-text="Puzzle Social">
            <span class="whitespace-nowrap">Puzzle.</span>
          </div>
        </div>
        <div
          class="text-[2rem] lg:text-[2.5rem] font-bold font-figtree text-gray-800 dark:text-gray-100 mt-4 whitespace-nowrap">
          Community Network.
        </div>

        <p class="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Das Soziale Netzwerk für eine neue Realität.
        </p>

        <div class="mt-12 flex flex-col sm:flex-row justify-center gap-4 xl:w-130 2xl:w-160">
          <div v-if="!user">
            <Button color="indigo" @click="startClick" class="!px-9 !py-1.8 text-lg">
              {{ $t('app.start') }}
            </Button>

            <Button color="transparent" @click="loginClick" class="!px-7 !py-1.8 text-lg ml-4">
              {{ $t('app.login') }}
            </Button>
          </div>
          <div v-if="user">
            <Button color="indigo" :to="`/@${profile?.username}`" class="!px-8 !py-1.8 text-lg">
              {{ $t('app.your_profile') }}
            </Button>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Login from '../steps/Login.vue'
import SignupStepUsername from '../steps/SignupStepUsername.vue'

const user: Ref = useSupabaseUser()
const { profile } = useUser()
const { setStepComponent } = useSteps()

const startClick = () => {
  setStepComponent(SignupStepUsername)
}

const loginClick = () => {
  setStepComponent(Login)
}
</script>

<style>
:root {
  --color-error: rgba(255, 0, 122, 0.35);
  --color-secondary: rgba(125, 0, 255, 0.35);
  --color-primary: rgba(0, 170, 255, 0.35);
  --color-accent: rgba(0, 255, 217, 0.35);
}

.gradient-glow-text {
  position: relative;
  font-weight: 600;
  color: transparent;
  line-height: 1.2;
}

.gradient-glow-text span {
  background: linear-gradient(90deg,
      rgb(255, 0, 128) 0%,
      rgba(125, 0, 255, 1) 40%,
      rgb(0, 140, 255) 60%,
      rgb(0, 166, 195) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>