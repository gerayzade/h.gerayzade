import { useMediaQuery } from '@vueuse/core'
import { Breakpoint } from '@/entities/theme/breakpoint'

export const useBreakpoint = () => {
  const matches = (breakpoint: keyof typeof Breakpoint) => {
    return useMediaQuery(`(min-width: ${Breakpoint[breakpoint]}px)`).value
  }

  const isMobile = computed(() => !matches('md'))

  return {
    isMobile,
    matches,
  }
}
