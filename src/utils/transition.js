export const type = (node, { delay, speed = 1 }) => {
  const text = node.textContent
  const duration = text.length / (speed * 0.01)

  return {
    delay,
    duration,
    tick: (t) => {
      const i = Math.floor(text.length * t)
      node.textContent = text.slice(0, i)
    }
  }
}
