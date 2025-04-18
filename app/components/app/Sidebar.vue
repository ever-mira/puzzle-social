<template>
  <div
    class="absolute lg:block top-0 left-0 z-40 w-70 lg:w-67 px-4 py-2.7 z-30 h-screen bg-white dark:bg-black lg:border-r border-gray-300 dark:border-gray-800 lg:border-gray-100 dark:lg:border-gray-900 shadow-lg lg:shadow-none transition-all duration-200 ease-out"
    :class="isSidebarVisible ? 'opacity-100 translate-x-0 !block' : 'opacity-0 !-z-10 lg:!z-30 lg:opacity-100 -translate-x-7 lg:translate-x-0'">

    <AppTitle />

    <!-- <img src="../../assets/puzzles.png" class="hidden lg:block w-81 lg:w-56 mt-3.5 mx-auto pr-2 opacity-0"> -->
    <div class="h-11"></div>


    <UserPanel v-if="user" />

    <div>
      <NavLink to="/" class="mt-6">
        <HomeIcon class="inline w-6 text-sky-600 -mt.5 mr-4" />{{ $t('menu.start') }}
      </NavLink>

      <NavLink to="/people">
        <UserGroupIcon class="inline w-6 text-sky-600 -mt.5 mr-4" />{{ $t('menu.people') }}
      </NavLink>

      <NavLink to="/places">
        <MapIcon class="inline w-6 text-sky-600 -mt.5 mr-4" />{{ $t('menu.places') }}
      </NavLink>

      <NavLink to="/events">
        <CalendarDaysIcon class="inline w-6 text-sky-600 -mt.5 mr-4" />{{ $t('menu.events') }}
      </NavLink>

      <NavLink to="/exchange">
        <ShareIcon class="inline w-6 text-sky-600 -mt.5 mr-4" />{{ $t('menu.exchange') }}
      </NavLink>

      <NavLink to="/chat">
        <ChatBubbleLeftRightIcon class="inline w-6 text-sky-600 -mt.5 mr-4" />{{ $t('menu.chat') }}
      </NavLink>
    </div>

    <div class="mt-6 mb-9">
      <LoginPanel v-if="!user" />
    </div>

    <div class="border-t border-gray-200 dark:border-gray-700 mt-7 pt-1.5" v-if="user">
      <NavLink to="/conversations">
        <div class="relative">
          <EnvelopeIcon class="inline w-5.5 text-sky-600 -mt.5 mr-4" />{{
            $t('app.mailbox') }}
          <div
            class="inline-flex h-4.8 w-4.8 ml-2 items-center justify-center rounded-full bg-blue-600 text-white text-sm leading-none"
            v-if="unreadConversationCount">
            <div class="-ml.1 -mt.45 font-normal">{{ unreadConversationCount }}</div>
          </div>
        </div>
      </NavLink>
      <NavLink to="/settings">
        <Cog6ToothIcon class="inline w-5.5 text-sky-600 -mt.5 mr-4" />{{ $t('app.settings') }}
      </NavLink>
      <div @click="logout" class="px-4.5 mt-4">
        <span class="text-blue-7 dark:text-blue-6 cursor-pointer">{{ $t('app.logout') }}</span>
      </div>
    </div>

    <div class="flex mt-6 pt-5 border-t border-gray-200 dark:border-gray-700 ">
      <div class="">
        <LanguageDropdown />
      </div>
      <div class="px-9 py-1.4">
        <ToggleDark />
      </div>
    </div>

  </div>

  <div class="hidden fixed top-0 left-0 h-screen w-screen z-20 cursor-pointer bg-gray-100 dark:bg-gray-900 opacity-30"
    :class="{ '!block': isSidebarVisible }" @click="hideSidebar"></div>
</template>


<script setup lang="ts">
import AppTitle from './AppTitle.vue'
import UserPanel from './UserPanel.vue'
import LoginPanel from './LoginPanel.vue'
import NavLink from './NavLink.vue'
import LanguageDropdown from '../language/LanguageDropdown.vue'
import ToggleDark from './DarkToggle.vue'
import Puzzle from "../steps/Puzzle.vue"

import { HomeIcon } from '@heroicons/vue/24/solid'
import { UserGroupIcon } from '@heroicons/vue/24/solid'
import { MapIcon } from '@heroicons/vue/24/outline'
import { CalendarDaysIcon } from '@heroicons/vue/24/solid'
import { ShareIcon } from '@heroicons/vue/24/outline'
import { ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid'
import { EnvelopeIcon } from '@heroicons/vue/24/solid'
import { Cog6ToothIcon } from '@heroicons/vue/24/solid'


const router = useRouter()
const user: Ref = useSupabaseUser()
const supabase = useSupabaseClient()
const { setStepComponent, reset } = useSteps()
const { isSidebarVisible, hideSidebar } = useApp()
const { unreadConversationCount, fetchUnreadConversationCount } = useConversations()

await fetchUnreadConversationCount()

const logout = async () => {
  await supabase.auth.signOut()
  reset()
  router.push({ path: '/' })
  setStepComponent(Puzzle)
  hideSidebar()
}

</script>
