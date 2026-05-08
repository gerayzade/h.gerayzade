import type { AnimationItem } from 'lottie-web'

type LottieEl = HTMLElement & {
  _lottie?: AnimationItem,
}

type LottieBindingValue = {
  name: string,
  autoplay?: boolean,
  loop?: boolean,
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<LottieEl, LottieBindingValue>('lottie', {
    async mounted (el, binding) {
      const { default: lottie } = await import('lottie-web')

      el._lottie = lottie.loadAnimation({
        container: el,
        renderer: 'svg',
        loop: binding.value.loop ?? true,
        autoplay: binding.value.autoplay ?? true,
        path: `/lottiefiles/${binding.value.name}.json`,
      })
    },
    beforeUnmount (el) {
      el._lottie?.destroy()
    },
  })
})
