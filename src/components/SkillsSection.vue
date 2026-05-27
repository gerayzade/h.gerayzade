<script lang="ts" setup>
import techIcons from '@/data/tech-icons'

const skillGroups = [
  { label: 'Markup & UI', skills: ['HTML5', 'Pug', 'CSS3', 'SASS', 'Tailwind CSS', 'Bootstrap', 'Vuetify', 'ShadCn-Vue'] },
  { label: 'JS Frameworks & Libraries', skills: ['TS', 'Vue 3', 'Nuxt 4', 'Pinia', 'React', 'Next.js', 'jQuery', 'Jest', 'Vitest'] },
  { label: 'Database, APIs & CMS', skills: ['MongoDB', 'Node.js', 'Express', 'Strapi', 'Contentful', 'Webflow', 'WordPress'] },
]
</script>

<template>
  <section
    ref="section"
    class="skills-section fullscreen relative flex min-h-max w-full items-center bg-neutral-950"
  >
    <div class="pointer-events-none absolute inset-0" />

    <div class="relative z-10 mx-auto flex max-w-screen-xl flex-col items-center p-6 tracking-tighter">
      <ul class="relative z-10 flex w-full flex-wrap justify-center gap-x-8 gap-y-12 md:gap-x-12">
        <li
          v-for="group in skillGroups"
          :key="group.label"
          class="skill-group flex w-full max-w-80 flex-col items-center text-center xs:w-[calc(50%-1rem)] md:w-[calc(33.333%-2rem)]"
        >
          <span class="skill-group-label mb-4 inline-block rounded bg-indigo-600 px-2 py-0.5 font-bold text-white">
            {{ group.label }}
          </span>
          <div class="flex flex-wrap justify-center gap-1.5 xs:gap-2">
            <span
              v-for="skill in group.skills"
              :key="skill"
              class="skill-chip inline-flex items-center gap-1.5 rounded-md border border-indigo-600/60 px-2.5 py-1 text-xs font-medium uppercase text-indigo-200 transition-colors hover:border-indigo-400 hover:text-indigo-100"
            >
              <component
                :is="techIcons[skill]"
                v-if="techIcons[skill]"
                class="h-3.5 w-auto shrink-0"
              />
              {{ skill }}
            </span>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>
