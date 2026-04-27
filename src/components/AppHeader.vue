<script setup lang="ts">
import { socials } from '@/utils/constants'
</script>

<template>
  <header class="header">
    <div class="socials">
      <a
        v-for="(social, index) in socials"
        :key="social.name"
        class="socialsLink"
        :href="social.href"
        target="_blank"
        rel="noopener"
        :style="{ animationDelay: `${2300 + 150 * index}ms` }"
      >
        <SvgIcon :name="social.name" />
      </a>
    </div>
  </header>
</template>

<style lang="scss">
@keyframes bounceLinkPop {
  0%   { opacity: 0; transform: scale(0); }
  60%  { opacity: 1; transform: scale(1.15); }
  80%  { opacity: 1; transform: scale(0.92); }
  100% { opacity: 1; transform: scale(1); }
}

.header {
  @apply fixed z-10 top-0 md:top-[1rem] max-md:bottom-0 right-0 sm:right-[1rem];
  @apply flex items-center;
}

.socials {
  @apply flex flex-col items-center;
}

.socialsLink {
  @apply p-[0.75rem];
  opacity: 0;
  transform: scale(0);
  animation: bounceLinkPop 300ms cubic-bezier(0.215, 0.61, 0.355, 1.5) forwards;
}

.socialsLink svg {
  @apply w-[1.5rem] h-[1.5rem];
}

.socialsLink svg path {
  @apply transition-[fill] duration-150;
}

@media (hover: hover) {
  .socialsLink:hover svg path {
    @apply fill-emerald-600;
  }
}
</style>
