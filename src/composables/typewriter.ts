interface UseTypewriterOptions {
  delay?: number
  speed?: number
}

export const useTypewriter = (text: string, options: UseTypewriterOptions = {}) => {
  const { delay = 0, speed = 1 } = options
  const html = ref('')

  const buildFrame = (t: number): string => {
    if (t >= 1) {
      return text
    }
    const typed = Math.floor(text.length * t)
    return Array.from(text).reduce((acc, letter, i) => {
      const opacity = i >= typed ? 0 : 1
      return acc + `<span style="opacity: ${opacity};">${letter}</span>`
    }, '')
  }

  onMounted(() => {
    html.value = buildFrame(0)

    const duration = text.length / (speed * 0.01)
    let rafId = 0
    let startedAt = 0

    const tick = (now: number) => {
      if (!startedAt) {
        startedAt = now
      }
      const t = Math.min(1, (now - startedAt) / duration)
      html.value = buildFrame(t)
      if (t < 1) {
        rafId = requestAnimationFrame(tick)
      }
    }

    const timeoutId = window.setTimeout(() => {
      rafId = requestAnimationFrame(tick)
    }, delay)

    return () => {
      window.clearTimeout(timeoutId)
      cancelAnimationFrame(rafId)
    }
  })

  return { html }
}
