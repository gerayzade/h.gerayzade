/* eslint-disable import/no-named-as-default */
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default defineNuxtPlugin(() => {
  const wrapper = document.getElementById('__nuxt')

  if (!wrapper) {
    return
  }

  ScrollTrigger.defaults({ scroller: wrapper })

  const content = wrapper.firstElementChild

  if (!content) {
    return
  }

  const lenis = new Lenis({
    autoRaf: false,
    wrapper,
    content,
  })

  lenis.on('scroll', ScrollTrigger.update)

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

  ScrollTrigger.addEventListener('refresh', () => {
    lenis.resize()
  })
  ScrollTrigger.refresh()

  return {
    provide: {
      lenis,
    },
  }
})
