<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import WhoAmISection from '@/components/WhoAmISection.vue'

const { $gsap } = useNuxtApp()

const isHeroSectionRevealing = ref(false)
const isHeroSectionRevealed = ref(false)

const indexPageRef = useTemplateRef('indexPage')
const socialLinksRef = useTemplateRef<{ $el?: HTMLElement }>('socialLinks')
const heroSectionRef = useTemplateRef<{ $el?: HTMLElement }>('heroSection')
const whoAmISectionRef = useTemplateRef<{ $el?: HTMLElement }>('whoAmISection')

onMounted(() => {
  const indexPageEl = indexPageRef.value
  const socialLinksEl = socialLinksRef.value?.$el
  const heroSectionEl = heroSectionRef.value?.$el
  const whoAmISectionEl = whoAmISectionRef.value?.$el

  if (!indexPageEl || !socialLinksEl || !heroSectionEl || !whoAmISectionEl) {
    return
  }

  const heroImageEl = heroSectionEl.querySelector('.hero-image')
  const scrollDownHintEl = heroSectionEl.querySelector('.scroll-down-hint')
  const whoAmIImageEl = whoAmISectionEl.querySelector('.who-am-i-image')
  const whoAmITextEl = whoAmISectionEl.querySelector('.who-am-i-text')

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

  tl.to(socialLinksEl, { bottom: 'auto' }, 0)
  tl.to(heroSectionEl, { opacity: 0 }, 0)
  tl.to(heroImageEl, { bottom: '-33%' }, 0)
  tl.to(scrollDownHintEl, { yPercent: 100, ease: 'none' }, 0)
  tl.from(whoAmISectionEl, { opacity: 0 }, 0)
  tl.from(whoAmIImageEl, { yPercent: -25, ease: 'none' }, 0)
  tl.from(whoAmITextEl, { yPercent: 100, ease: 'none' }, 0)
})
</script>

<template>
  <div
    ref="indexPage"
    class="index-page"
  >
    <div v-show="isHeroSectionRevealing">
      <SocialLinks ref="socialLinks" />
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
