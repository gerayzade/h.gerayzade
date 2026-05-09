<script lang="ts" setup>
</script>

<template>
  <section class="who-am-i-section fullscreen relative min-h-max w-full overflow-hidden">
    <img
      class="min-h-[max(100%,25rem)] w-full object-cover object-center opacity-20"
      src="/images/baku.webp"
      alt="Baku"
    >
    <div class="absolute inset-0 flex items-center justify-center p-16">
      <p class="relative z-10 max-w-screen-xs text-balance font-medium leading-normal tracking-tighter xs:text-2xl">
        <span class="mr-4 text-sm font-black text-white">
          Who am I
          <span class="text-emerald-600">
            .
          </span>
        </span>
        <mark
          v-mark="'bg-gray-800'"
          class="bg-transparent leading-normal text-white"
        >
          Based in Baku, focused on building scalable web applications with JavaScript frameworks
          and libraries. Currently I work primarily with Vue.js, Nuxt v4 and TypeScript to create performant
          and user-friendly products. With a background in Computer Science studies at ADA University
          and years of professionnal carrer, I enjoy turning complex ideas into clean, intuitive interfaces
          while continuously learning and collaborating with strong teams.
        </mark>
      </p>
    </div>
  </section>
</template>
