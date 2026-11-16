<script setup lang="ts">
import colors from 'tailwindcss/colors'
import { websiteUrl } from '@/utils/constants'
import { scrubBetween } from '@/utils/gsap'
import HeroSection from '@/components/HeroSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import SocialLinks from '@/components/SocialLinks.vue'
import WhoAmISection from '@/components/WhoAmISection.vue'

useHead({
  link: [{ rel: 'canonical', href: websiteUrl }],
})

const { $gsap, $ScrollTrigger } = useNuxtApp()

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
  const whoAmITokenEls = whoAmISectionEl.querySelectorAll('.who-am-i-word, .who-am-i-chip')
  const socialTileEls = socialLinksEl.querySelectorAll('.social-tile')
  const skillsTitleEl = skillsSectionEl.querySelector('.skills-title')
  const skillGroupEls = skillsSectionEl.querySelectorAll('.skill-group')
  const downloadResumeLinkEl = skillsSectionEl.querySelector('.download-resume-link')

  // Hero -> Who Am I
  $gsap.timeline(scrubBetween(heroSectionEl, whoAmISectionEl))
    .to(socialLinksEl, { bottom: 'auto' }, 0)
    .to(heroSectionEl, { opacity: 0 }, 0)
    .to(heroImageEl, { bottom: '-33%' }, 0)
    .to(scrollDownHintEl, { yPercent: 100, ease: 'none' }, 0)
    .from(whoAmISectionEl, { opacity: 0 }, 0)

  // Who Am I / Text reveal: runs while the section's content is stuck to the viewport, so it starts
  // only once the section fills the screen. Words fade in one by one, keyword chips fill in as reached.
  const isChip = (_: number, el: Element) => el.classList.contains('who-am-i-chip')

  $gsap.timeline(scrubBetween(whoAmISectionEl, whoAmISectionEl, {
    start: 'top top',
    end: 'bottom bottom',
  }))
    .from(whoAmITokenEls, {
      opacity: 0.15,
      // Fade the chip fill from its own hue so the tween doesn't pass through grey.
      backgroundColor: (i: number, el: Element) => isChip(i, el) ? 'rgba(237, 233, 254, 0)' : colors.transparent,
      color: (i: number, el: Element) => isChip(i, el) ? colors.white : getComputedStyle(el).color,
      stagger: 1,
    })
    // Hold the fully revealed copy for a beat before the section scrolls away.
    .to({}, { duration: whoAmITokenEls.length * 0.1 })

  // Who Am I / Image parallax
  $gsap.timeline(scrubBetween(heroSectionEl, skillsSectionEl))
    .fromTo(whoAmIImageEl,
      // ±11.5% of the image's 130% height stays within its 15% overscan.
      { yPercent: -11.5, ease: 'none' },
      { yPercent: 11.5, ease: 'none' },
    )

  // Who Am I -> Skills: starts once the stuck content is released.
  $gsap.timeline(scrubBetween(whoAmISectionEl, skillsSectionEl, { start: 'bottom bottom' }))
    .from(skillsSectionEl, { opacity: 0 }, 0)

  // Skills / Groups reveal
  $gsap.timeline(scrubBetween(skillsTitleEl, skillsSectionEl, {
    start: 'top bottom',
  }))
    .to(socialLinksEl, {
      rotateZ: '90deg',
      // Pivot on the GitHub icon's centre so it stays put while the rest swing into a row.
      transformOrigin: () => {
        const socialLinkEl = socialLinksEl.querySelector('a')!
        const socialColumnEl = socialLinksEl.firstElementChild as HTMLElement

        const x = socialLinkEl.offsetLeft - socialColumnEl.offsetLeft + socialLinkEl.offsetWidth / 2
        const y = socialLinkEl.offsetTop - socialColumnEl.offsetTop + socialLinkEl.offsetHeight / 2

        return `${x}px ${y}px`
      },
    })
    .to(socialLinksEl.querySelectorAll('svg'), { rotateZ: '-90deg', scale: 0.85 }, 0)
    // The bare icons pick up tiles as they land next to the section heading.
    .to(socialTileEls, { borderColor: 'rgba(255, 255, 255, 0.14)', backgroundColor: colors.neutral[950] }, 0)
    .from(skillsTitleEl, { opacity: 0 }, 0)
    .from(skillGroupEls, { yPercent: 25, ease: 'none', stagger: 1 }, 1)
    .from(skillGroupEls, { opacity: 0, stagger: 1 }, 1)

  // Skills / Social links leave with the heading when the section is taller than the viewport,
  // instead of staying pinned over the cards. Set through the standalone `translate` property:
  // GSAP owns `transform` on this element for the rotation above.
  const scrollSocialLinksAway = ({ progress, start, end }: ScrollTrigger) => {
    socialLinksEl.style.translate = `0 ${-progress * (end - start)}px`
  }

  $ScrollTrigger.create({
    trigger: skillsSectionEl,
    start: 'top top',
    end: 'bottom bottom',
    onUpdate: scrollSocialLinksAway,
    onRefresh: scrollSocialLinksAway,
  })

  // Skills / Download link reveal
  $gsap.timeline(scrubBetween(downloadResumeLinkEl, skillsSectionEl, {
    start: 'top bottom',
    end: 'bottom bottom',
  }))
    .from(downloadResumeLinkEl, { opacity: 0, scale: 0.75 }, 2)
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
