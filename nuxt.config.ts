const {
  BASE_URL,
  DEV_CERT_PATH,
  DEV_CERT_KEY_PATH,
  NODE_ENV,
  SSR,
} = process.env

const isDevelopment = NODE_ENV === 'development'

const websiteDescription = 'Portfolio website'
const websiteThemeColor = '#1F2937'
const websiteTitle = 'Heydar Gerayzade'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        'lang': 'en',
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: websiteTitle,
      meta: [
        {
          name: 'theme-color',
          content: websiteThemeColor,
        },
      ],
      link: [
        {
          rel: 'manifest',
          href: '/manifest.webmanifest',
        },
        {
          rel: 'shortcut icon',
          href: '/favicon.png',
          type: 'image/png',
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png',
          sizes: '180x180',
        },
      ],
      script: [
      ],
    },
  },
  css: [
    '@/styles/main.scss',
  ],
  components: [
    { path: '@/components', pathPrefix: false },
  ],
  devtools: {
    enabled: isDevelopment,
  },
  devServer: {
    https: isDevelopment && DEV_CERT_PATH && DEV_CERT_KEY_PATH
      ? {
        key: DEV_CERT_KEY_PATH,
        cert: DEV_CERT_PATH,
      }
      : false,
  },
  device: {
    refreshOnResize: true,
  },
  modules: [
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@vite-pwa/nuxt',
  ],

  // https://vite-pwa-org.netlify.app/frameworks/nuxt
  pwa: {
    devOptions: {
      enabled: !isDevelopment,
    },
    manifest: {
      background_color: websiteThemeColor,
      categories: ['developer'],
      display: 'standalone',
      dir: 'ltr',
      description: websiteDescription,
      icons: [
        {
          purpose: 'maskable',
          src: 'web-app-icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          purpose: 'any',
          src: 'web-app-icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
      name: websiteTitle,
      orientation: 'portrait',
      screenshots: [
      ],
      short_name: websiteTitle,
      start_url: '/index.html',
      theme_color: websiteThemeColor,
    },
    registerType: 'autoUpdate',
    workbox: {
      // Only precache these files - html should be excluded
      globPatterns: ['**/*.{js,css,png,txt,svg,jpg}'],
      // Don't fallback on document based (e.g. `/`) requests
      navigateFallback: null,
    },
  },
  runtimeConfig: {
    public: {
      baseURL: BASE_URL,
      nodeEnv: NODE_ENV,
    },
  },
  srcDir: 'src/',
  ssr: SSR === 'true',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/globals.scss" as *;',
        },
      },
    },
  },
})
