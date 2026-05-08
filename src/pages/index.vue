<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'

const isHeroSectionRevealing = ref(false)
const isHeroSectionRevealed = ref(false)
</script>

<template>
  <div class="index-page">
    <SocialLinks v-show="isHeroSectionRevealing" />
    <HeroSection
      v-model:is-revealing="isHeroSectionRevealing"
      v-model:is-revealed="isHeroSectionRevealed"
    />
  </div>
</template>
