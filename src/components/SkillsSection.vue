<script lang="ts" setup>
import { Tech, techIcons, techTitles } from '@/entities/tech'
import DownloadIcon from '@/components/icons/DownloadIcon.vue'

const skillGroups = [
  {
    label: 'JS Ecosystem',
    reverse: false,
    duration: 130,
    skills: [
      Tech.JAVASCRIPT,
      Tech.TYPESCRIPT,
      Tech.VUE,
      Tech.NUXT,
      Tech.PINIA,
      Tech.REACT,
      Tech.NEXT_JS,
      Tech.REDUX,
      Tech.JQUERY,
      Tech.GSAP,
      Tech.JEST,
      Tech.VITEST,
      Tech.NODE_JS,
      Tech.EXPRESS,
      Tech.SWAGGER,
      Tech.POSTMAN,
      Tech.MONGODB,
      Tech.MONGOOSE_JS,
      Tech.JSON,
      Tech.WEBPACK,
      Tech.VITE_JS,
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
    reverse: true,
    duration: 73,
    skills: [
      Tech.HTML5,
      Tech.PUG,
      Tech.XML,
      Tech.DJANGO,
      Tech.HANDLEBARS,
      Tech.CSS3,
      Tech.SASS,
      Tech.TAILWIND_CSS,
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
    reverse: false,
    duration: 87,
    skills: [
      Tech.STRAPI,
      Tech.CONTENTFUL,
      Tech.WEBFLOW,
      Tech.WORDPRESS,
      Tech.FIREBASE,
      Tech.GIT,
      Tech.GITHUB,
      Tech.GITLAB,
      Tech.BITBUCKET,
      Tech.DOCKER,
      Tech.VERCEL,
      Tech.DIGITAL_OCEAN,
      Tech.BROWSER_STACK,
      Tech.VS_CODE,
      Tech.JIRA,
      Tech.CONFLUENCE,
      Tech.TRELLO,
    ],
  },
]
</script>

<template>
  <section
    ref="section"
    class="skills-section fullscreen relative flex min-h-max w-full items-center bg-neutral-950 pb-12 pt-24"
  >
    <div class="skills-title absolute left-10 top-10 z-10 p-4 text-4xl font-bold uppercase tracking-tighter text-indigo-600">
      Skills
    </div>
    <div class="relative z-10 mx-auto flex w-full max-w-screen-2xl flex-col gap-10 py-6 tracking-tighter">
      <div
        v-for="group in skillGroups"
        :key="group.label"
        class="skill-group flex w-full flex-col gap-3"
      >
        <span class="ml-6 inline-flex items-center gap-2 self-start font-semibold text-neutral-200">
          <span class="h-px w-6 bg-indigo-600" />
          {{ group.label }}
        </span>

        <div class="marquee w-full overflow-hidden py-2">
          <ul
            class="marquee-track flex w-max items-center"
            :class="{ 'marquee-track--reverse': group.reverse }"
            :style="{ '--duration': `${group.duration}s` }"
          >
            <template
              v-for="duplicate in 2"
              :key="duplicate"
            >
              <li
                v-for="skill in group.skills"
                :key="`${duplicate}-${skill}`"
                :aria-hidden="duplicate > 1"
                class="skill-chip inline-flex shrink-0 items-center gap-2 rounded-full border border-indigo-600 px-4 py-2 text-xs font-medium uppercase text-neutral-200 transition-shadow duration-200 hover:shadow-md hover:shadow-indigo-600"
              >
                <component
                  :is="techIcons[skill]"
                  v-if="techIcons[skill]"
                  class="h-5 w-auto shrink-0"
                  aria-hidden="true"
                />
                {{ techTitles[skill] }}
              </li>
            </template>
          </ul>
        </div>
      </div>

      <div class="mt-auto p-4">
        <a
          href="/resume/h.gerayzade.resume.pdf"
          class="group relative inline-flex h-10 items-center gap-2 rounded-full pl-2.5 text-neutral-200 transition-[padding] hover:px-3"
        >
          <div class="absolute left-0 top-0 size-10 rounded-full bg-indigo-600 transition-[width] group-hover:w-[calc(100%+2px)]" />
          <DownloadIcon
            aria-hidden="true"
            class="relative h-5 w-auto shrink-0"
          />
          <span class="relative pl-2 font-medium transition-[padding] group-hover:pl-0">
            Download Resume
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.marquee {
  --gap: 1rem;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    inset-block: 0;
    width: 6%;
    z-index: 1;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #0a0a0a, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #0a0a0a, transparent);
  }
}

.marquee-track {
  gap: var(--gap);
  will-change: transform;
  animation: skills-marquee var(--duration, 40s) linear infinite;

  &--reverse {
    animation-direction: reverse;
  }

  &:hover {
    animation-play-state: paused;
  }
}

@keyframes skills-marquee {
  to {
    transform: translateX(calc((-100% - var(--gap)) / 2));
  }
}
</style>
