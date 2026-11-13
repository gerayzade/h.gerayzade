<script setup lang="ts">
import socials from '@/data/socials'
</script>

<template>
  <div class="social-links fixed inset-y-0 right-0 z-50 flex items-center">
    <div class="flex flex-col items-center pt-4 sm:pr-4">
      <a
        v-for="(social, index) in socials"
        :key="social.name"
        class="scale-0 animate-[social-link-pop_300ms_cubic-bezier(0.215,0.61,0.355,1.5)_forwards] p-1 text-white opacity-0 transition-colors duration-150 focus-visible:outline-none [&_svg]:size-6"
        :href="social.href"
        :aria-label="`Open ${social.name}`"
        target="_blank"
        rel="noopener"
        :style="{ animationDelay: `${1000 + 150 * index}ms` }"
      >
        <!-- Bare icon by default; the index page fades the tile in over the skills section. -->
        <span class="social-tile grid size-10 place-items-center rounded-xl border border-transparent">
          <component
            :is="social.icon"
            aria-hidden="true"
          />
        </span>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.social-links a {
  @media (hover: hover) {
    @apply hover:text-indigo-600;
  }

  &:focus-visible .social-tile {
    @apply outline outline-2 outline-offset-2 outline-indigo-400;
  }
}

@keyframes social-link-pop {
  0%   { opacity: 0; transform: scale(0); }
  60%  { opacity: 1; transform: scale(1.15); }
  80%  { opacity: 1; transform: scale(0.92); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
