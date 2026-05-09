<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import WhoAmISection from '@/components/WhoAmISection.vue'

const { $gsap } = useNuxtApp()

const isHeroSectionRevealing = ref(false)
const isHeroSectionRevealed = ref(false)

const heroSectionRef = useTemplateRef('heroSection')
const whoAmISectionRef = useTemplateRef('whoAmISection')

onMounted(() => {
  const heroSectionEl = heroSectionRef.value?.$el
  const whoAmISectionEl = whoAmISectionRef.value?.$el

  if (!heroSectionEl || !whoAmISectionEl) {
    return
  }

  const tl = $gsap.timeline({
    defaults: {
      ease: 'power1.inOut',
      duration: 1,
    },
    scrollTrigger: {
      trigger: heroSectionEl,
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    },
  })

  tl.to(heroSectionEl, { opacity: 0 }, 0)
  tl.from(whoAmISectionEl, { opacity: 0 }, 0)
})
</script>

<template>
  <div class="index-page">
    <div v-if="isHeroSectionRevealing">
      <SocialLinks />
    </div>
    <HeroSection
      ref="heroSection"
      v-model:is-revealing="isHeroSectionRevealing"
      v-model:is-revealed="isHeroSectionRevealed"
    />
    <div v-show="isHeroSectionRevealed">
      <WhoAmISection ref="whoAmISection" />
    </div>
  </div>
</template>
