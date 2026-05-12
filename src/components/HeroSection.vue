<script lang="ts" setup>
import { websiteTitle } from '@/utils/constants'

const isRevealing = defineModel<boolean>('isRevealing', { default: false })
const isRevealed = defineModel<boolean>('isRevealed', { default: false })

onMounted(async () => {
  isRevealing.value = true
  await sleep(2250)
  isRevealed.value = true
})

const { html: greetingHtml } = useTypewriter(`
  Hey there, I'm Heydar — a front-end developer
  with over 10 years of hands-on experience in tech!
`, {
  delay: 1000,
  speed: 8,
})
</script>

<template>
  <section class="hero-section fullscreen relative flex min-h-[40.4rem] w-full flex-col overflow-hidden p-16 text-center text-white md:pl-[34rem]">
    <h1 class="relative -translate-y-2.5 animate-[hero-fly-down_1000ms_ease_forwards] self-center text-4xl font-extrabold opacity-0 md:mt-auto md:text-6xl">
      <span
        class="transition-colors delay-1000 duration-300"
        :class="{ 'text-neutral-950': isRevealing }"
      >
        {{ websiteTitle.slice(0, 3) }}
      </span>
      <span>
        {{ websiteTitle.slice(3) }}
      </span>
      <span
        class="hero-circle absolute left-[-0.15em] top-[0.585em] -z-10 h-[1.9em] w-[1.9em] -translate-y-1/2 scale-0 rounded-full bg-indigo-600 opacity-0"
        :class="{ 'animate-[hero-circle-pop_300ms_cubic-bezier(0.215,0.61,0.355,1.5)_1000ms_forwards]': isRevealing }"
      />
    </h1>
    <!-- eslint-disable vue/no-v-html -->
    <p
      class="mx-auto mt-14 w-[20.5rem] max-w-full font-medium tracking-tighter xs:mb-2 md:mb-auto md:mt-16"
      v-html="greetingHtml"
    />
    <!-- eslint-enable vue/no-v-html -->
    <div class="scroll-down-hint">
      <div
        :key="`scroll-down/autoplay/${isRevealed}`"
        v-lottie="{
          name: 'scroll-down',
          autoplay: isRevealed,
        }"
        class="mx-auto mt-6 size-12"
      />
      <div
        :class="[
          'mx-auto mb-8 mt-2 w-max whitespace-nowrap text-xs font-medium tracking-tighter transition-opacity',
          { 'opacity-0': !isRevealed },
        ]"
      >
        [scroll to start]
      </div>
    </div>
    <div class="hero-image absolute bottom-0 left-1/2 -translate-x-1/2 flex-col justify-end md:left-0 md:translate-x-0 lg:left-20">
      <img
        class="h-80 w-auto max-w-none translate-y-5 animate-[hero-fly-up_6000ms_ease_forwards] opacity-0 brightness-75 xs:min-h-[50vh] md:h-[40rem] md:max-h-full 2xl:h-[48rem]"
        :alt="websiteTitle"
        src="/images/h.g.webp"
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
