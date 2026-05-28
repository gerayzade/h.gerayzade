export const scrubBetween = (
  trigger: Element | null,
  endTrigger: Element | null = trigger,
  overrides: Partial<ScrollTrigger.Vars> = {},
) => ({
  defaults: {
    ease: 'power1.inOut',
    duration: 1,
  },
  scrollTrigger: {
    trigger,
    start: 'top top',
    endTrigger,
    end: 'top top',
    scrub: 1,
    ...overrides,
  },
})
