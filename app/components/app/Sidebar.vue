<template>
  <div
    class="absolute lg:block top-0 left-0 z-40 w-70 lg:w-67 px-4 py-2.7 z-30 h-screen bg-white/80 dark:bg-[#0a0a0a]/80 backdrop-blur-lg lg:border-r border-gray-200 dark:border-gray-800 lg:border-gray-100 dark:lg:border-gray-900 shadow-lg lg:shadow-none transition-all duration-200 ease-out"
    :class="isSidebarVisible ? 'opacity-100 translate-x-0 !block' : 'opacity-0 !-z-10 lg:!z-30 lg:opacity-100 -translate-x-7 lg:translate-x-0'">

    <AppTitle />

    <!-- <img src="../../assets/puzzles.png" class="hidden lg:block w-81 lg:w-56 mt-3.5 mx-auto pr-2 opacity-0"> -->
    <div class="h-5 lg:h-11"></div>


    <UserPanel v-if="user" />
    <div class="h-9" v-if="!user" />

    <div class="space-y-2">
      <NavLink to="/" class="modern-list-item">
        <HomeIcon class="w-6 h-6 text-indigo-600 inline mr-4" />
        <span>{{ $t('menu.start') }}</span>
      </NavLink>

      <NavLink to="/people">
        <UserGroupIcon class="w-6 h-6 text-indigo-600 inline mr-4" />
        <span>{{ $t('menu.people') }}</span>
      </NavLink>

      <NavLink to="/places">
        <MapIcon class="w-6 h-6 text-indigo-600 inline mr-4" />
        <span>{{ $t('menu.places') }}</span>
      </NavLink>

      <NavLink to="/events">
        <CalendarDaysIcon class="w-6 h-6 text-indigo-600 inline mr-4" />
        <span>{{ $t('menu.events') }}</span>
      </NavLink>

      <NavLink to="/exchange">
        <ShareIcon class="w-6 h-6 text-indigo-600 inline mr-4" />
        <span>{{ $t('menu.exchange') }}</span>
      </NavLink>

      <NavLink to="/chat">
        <ChatBubbleLeftRightIcon class="w-6 h-6 text-indigo-600 inline mr-4" />
        <span>{{ $t('menu.chat') }}</span>
      </NavLink>
    </div>

    <div class="mt-7 mb-9">
      <LoginPanel v-if="!user" />
    </div>

    <div class="border-t border-gray-200 dark:border-gray-800 mt-7 pt-1.5" v-if="user">
      <NavLink to="/conversations">
        <div class="relative flex items-center">
          <EnvelopeIcon class="w-5 h-5 text-indigo-600" />
          <span class="ml-4">{{ $t('app.mailbox') }}</span>
          <div
            class="ml-auto inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary-500 text-white text-xs font-medium"
            v-if="unreadConversationCount">
            {{ unreadConversationCount }}
          </div>
        </div>
      </NavLink>
      <NavLink to="/settings">
        <Cog6ToothIcon class="w-5 h-5 text-indigo-600" />
        <span class="ml-4">{{ $t('app.settings') }}</span>
      </NavLink>
      <div @click="logout" class="mt-4">
        <span class="text-indigo-600 dark:text-primary-400">{{ $t('app.logout') }}</span>
      </div>
    </div>

    <div class="flex mt-6 pt-5 border-t border-gray-200 dark:border-gray-800">
      <div class="flex-1">
        <LanguageDropdown />
      </div>
      <div class="px-4">
        <ToggleDark />
      </div>
    </div>

  </div>

  <div class="hidden fixed top-0 left-0 h-screen w-screen z-20 cursor-pointer bg-gray-100/50 dark:bg-gray-900/50"
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
