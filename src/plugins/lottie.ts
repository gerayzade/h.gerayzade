import type { AnimationItem } from 'lottie-web'

type LottieEl = HTMLElement & { _lottie?: AnimationItem }

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<LottieEl, string>('lottie', {
    async mounted (el, binding) {
      const lottie = (await import('lottie-web')).default
      el._lottie = lottie.loadAnimation({
        container: el,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: `/lottiefiles/${binding.value}.json`,
      })
    },
    beforeUnmount (el) {
      el._lottie?.destroy()
    },
  })
})
