import { polyfill as smoothscrollPolyfill } from 'smoothscroll-polyfill'

type BrowserFeature = {
  isSupported: boolean,
  install: () => void,
}

type BrowserFeatures = Record<string, BrowserFeature>

export default defineNuxtPlugin(() => {
  const features: BrowserFeatures = {
    scrollBehavior: {
      isSupported: 'scrollBehavior' in document.documentElement.style,
      install: smoothscrollPolyfill,
    },
  }

  for (const key in features) {
    const feature = features[key]
    if (!feature.isSupported) {
      feature.install()
    }
  }
})
