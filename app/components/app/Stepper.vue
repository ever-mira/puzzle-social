<template>
  <div class="w-full text-lg mt-9 lg:-mt-5 mb-5 lg:mb-0">
    <div class="w-full px-2 md:w-[360px]">
      <transition name="stepChange" mode="out-in">
        <component :is="stepComponent"></component>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
const { stepComponent } = useSteps()
</script>

<style>
.stepChange-leave-active {
  transition: all 0.14s ease;
}

.stepChange-enter-active {
  transition: all 0.14s ease;
}

.stepChange-leave-to {
  opacity: 0;
  transform: translateX(-4px);
}

.stepChange-enter-from {
  opacity: 0;
  transform: translateX(4px);
}
</style>