<script setup lang="ts">
import socials from '@/data/socials'
</script>

<template>
  <div class="social-links fixed inset-y-0 right-0 z-50 flex items-center">
    <div class="flex flex-col items-center pt-4 sm:pr-4">
      <a
        v-for="(social, index) in socials"
        :key="social.name"
        class="scale-0 animate-[social-link-pop_300ms_cubic-bezier(0.215,0.61,0.355,1.5)_forwards] p-3 text-white opacity-0 transition-colors duration-150 [&_svg]:size-6"
        :href="social.href"
        :aria-label="`Open ${social.name}`"
        target="_blank"
        rel="noopener"
        :style="{ animationDelay: `${1000 + 150 * index}ms` }"
      >
        <component
          :is="social.icon"
          aria-hidden="true"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss">
.social-links a {
  @media (hover: hover) {
    @apply hover:text-indigo-600;
  }
}

@keyframes social-link-pop {
  0%   { opacity: 0; transform: scale(0); }
  60%  { opacity: 1; transform: scale(1.15); }
  80%  { opacity: 1; transform: scale(0.92); }
  100% { opacity: 1; transform: scale(1); }
}
</style>
