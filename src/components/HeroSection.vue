<script lang="ts" setup>
import { websiteTitle } from '@/utils/constants'
import SocialLinks from '@/components/SocialLinks.vue'

const isSectionMounted = ref(false)
const isSectionRevealed = ref(false)

onMounted(async () => {
  isSectionMounted.value = true
  await sleep(2250)
  isSectionRevealed.value = true
})

const { html: greetingHtml } = useTypewriter(`
  Hi there, I'm Heydar — a front-end developer with
  over 10 years of hands-on experience in tech!
`, {
  delay: 1000,
  speed: 8,
})

const { html: scrollToStartHtml } = useTypewriter('[scroll to start]', {
  delay: 2250,
  speed: 8,
})
</script>

<template>
  <section class="hero-section relative flex h-screen min-h-[40.4rem] w-full flex-col p-16 text-center text-white md:pl-[34rem]">
    <SocialLinks v-show="isSectionMounted" />
    <h1 class="relative -translate-y-2.5 animate-[hero-fly-down_1000ms_ease_forwards] self-center text-4xl font-extrabold opacity-0 md:mt-auto md:text-6xl">
      <span
        class="ml-[0.05em] transition-colors delay-1000 duration-300"
        :class="{ 'text-gray-800': isSectionMounted }"
      >
        {{ websiteTitle.slice(0, 3) }}
      </span>
      <span>
        {{ websiteTitle.slice(3) }}
      </span>
      <span
        class="absolute left-[-0.2em] top-1/2 -z-10 h-[1.9em] w-[1.9em] -translate-y-1/2 scale-0 rounded-full bg-emerald-600 opacity-0"
        :class="{ 'animate-[hero-circle-pop_300ms_cubic-bezier(0.215,0.61,0.355,1.5)_1000ms_forwards]': isSectionMounted }"
      />
    </h1>
    <!-- eslint-disable vue/no-v-html -->
    <p
      class="mx-auto mt-14 w-72 max-w-full font-medium md:mb-auto md:mt-16 md:w-96"
      v-html="greetingHtml"
    />
    <div
      :key="`scroll-down/autoplay/${isSectionRevealed}`"
      v-lottie="{
        name: 'scroll-down',
        autoplay: isSectionRevealed,
      }"
      class="mx-auto mt-6 size-12"
    />
    <div
      class="mb-8 mt-2 text-xs font-medium"
      v-html="scrollToStartHtml"
    />
    <!-- eslint-enable vue/no-v-html -->
    <div
      class="absolute bottom-0 left-1/2 -z-10 -translate-x-1/2 flex-col justify-end [transition:filter_300ms_ease_1000ms] md:left-0 md:translate-x-0 lg:left-20"
      :class="{ 'drop-shadow-emerald': isSectionMounted }"
    >
      <img
        class="h-80 w-auto max-w-none translate-y-5 animate-[hero-fly-up_1000ms_ease_forwards] opacity-0 brightness-75 xs:min-h-[50vh] md:h-[40rem] md:max-h-full 2xl:h-[48rem]"
        src="/images/h.g.webp"
        :alt="websiteTitle"
      >
    </div>
  </section>
</template>

<style lang="scss">
@keyframes hero-fly-down {
  from { opacity: 0; transform: translateY(-10px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes hero-fly-up {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes hero-circle-pop {
  0%   { opacity: 0; transform: translateY(-50%) scale(0); }
  60%  { opacity: 1; transform: translateY(-50%) scale(1.15); }
  80%  { opacity: 1; transform: translateY(-50%) scale(0.92); }
  100% { opacity: 1; transform: translateY(-50%) scale(1); }
}
</style>
