<script lang="ts" setup>
import techIcons from '@/data/tech-icons'

const skillGroups = [
  { label: 'JS Frameworks & Libraries', reverse: false, duration: 50, skills: ['TypeScript', 'Vue 3', 'Nuxt 4', 'Pinia', 'React', 'Next.js', 'jQuery', 'Jest', 'Vitest'] },
  { label: 'Markup & UI', reverse: true, duration: 42, skills: ['HTML5', 'Pug', 'CSS3', 'SASS', 'Tailwind CSS', 'Bootstrap', 'Vuetify', 'ShadCn-Vue'] },
  { label: 'Database, APIs & CMS', reverse: false, duration: 38, skills: ['MongoDB', 'Node.js', 'Express', 'Strapi', 'Contentful', 'Webflow', 'WordPress'] },
]
</script>

<template>
  <section
    ref="section"
    class="skills-section fullscreen relative flex min-h-max w-full items-center bg-neutral-950 py-14"
  >
    <div class="skills-title absolute left-0 top-0 z-10 p-4 text-4xl font-bold uppercase tracking-tighter text-indigo-600 xs:left-10 xs:top-10">
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
              v-for="duplicate in 3"
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
                />
                {{ skill }}
              </li>
            </template>
          </ul>
        </div>
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
    transform: translateX(calc((-100% - var(--gap)) / 3));
  }
}
</style>
