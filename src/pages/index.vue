<template>
  <section class="intro-section">
    <img
      class="image"
      src="/images/studio-photo.webp"
      alt="Heydar Gerayzade"
    >
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

<style lang="scss">
.intro-section {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .image {
    height: 90%;
    width: auto;
    align-self: flex-end;
    aspect-ratio: 1183/2160;
  }

  .title {
    position: relative;
    font-size: 3.75rem;
    line-height: 1;
    font-weight: 800;
    white-space: nowrap;

    &.has-circle {
      span:first-of-type {
        color: $primary;
        transition-duration: .2s;
        transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(.4, 0, .2, 1);
      }
    }

    span:nth-of-type(2) {
      color: white;
      margin-left: -.17em;

      &::before {
        content: ' ';
      }
    }

    .circle {
      background-color: $secondary;
      border-radius: 9999px;
      height: 1.9em;
      left: -.22em;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      width: 1.9em;
      z-index: -10;
    }
  }
}
</style>
