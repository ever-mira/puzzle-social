<template>
  <div class="-ml.5">
    <div class="ml-2 md:ml-7">

      <div class="text-[2.55rem] lg:text-[3.4rem] gradient-glow-text mt-8 font-figtree" data-text="Puzzle Social z-10">
        <span class="whitespace-nowrap">Puzzle.
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </div>
      <div
        class="text-[1.8rem] lg:text-[2.7rem] font-bold font-figtree text-gray-800 dark:text-gray-100 md:mt-.9 whitespace-nowrap">
        Community Network.</div>

      <div class="mt-2 text-lg">
        Regionale Vernetzung für Menschen.
      </div>

      <div class="mt-8 lg:mt-9">
        <div v-if="!user">
          <Button color="blue" @click="startClick" class="!px-8">
            {{ $t('app.start') }}
          </Button>

          <Button color="white" @click="loginClick" class="!px-7 ml-1.5">
            {{ $t('app.login') }}
          </Button>
        </div>
        <div v-if="user">
          <Button color="indigo" :to="`/@${profile?.username}`" class="!px-5">
            {{ $t('app.your_profile') }}
          </Button>
        </div>

        <h3 class="text-2xl mt-20">Dinge Tauschen.</h3>

        <span class="block text-lg mt-2 lg:mt-1">Dinge und Dienstleitungen tauschen, und neue Menschen
          kennenlernen.</span><br>
        <NuxtLink to="/exchange" class="text-blue-700 hover:text-blue-600  text-lg">Zum Tauschen →</NuxtLink>


        <h3 class="text-2xl mt-20">Nachhaltige Projekte fördern.</h3>

        <span class="block text-lg mt-2 lg:mt-1">Ein Beziehungsnetzwerk, um nachhaltige Projekte
          sichtbar zu machen, und Vernetzung zu fördern.</span><br>
        <NuxtLink to="/places" class="text-blue-700 hover:text-blue-600  text-lg">Zu den Projekten →</NuxtLink>

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
  line-height: 35px;
}

.gradient-glow-text::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg,
      var(--color-error) 0%,
      var(--color-secondary) 40%,
      var(--color-primary) 60%,
      var(--color-accent) 100%);
  filter: blur(19px);
  z-index: -1;
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