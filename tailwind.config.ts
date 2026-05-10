import type { Config } from 'tailwindcss'
import { breakpoints } from './src/entities/theme/breakpoint'

export default <Partial<Config>>{
  content: [
    './app/**/*.{vue,ts,js}',
    './nuxt.config.ts',
  ],
  theme: {
    screens: breakpoints.stringMapping,
  },
  plugins: [],
}
