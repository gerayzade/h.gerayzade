<template>
  <section>
    <h1
      :class="[
        'title',
        { 'has-circle': displayCircle },
      ]"
    >
      <span>h·g</span>
      <span>erayzade</span>
      <Transition v-bind="$fadeTransition">
        <span
          v-show="displayCircle"
          class="circle"
        />
      </Transition>
    </h1>
  </section>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'IndexPage',
})

const displayCircle = ref(false)

const timeoutId = ref<TimeoutId>(-1)

onMounted(() => {
  timeoutId.value = setTimeout(() => {
    displayCircle.value = true
  }, 150)
})

onBeforeUnmount(() => {
  clearTimeout(timeoutId.value)
})
</script>
