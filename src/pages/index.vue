<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import WhoAmISection from '@/components/WhoAmISection.vue'

const { $gsap, $ScrollTrigger } = useNuxtApp()

const isHeroSectionRevealing = ref(false)
const isHeroSectionRevealed = ref(false)

const indexPageRef = useTemplateRef('indexPage')
const heroSectionRef = useTemplateRef('heroSection')
const whoAmISectionRef = useTemplateRef('whoAmISection')

onMounted(() => {
  const indexPageEl = indexPageRef.value
  const heroSectionEl = heroSectionRef.value?.$el
  const whoAmISectionEl = whoAmISectionRef.value?.$el

  if (!indexPageEl || !heroSectionEl || !whoAmISectionEl) {
    return
  }

  const heroImageEl = heroSectionEl.querySelector('.hero-image')
  const whoAmIImageEl = whoAmISectionEl.querySelector('.who-am-i-image')

  $ScrollTrigger.create({
    trigger: indexPageEl,
    start: 'top top',
    end: 'bottom bottom',
    pin: heroImageEl,
  })

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
  tl.from(whoAmIImageEl, { y: 400 }, 1)
})
</script>

<template>
  <div
    ref="indexPage"
    class="index-page"
  >
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
