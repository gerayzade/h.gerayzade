import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/kit/vite'

const config = {
	kit: {
		adapter: adapter({
      // explicitly tell Vercel to use Node 22
      runtime: 'nodejs22.x',
    }),
	},
	preprocess: vitePreprocess(),
}

export default config
