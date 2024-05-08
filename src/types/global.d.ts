declare global {
  type TimeoutId = NodeJS.Timeout | number

  interface Window {
  }
}

export {}