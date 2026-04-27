<script setup lang="ts">
const title = 'h·gerayzade'

const greeting = `
  Hi there, I'm Heydar — a front-end developer with
  over 10 years of hands-on experience in tech!
`

const animate = ref(false)

onMounted(async () => {
  await sleep(1000)
  animate.value = true
})

const { html: greetingHtml } = useTypewriter(greeting, {
  delay: 2000,
  speed: 2.5,
})
</script>

<template>
  <section class="hero-section">
    <h1
      class="hero-title"
      :class="{ animate }"
    >
      <span>{{ title.slice(0, 3) }}</span>
      <span>{{ title.slice(3) }}</span>
      <span
        class="circle"
        :class="{ animate }"
      />
    </h1>
    <!-- eslint-disable vue/no-v-html -->
    <p
      class="greeting"
      v-html="greetingHtml"
    />
    <!-- eslint-enable vue/no-v-html -->
    <div
      class="hero-image"
      :class="{ animate }"
    >
      <img
        src="/images/h.g-min.webp"
        :alt="title"
      >
    </div>
  </section>
</template>

<style lang="scss">
@keyframes flyDown {
  from { opacity: 0; transform: translateY(-10px) !important; }
  to   { opacity: 1; transform: translateY(0) !important; }
}

@keyframes flyUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes bouncePop {
  0%   { opacity: 0; transform: translateY(-50%) scale(0); }
  60%  { opacity: 1; transform: translateY(-50%) scale(1.15); }
  80%  { opacity: 1; transform: translateY(-50%) scale(0.92); }
  100% { opacity: 1; transform: translateY(-50%) scale(1); }
}

.hero-section {
  @apply absolute inset-0;
  @apply text-center text-white;
  @apply flex flex-col w-full p-[4rem] md:pl-[34rem];

  .hero-title {
    @apply relative;
    @apply font-extrabold text-4xl sm:text-6xl;
    @apply self-center sm:mt-[4rem] md:mt-auto;

    opacity: 0;
    transform: translateY(-10px);
    animation: flyDown 1000ms ease forwards;

    span:nth-child(1) {
      transition: color 300ms ease 1000ms;
    }

    &.animate span:nth-child(1) {
      @apply text-gray-800;
    }
  }

  .circle {
    @apply absolute -z-10 -left-[0.2em] top-1/2 -translate-y-1/2;
    @apply w-[1.9em] h-[1.9em] bg-emerald-600 rounded-full;

    opacity: 0;
    transform: translateY(-50%) scale(0);

    &.animate {
      animation: bouncePop 300ms cubic-bezier(0.215, 0.61, 0.355, 1.5) 1000ms forwards;
    }
  }

  .greeting {
    @apply font-medium;
    @apply w-[18rem] sm:w-[24rem] max-w-full mx-auto mt-[3.5rem] sm:mt-[4rem] md:mb-auto;
  }

  .hero-image {
    @apply absolute -z-10 bottom-0 left-1/2 md:left-0 lg:left-[5rem] -translate-x-1/2 md:translate-x-0;
    @apply flex-col justify-end;

    transition: filter 300ms ease 1000ms;

    &.animate {
      @apply drop-shadow-emerald;

      @media (hover: none) {
        transition-delay: 0ms;
      }
    }
  }

  .hero-image img {
    @apply w-auto max-w-none h-[22rem] xs:h-[28rem] md:h-[40rem] 2xl:h-[48rem] max-h-full;
    @apply grayscale brightness-75;

    opacity: 0;
    transform: translateY(20px);
    animation: flyUp 1000ms ease forwards;
  }
}
</style>
