<template>
  <Transition
    enter-active-class="collapse-enter-active"
    leave-active-class="collapse-leave-active"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
  >
    <Component
      :is="tagName"
      v-if="!when"
    >
      <slot v-if="!when" />
    </Component>
  </Transition>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'TransitionCollapse',
})

withDefaults(defineProps<{
  tagName?: string,
  when?: boolean,
}>(), {
  tagName: 'div',
  when: true,
})

const emit = defineEmits([
  'collapsed',
  'expanded',
])

const beforeEnter = (el: Element) => {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = '0px'
    }

    element.style.display = ''
  })
}

const enter = (el: Element) => {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = `${element.scrollHeight}px`
    })
  })
}

const afterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  nextTick(() => {
    emit('expanded')
  })
}

const beforeLeave = (el: Element) => {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    if (!element.style.height) {
      element.style.height = `${element.offsetHeight}px`
    }
  })
}

const leave = (el: Element) => {
  const element = el as HTMLElement
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.style.height = '0px'
    })
  })
}

const afterLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = ''
  nextTick(() => {
    emit('collapsed')
  })
}
</script>
