<script lang="ts" setup>
import { useResizeObserver } from '@vueuse/core'
import type { Component } from 'vue'
import { type Tech, techIcons, techTitles } from '@/entities/tech'
import ChevronUpIcon from '@/components/icons/ChevronUpIcon.vue'

const props = defineProps<{
  label: string
  description: string
  icon: Component
  skills: Tech[]
}>()

const { $ScrollTrigger } = useNuxtApp()

const listId = useId()
const listRef = useTemplateRef<HTMLElement>('list')

const emit = defineEmits<{
  // How much taller the list is than its collapsed state (0 while collapsed).
  extraHeight: [height: number]
}>()

const isExpanded = ref(false)
// `null` until the first measurement, so the toggle keeps its slot without flashing a wrong count.
const hiddenCount = ref<number | null>(null)
const fullHeight = ref(0)
const hiddenHeight = ref(0)

watch(
  () => isExpanded.value ? hiddenHeight.value : 0,
  height => emit('extraHeight', height),
)

const toggleLabel = computed(() => isExpanded.value
  ? `Show fewer ${props.label} tools`
  : `Show all ${props.skills.length} ${props.label} tools`,
)

// Chips wrap freely and the list clips to `--rows` rows, so whatever lands on a later row is hidden.
const measure = () => {
  const listEl = listRef.value

  if (!listEl) {
    return
  }

  const chipEls = Array.from(listEl.children) as HTMLElement[]
  const rowTops = [...new Set(chipEls.map(chipEl => chipEl.offsetTop))].sort((a, b) => a - b)
  const visibleRows = Number(getComputedStyle(listEl).getPropertyValue('--rows')) || 1
  const lastVisibleTop = rowTops[visibleRows - 1] ?? Infinity
  const firstHiddenTop = rowTops[visibleRows]
  const gap = parseFloat(getComputedStyle(listEl).rowGap) || 0

  hiddenCount.value = chipEls.filter(chipEl => chipEl.offsetTop > lastVisibleTop).length
  fullHeight.value = listEl.scrollHeight

  if (firstHiddenTop === undefined) {
    hiddenHeight.value = 0
    return
  }

  // How much taller the whole card gets when expanded. The collapsed list ends one gap above the
  // first hidden row, and on wide screens it shares a grid row with the (taller) icon, which
  // absorbs the first few pixels of growth.
  const listTop = listEl.offsetTop
  const collapsedBottom = listTop + firstHiddenTop - (rowTops[0] ?? listTop) - gap
  const siblingEls = Array.from(listEl.parentElement?.children ?? []) as HTMLElement[]
  const rowBottom = Math.max(
    collapsedBottom,
    ...siblingEls
      .filter(el => el !== listEl && el.offsetTop < collapsedBottom)
      .map(el => el.offsetTop + el.offsetHeight),
  )

  hiddenHeight.value = Math.max(0, listTop + fullHeight.value - rowBottom)

  if (!hiddenCount.value) {
    isExpanded.value = false
  }
}

useResizeObserver(listRef, measure)

onMounted(async () => {
  measure()
  // Chip widths shift once Satoshi swaps in.
  await document.fonts.ready
  measure()
})

const onListTransitionEnd = (event: TransitionEvent) => {
  // The section grew or shrank, so scroll-linked triggers below it need new positions.
  if (event.target === listRef.value && event.propertyName === 'max-height') {
    $ScrollTrigger?.refresh()
  }
}
</script>

<template>
  <div class="skill-group grid grid-cols-[minmax(0,1fr)_auto] items-start gap-x-4 gap-y-5 rounded-3xl border border-white/10 p-4 xs:p-6 lg:grid-cols-[21rem_1px_minmax(0,1fr)_auto] lg:gap-x-6 lg:px-8 lg:py-[clamp(1rem,3.2vh,1.75rem)]">
    <div class="flex items-center gap-4 lg:gap-5">
      <div class="grid size-12 shrink-0 place-items-center rounded-2xl bg-indigo-600 text-white lg:size-14">
        <component
          :is="icon"
          aria-hidden="true"
          class="size-6 lg:size-7"
        />
      </div>
      <div class="min-w-0">
        <h3 class="text-balance text-lg font-bold leading-tight text-white lg:text-xl">
          {{ label }}
        </h3>
        <p class="mt-1 text-pretty text-sm text-neutral-400">
          {{ description }}
        </p>
      </div>
    </div>

    <button
      type="button"
      class="grid h-11 min-w-11 place-items-center rounded-xl border border-white/10 px-2.5 text-sm font-medium tabular-nums text-neutral-300 transition-colors duration-200 hover:border-indigo-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400 max-lg:mt-0.5 lg:order-4 lg:mt-1.5"
      :class="{
        'invisible': hiddenCount === null,
        'hidden': hiddenCount === 0,
      }"
      :aria-expanded="isExpanded"
      :aria-controls="listId"
      :aria-label="toggleLabel"
      @click="isExpanded = !isExpanded"
    >
      <ChevronUpIcon
        v-if="isExpanded"
        aria-hidden="true"
        class="size-5"
      />
      <template v-else>
        +{{ hiddenCount }}
      </template>
    </button>

    <div
      aria-hidden="true"
      class="h-14 w-px bg-white/10 max-lg:hidden lg:order-2"
    />

    <ul
      :id="listId"
      ref="list"
      class="skill-list col-span-2 flex flex-wrap overflow-hidden [--rows:2] motion-reduce:transition-none lg:order-3 lg:col-span-1 lg:mt-1.5 lg:[--rows:1]"
      :class="{ 'skill-list--expanded': isExpanded }"
      :style="{ '--full': fullHeight ? `${fullHeight}px` : undefined }"
      @transitionend="onListTransitionEnd"
    >
      <li
        v-for="skill in skills"
        :key="skill"
        class="skill-chip inline-flex h-11 shrink-0 items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] px-3.5 text-sm font-medium text-neutral-100 transition-colors duration-200 hover:border-indigo-500"
      >
        <component
          :is="techIcons[skill]"
          aria-hidden="true"
          class="h-5 w-auto shrink-0"
        />
        {{ techTitles[skill] }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.skill-list {
  --chip: 2.75rem;
  --gap: 0.625rem;

  gap: var(--gap);
  max-height: calc(var(--rows) * (var(--chip) + var(--gap)) - var(--gap));
  transition: max-height 500ms cubic-bezier(0.16, 1, 0.3, 1);

  &--expanded {
    max-height: var(--full, none);
  }
}
</style>
