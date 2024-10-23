export const useMediaQuery = (query: string) => {
  query = query
    // Replacements in accordance with breakpoint variables and media query mixins
    .replace('mobile', 'screen and (max-width: 600px)')
    .replace('tablet-and-mobile-only', 'screen and (max-width: 1024px), screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: portrait)')
    .replace('tablet-only', 'screen and (min-width: 601px) and (max-width: 1024px), screen and (min-width: 1025px) and (max-width: 1199px) and (orientation: portrait)')
    .replace('tablet', 'screen and (min-width: 601px)')
    .replace('desktop', 'screen and (min-width: 1025px) and (orientation: landscape), screen and (min-width: 1200px) and (orientation: portrait)')
    .replace('widescreen', 'screen and (min-width: 1200px)')

  const matchMedia = ref<MediaQueryList>()
  const matches = ref<boolean>(false)

  const onMatchMediaChange = (event: MediaQueryListEvent) => {
    matches.value = event.matches
  }

  onMounted(() => {
    matchMedia.value = window.matchMedia(query)
    matches.value = matchMedia.value.matches
    matchMedia.value.addEventListener('change', onMatchMediaChange)
  })

  onBeforeUnmount(() => {
    if (!matchMedia.value) {
      return
    }
    matchMedia.value.removeEventListener('change', onMatchMediaChange)
  })

  return {
    matchMedia,
    matches,
  }
}
