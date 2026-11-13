<script lang="ts" setup>
import { Tech } from '@/entities/tech'
import SkillGroup from '@/components/SkillGroup.vue'
import CodeIcon from '@/components/icons/CodeIcon.vue'
import DownloadIcon from '@/components/icons/DownloadIcon.vue'
import LayersIcon from '@/components/icons/LayersIcon.vue'
import PenIcon from '@/components/icons/PenIcon.vue'

// ❗ Keep the meta in sync with the file in `public/`
const resume = {
  href: '/resume.h.gerayzade.pdf',
  filename: 'resume.h.gerayzade.pdf',
  meta: 'PDF · Updated May 2026 · 282 KB',
}

const skillGroups = [
  {
    label: 'JS Ecosystem',
    description: 'Frameworks, libraries and runtime',
    icon: CodeIcon,
    skills: [
      Tech.VUE,
      Tech.NUXT,
      Tech.REACT,
      Tech.NEXT_JS,
      Tech.TYPESCRIPT,
      Tech.NODE_JS,
      Tech.EXPRESS,
      Tech.VITE_JS,
      Tech.VITEST,
      Tech.JEST,
      Tech.JAVASCRIPT,
      Tech.PINIA,
      Tech.REDUX,
      Tech.JQUERY,
      Tech.GSAP,
      Tech.SWAGGER,
      Tech.POSTMAN,
      Tech.MONGODB,
      Tech.MONGOOSE_JS,
      Tech.JSON,
      Tech.WEBPACK,
      Tech.ROLLUP_JS,
      Tech.GULP_JS,
      Tech.NPM,
      Tech.YARN,
      Tech.ESLINT,
      Tech.NODEMON,
    ],
  },
  {
    label: 'Markup & UI',
    description: 'Design, styling and UI development',
    icon: PenIcon,
    skills: [
      Tech.TAILWIND_CSS,
      Tech.HTML5,
      Tech.CSS3,
      Tech.SASS,
      Tech.PUG,
      Tech.HANDLEBARS,
      Tech.XML,
      Tech.DJANGO,
      Tech.BOOTSTRAP,
      Tech.VUETIFY,
      Tech.SHADCN_VUE,
      Tech.FIGMA,
      Tech.SKETCH,
      Tech.ADOBE_XD,
    ],
  },
  {
    label: 'CMS, DevOps & Workflow',
    description: 'Content, deployment and team workflow',
    icon: LayersIcon,
    skills: [
      Tech.CONTENTFUL,
      Tech.SUPABASE,
      Tech.FIREBASE,
      Tech.STRAPI,
      Tech.WEBFLOW,
      Tech.WORDPRESS,
      Tech.VS_CODE,
      Tech.BROWSER_STACK,
      Tech.DOCKER,
      Tech.VERCEL,
      Tech.DIGITAL_OCEAN,
      Tech.GITHUB,
      Tech.GITLAB,
      Tech.BITBUCKET,
      Tech.JIRA,
      Tech.GIT,
      Tech.CONFLUENCE,
      Tech.TRELLO,
    ],
  },
]
</script>

<template>
  <section class="skills-section fullscreen relative flex min-h-max w-full flex-col bg-neutral-950 px-4 pb-10 pt-4 sm:px-5 lg:justify-center lg:py-6">
    <!--
      On wide screens the section is exactly one viewport tall: the content is centred, so the space
      above the heading equals the space below the button, and the gaps and card padding scale with
      the viewport height to keep everything on one screen.
    -->
    <div class="relative z-10 mx-auto flex w-full max-w-screen-2xl flex-col">
      <header class="skills-title px-4 xs:px-6 lg:px-8">
        <!--
          On phones the heading starts below the social links, which settle into the top-right corner.
          On wide screens the negative margin trims the gap above the capitals, so the space above
          the heading matches the space below the download button.
        -->
        <h2 class="mt-14 text-4xl font-extrabold tracking-tight text-white xs:mt-6 xs:text-5xl lg:mt-[-0.14em] lg:text-6xl">
          Skills &amp; <span class="text-indigo-500">Tools</span>
        </h2>
        <p class="mt-3 max-w-xl text-pretty text-neutral-400 xs:mt-4 xs:text-lg">
          Technologies, tools and platforms I use to build, ship and scale products.
        </p>
      </header>

      <div class="mt-[clamp(2rem,6vh,3.5rem)] flex flex-col gap-4 lg:mt-[clamp(1.25rem,6vh,4rem)] lg:gap-[clamp(0.75rem,2vh,1.25rem)]">
        <SkillGroup
          v-for="group in skillGroups"
          :key="group.label"
          v-bind="group"
        />
      </div>

      <div class="download-resume-link mt-[clamp(2rem,6vh,3.5rem)] flex origin-left flex-wrap items-center gap-x-6 gap-y-4 px-4 xs:px-6 lg:mt-[clamp(1.25rem,6vh,4rem)] lg:px-8">
        <a
          :href="resume.href"
          :download="resume.filename"
          class="group inline-flex h-14 items-center gap-3 rounded-xl bg-indigo-600 pl-5 pr-6 font-bold text-white transition-colors duration-200 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
        >
          <DownloadIcon
            aria-hidden="true"
            class="size-6 shrink-0 transition-transform duration-300 ease-out group-hover:translate-y-0.5 motion-reduce:transition-none"
          />
          Download Resume
        </a>
        <p class="flex items-center gap-6 text-sm text-neutral-400">
          <span class="h-8 w-px bg-white/15 max-xs:hidden" />
          {{ resume.meta }}
        </p>
      </div>
    </div>
  </section>
</template>
