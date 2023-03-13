import path from 'path'
import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { SvelteKitPWA as sveltekitPWA } from '@vite-pwa/sveltekit'

export default defineConfig({
	plugins: [
		sveltekit(),
    sveltekitPWA(),
	],
	resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
    },
  },
})
