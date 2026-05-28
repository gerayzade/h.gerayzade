import { cn } from '@/utils/classnames'

const MARKED_TEXT_CLASSLIST = 'px-[0.2em] pb-[0.1em] -mx-[0.05em] -mb-[0.1em]'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, string | undefined>('mark', {
    mounted (el, binding) {
      const className = cn(MARKED_TEXT_CLASSLIST, binding.value ?? '')
      const words = (el.textContent ?? '')
        .trim()
        .split(/\s+/)

      el.replaceChildren()

      words.forEach((word, i) => {
        const span = document.createElement('span')
        span.className = className
        span.textContent = word
        el.appendChild(span)
        if (i < words.length - 1) {
          el.appendChild(document.createTextNode(' '))
        }
      })
    },
  })
})
