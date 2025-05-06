<template>
  <Page>
    <div class="flex flex-col lg:flex-row justify-between mt-20 md:mt-24 lg:mt-20 3xl:mt-24 md:mx-auto min-h-74">
      <Entry />

      <div class="md:w-60% w-87% lg:w-46% xl:w-60% mt-10">
        <Stepper />
      </div>
    </div>

    <OpenSourcePanel />

    <FeaturePanels />

    <div class="mt-19 lg:mt-27 mx-auto clear-left">
      <UserList class="ml-3 lg:ml-7" />
    </div>

    <FeatureSection />

    <div class="h-80"></div>
    </ Page>
</template>


<script setup lang="ts">
import Entry from '../components/app/Entry.vue'
import Stepper from '../components/app/Stepper.vue'
import UserList from '../components/user/UserList.vue'
import OpenSourcePanel from '~/components/app/OpenSourcePanel.vue'
import FeatureSection from '~/components/app/FeatureSection.vue'
import FeaturePanels from '~/components/app/FeaturePanels.vue'

definePageMeta({
  auth: false,
})
</script>


<style></style>