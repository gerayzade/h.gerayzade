<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import WhoAmISection from '@/components/WhoAmISection.vue'

const isHeroSectionRevealing = ref(false)
const isHeroSectionRevealed = ref(false)
</script>

<template>
  <div class="index-page">
    <div v-if="isHeroSectionRevealing">
      <SocialLinks />
    </div>
    <HeroSection
      v-model:is-revealing="isHeroSectionRevealing"
      v-model:is-revealed="isHeroSectionRevealed"
    />
    <div v-show="isHeroSectionRevealed">
      <WhoAmISection />
    </div>
  </div>
</template>
