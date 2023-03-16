export const type = (node, { delay, speed = 1 }) => {
  const text = node.textContent
  const duration = text.length / (speed * 0.01)
  return {
    delay,
    duration,
    tick: (t) => {
      const typed = Math.floor(text.length * t)
      node.innerHTML = Array.from(text).reduce((acc, letter, i) => {
        if (t === 1) return text
        const opacity = i >= typed ? 0 : 1
        return acc += `<span style="opacity: ${opacity};">${letter}</span>`
      }, '')
    }
  }
}
