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
        { name: 'theme-color', content: '#1F2937' },
        { name: 'description', content: websiteDescription },
        { name: 'apple-mobile-web-app-title', content: websiteTitle },
        { name: 'apple-mobile-web-app-status-bar-style', content: '#1F2937' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'msapplication-config', content: '/browserconfig.xml' },
        { name: 'msapplication-TileColor', content: '#1F2937' },
        { name: 'msapplication-TileImage', content: '/mstile-150x150.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'mask-icon', href: '/safari-pinned-tab.svg', color: '#1F2937' },
        { rel: 'preload', as: 'image', href: '/images/h.g-min.webp' },
      ],
    },
  },
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
      'utils',
    ],
  },
  pwa: {
    registerType: 'autoUpdate',
    injectRegister: 'auto',
    manifest: false,
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg,webp,webmanifest}'],
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
