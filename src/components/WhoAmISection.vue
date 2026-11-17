<script lang="ts" setup>
type Token = {
  text: string
  chip: boolean
  space: boolean
}

/**
 * Splits copy into word tokens for the scroll reveal. `[...]` marks a keyword chip;
 * `space` records whether whitespace preceded the token, so punctuation can hug a chip ("Baku,").
 */
const tokenize = (copy: string): Token[] =>
  Array.from(copy.trim().matchAll(/(\s*)(?:\[([^\]]+)\]|([^\s[]+))/g), ([, gap, chipText, word], i) => ({
    text: chipText ?? word!,
    chip: chipText !== undefined,
    space: i > 0 && gap!.length > 0,
  }))

const lead = tokenize(`
  Based in [Baku], focused on building [scalable] [web applications] with [JavaScript]
  frameworks and libraries. Currently I work primarily with [Vue.js], [Nuxt] and [TypeScript]
  to create performant and accessible products.
`)

const background = tokenize(`
  With a background in Computer Science at ADA University and years of professional experience,
  I enjoy turning complex ideas into clean, intuitive interfaces while continuously learning
  and collaborating with strong teams.
`)
</script>

<template>
  <section class="who-am-i-section relative h-[250vh] w-full">
    <!--
      The section is taller than the viewport and its content sticks to the top, so the scroll
      distance while it's held in place drives the word-by-word reveal (see `index.vue`).
    -->
    <div class="fullscreen sticky top-0 flex min-h-max w-full items-center overflow-hidden">
      <!-- Overscanned by 15% top and bottom so the parallax never exposes an edge. -->
      <img
        class="who-am-i-image absolute inset-x-0 top-[-15%] h-[130%] w-full object-cover object-left opacity-50 brightness-75"
        :src="'/images/baku.webp'"
        alt="Heydar Aliyev Center"
      >
      <!-- Darkest behind the copy on the left, with an indigo tint rising from the bottom. -->
      <div
        aria-hidden="true"
        class="who-am-i-overlay absolute inset-0"
      />
      <!-- Right padding keeps the copy clear of the fixed social links column. -->
      <div class="who-am-i-text relative z-10 w-full px-8 py-24 pr-16 xs:px-12 xs:pr-20 md:px-20 lg:px-24 xl:px-36">
        <h2 class="text-5xl font-extrabold tracking-tight text-white xs:text-6xl lg:text-7xl">
          Who <span class="text-indigo-500">am I?</span>
        </h2>

        <p class="mt-8 max-w-[52rem] text-pretty text-xl font-medium leading-[1.75] tracking-tight text-white xs:mt-10 xs:text-2xl lg:text-[1.75rem]">
          <template
            v-for="(token, i) in lead"
            :key="i"
          >
            {{ token.space ? ' ' : '' }}<span
              :class="token.chip
                ? 'who-am-i-chip mx-px inline-block rounded-lg bg-violet-100 px-[0.3em] font-bold leading-[1.45] text-neutral-950 shadow-[inset_0_-1px_0_rgba(139,92,246,0.35)]'
                : 'who-am-i-word'"
            >{{ token.text }}</span>
          </template>
        </p>

        <p class="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-neutral-400 xs:mt-8 xs:text-xl">
          <template
            v-for="(token, i) in background"
            :key="i"
          >
            {{ token.space ? ' ' : '' }}<span class="who-am-i-word">{{ token.text }}</span>
          </template>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.who-am-i-overlay {
  background:
    linear-gradient(
      90deg,
      rgba(5, 5, 10, 0.92) 0%,
      rgba(5, 5, 10, 0.65) 45%,
      rgba(5, 5, 10, 0.25) 100%
    ),
    linear-gradient(
      0deg,
      rgba(79, 70, 229, 0.15),
      transparent 60%
    );
}
</style>
