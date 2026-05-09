const MARKED_TEXT_CLASSLIST = 'pl-[0.1158em] pr-[0.1158em] pb-[0.1em] -ml-[0.1158em] -mr-[0.1158em] -mb-[0.1em]'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive<HTMLElement, string | undefined>('mark', {
    mounted (el, binding) {
      const className = [MARKED_TEXT_CLASSLIST, binding.value ?? '']
        .join(' ')
        .trim()
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
