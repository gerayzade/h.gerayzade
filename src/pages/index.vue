<script setup lang="ts">
import colors from 'tailwindcss/colors'
import { scrubBetween } from '@/utils/gsap'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import WhoAmISection from '@/components/WhoAmISection.vue'

const { $gsap } = useNuxtApp()

const isHeroSectionRevealing = ref(false)
const isHeroSectionRevealed = ref(false)

const indexPageRef = useTemplateRef('indexPage')
const socialLinksRef = useTemplateRef<{ $el?: HTMLElement }>('socialLinks')
const heroSectionRef = useTemplateRef<{ $el?: HTMLElement }>('heroSection')
const whoAmISectionRef = useTemplateRef<{ $el?: HTMLElement }>('whoAmISection')
const skillsSectionRef = useTemplateRef<{ $el?: HTMLElement }>('skillsSection')

onMounted(() => {
  const indexPageEl = indexPageRef.value
  const socialLinksEl = socialLinksRef.value?.$el
  const heroSectionEl = heroSectionRef.value?.$el
  const whoAmISectionEl = whoAmISectionRef.value?.$el
  const skillsSectionEl = skillsSectionRef.value?.$el

  if (!indexPageEl || !socialLinksEl || !heroSectionEl || !whoAmISectionEl || !skillsSectionEl) {
    return
  }

  const heroImageEl = heroSectionEl.querySelector('.hero-image')
  const scrollDownHintEl = heroSectionEl.querySelector('.scroll-down-hint')
  const whoAmIImageEl = whoAmISectionEl.querySelector('.who-am-i-image')
  const whoAmITextEl = whoAmISectionEl.querySelector('.who-am-i-text p')
  const whoAmITextEls = whoAmISectionEl.querySelectorAll('.who-am-i-text span')
  const skillGroupEls = skillsSectionEl.querySelectorAll('.skill-group')

  // Hero -> Who Am I
  $gsap.timeline(scrubBetween(heroSectionEl, whoAmISectionEl))
    .to(socialLinksEl, { bottom: 'auto' }, 0)
    .to(heroSectionEl, { opacity: 0 }, 0)
    .to(heroImageEl, { bottom: '-33%' }, 0)
    .to(scrollDownHintEl, { yPercent: 100, ease: 'none' }, 0)
    .from(whoAmISectionEl, { opacity: 0 }, 0)

  // Who Am I / Text reveal
  $gsap.timeline(scrubBetween(whoAmITextEl, whoAmISectionEl, {
    start: 'top bottom',
    end: 'bottom center',
  }))
    .from(whoAmITextEls, { opacity: 0.15, backgroundColor: colors.transparent, color: colors.white, stagger: 1 })

  // Who Am I / Image parallax
  $gsap.timeline(scrubBetween(heroSectionEl, skillsSectionEl))
    .fromTo(whoAmIImageEl,
      { yPercent: -25, ease: 'none' },
      { yPercent: 25, ease: 'none' },
    )

  // Who Am I -> Skills
  $gsap.timeline(scrubBetween(whoAmISectionEl, skillsSectionEl))
    .from(skillsSectionEl, { opacity: 0 }, 0)

  // Skills / Groups reveal
  $gsap.timeline(scrubBetween(skillGroupEls[0] ?? null, skillsSectionEl, {
    start: 'center bottom',
  }))
    .from(skillGroupEls, { opacity: 0, stagger: 1 }, 0)
    .from(skillGroupEls, { yPercent: 25, ease: 'none', stagger: 1 }, 0)
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
    <WhoAmISection ref="whoAmISection" />
    <SkillsSection ref="skillsSection" />
  </div>
</template>
