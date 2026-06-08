import {
  websiteDescription,
  websiteTitle,
} from './src/utils/constants'

const {
  DEV_CERT_PATH,
  DEV_CERT_KEY_PATH,
  NODE_ENV,
  PORT = 3000,
} = import.meta.env

const isDevelopment = NODE_ENV === 'development'

const httpsServerOptions = {
  key: DEV_CERT_KEY_PATH,
  cert: DEV_CERT_PATH,
}

const useDevServer = isDevelopment
  && httpsServerOptions.key
  && httpsServerOptions.cert

export default defineNuxtConfig({
  compatibilityDate: '2026-04-27',
  srcDir: 'src/',
  modules: [
    '@nuxtjs/device',
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
  ],
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      title: websiteTitle,
      meta: [
        { charset: 'utf-8' },
        { 'http-equiv': 'x-ua-compatible', 'content': 'ie=edge' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'theme-color', content: '#0A0A0A' },
        { name: 'description', content: websiteDescription },
        { name: 'apple-mobile-web-app-title', content: websiteTitle },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#0A0A0A' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'msapplication-TileColor', content: '#0A0A0A' },
        { name: 'msapplication-TileImage', content: '/mstile-150x150.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#0A0A0A' },
        { rel: 'preload', as: 'image', href: '/images/h.g.webp' },
        { rel: 'preload', as: 'font', type: 'font/woff2', href: '/fonts/Satoshi-Variable.woff2', crossorigin: '' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },
  components: false,
  css: [
    '@/styles/main.scss',
  ],
  imports: {
    // Auto-import composables, stores and utils
    dirs: [
      'composables',
      'composables/**',
      'stores',
      'stores/**',
      'utils/promises',
    ],
  },
  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    manifest: false,
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,webmanifest}'],
      // Don't let the navigation fallback hijack the resume PDF request and
      // return the app shell (index.html) instead of the file.
      navigateFallbackDenylist: [/^\/resume\//],
    },
    client: {
      installPrompt: false,
    },
  },
  tailwindcss: {
    cssPath: false,
  },
  nitro: {
    preset: 'vercel',
    prerender: {
      routes: ['/'],
    },
  },
  routeRules: {
    '/resume.h.gerayzade.pdf': {
      headers: {
        'Content-Disposition': 'attachment',
        'Content-Type': 'application/pdf',
      },
    },
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 5000,
      sourcemap: 'hidden',
    },
    define: {
      // Enable Vue Devtools in dev build
      __VUE_PROD_DEVTOOLS__: isDevelopment,
    },
    server: useDevServer
      ? {
        https: httpsServerOptions,
        hmr: {
          protocol: 'wss',
          clientPort: Number(PORT),
        },
      }
      : undefined,
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/styles/globals.scss" as *;',
        },
      },
    },
    optimizeDeps: {
      entries: [
        './**/*.vue',
      ],
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ],
    },
  },
  devServer: useDevServer
    ? { https: httpsServerOptions }
    : undefined,
  devtools: {
    enabled: isDevelopment,
  },
  experimental: {
    // Fix duplicate useAppConfig auto-import warning on every dev start
    // More info: https://github.com/nuxt/nuxt/issues/34812
    serverAppConfig: false,
  },
  sourcemap: {
    client: 'hidden',
  },
  typescript: {
    strict: true,
    typeCheck: false,
  },
})
