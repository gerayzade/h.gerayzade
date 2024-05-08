<template>
  <button
    class="burger-btn"
    type="button"
    @click="onBurgerButtonClick"
  >
    <svg
      :class="[
        'burger-btn__icon',
        { 'burger-btn__icon--active': isBurgerActive },
      ]"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 100 100"
    >
      <path class="burger-btn__icon-line burger-btn__icon-line--top" fill="none" d="m 70,33 h -40 c 0,0 -8.5,-0.149796 -8.5,8.5 0,8.649796 8.5,8.5 8.5,8.5 h 20 v -20" />
      <path class="burger-btn__icon-line burger-btn__icon-line--middle" fill="none" d="m 70,50 h -40" />
      <path class="burger-btn__icon-line burger-btn__icon-line--bottom" fill="none" d="m 30,67 h 40 c 0,0 8.5,0.149796 8.5,-8.5 0,-8.649796 -8.5,-8.5 -8.5,-8.5 h -20 v 20" />
    </svg>
  </button>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'BurgerButton',
})

const isBurgerActive = ref(false)

const onBurgerButtonClick = () => {
  isBurgerActive.value = !isBurgerActive.value
}
</script>

<style lang="scss">
$transition-duration: 0.4s;

.burger-btn {
  &__icon {
    display: block;
    width: 30px;
    height: 30px;
    transition: transform $transition-duration;

    &-line {
      stroke: $black;
      stroke-width: 5.5;
      stroke-linecap: round;
      transition: stroke-dasharray $transition-duration, stroke-dashoffset $transition-duration;

      &--top,
      &--bottom {
        stroke-dasharray: 40 121;
      }
    }

    &--active {
      transform: rotate(45deg);

      .burger-btn {
        &__icon-line--top,
        &__icon-line--bottom {
          stroke-dashoffset: -68px;
        }
      }
    }
  }
}
</style>
