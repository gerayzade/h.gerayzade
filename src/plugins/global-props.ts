const fadeTransition: Record<string, string> = {
  name: 'fade',
  mode: 'out-in',
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      fadeTransition,
    },
  }
})
