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
      <p class="max-w-screen-sm text-balance font-medium leading-normal tracking-tighter xs:text-2xl">
        <span class="relative ml-px mr-1 bg-indigo-600 p-0.5 text-xs font-black text-white xs:bottom-0.5 xs:mr-2 xs:p-1 xs:text-sm">
          Who am I.
        </span>
        <mark
          v-mark="'bg-white'"
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
