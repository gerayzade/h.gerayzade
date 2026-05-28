<script lang="ts" setup>
</script>

<template>
  <section class="who-am-i-section fullscreen relative min-h-[max(100%,28rem)] w-full overflow-hidden">
    <img
      class="who-am-i-image absolute inset-0 size-full object-cover object-left opacity-50 brightness-50 grayscale"
      :src="'/images/baku.webp'"
      alt="Içeri Şeher"
    >
    <div class="who-am-i-text absolute inset-0 z-10 flex items-end justify-center p-16 max-xs:pl-4">
      <p class="max-w-screen-sm text-balance font-medium leading-normal tracking-tighter xs:text-xl">
        <span class="-mb-0.5 mr-1 rounded-md px-1 pb-0.5 font-black text-white">
          Who am I.
        </span>
        <mark
          v-mark="'-mx-px -mb-0.5 rounded-md px-1 pb-0.5 bg-white'"
          class="bg-transparent leading-normal text-neutral-950"
        >
          Based in Baku, focused on building scalable web applications with
          JavaScript frameworks and libraries. Currently I work primarily with Vue.js,
          Nuxt v4 and TypeScript to create performant and accessible products.
          With a background in Computer Science studies at ADA University and years
          of professionnal carrer, I enjoy turning complex ideas into clean, intuitive
          interfaces while continuously learning and collaborating with strong teams.
        </mark>
      </p>
    </div>
  </section>
</template>
