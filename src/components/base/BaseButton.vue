<template>
  <Component
    :is="tagName"
    class="base-button"
    :class="buttonClassNames"
    :disabled="disabled || isPending"
    v-bind="buttonProps"
  >
    <BaseIcon
      v-if="icon"
      :name="icon"
    />
    <template v-if="label">
      {{ label }}
    </template>
  </Component>
</template>

<script lang="ts" setup>
defineComponent({
  name: 'BaseButton',
})

type BaseButtonColor = 'primary' | 'transparent'
type BaseButtonType = 'button' | 'submit'

const props = withDefaults(defineProps<{
  color?: BaseButtonColor,
  disabled?: boolean,
  href?: string | null,
  icon?: string | null,
  isFullWidth?: boolean,
  isPending?: boolean,
  label?: string | null,
  to?: string | null,
  type?: BaseButtonType,
}>(), {
  color: 'primary',
  disabled: false,
  href: null,
  icon: null,
  isFullWidth: false,
  isPending: false,
  label: null,
  to: null,
  type: 'button',
})

const {
  tagName,
  buttonProps,
} = useButtonProps(props)

const buttonClassNames = computed(() => [
  `base-button--${props.color}`,
  { 'base-button--full-width': props.isFullWidth },
])
</script>

<style lang="scss">
.base-button {
  @include flex-middle;

  height: 50px;
  padding: 0 30px;
  font-size: 18px;
  font-weight: 500;
  text-decoration: none;
  white-space: nowrap;
  border: none;
  border-radius: 5px;
  user-select: none;

  .base-icon {
    flex-shrink: 0;
    margin-right: 1em;
    font-size: 20px;
  }

  &:disabled {
    pointer-events: none;
  }

  &--primary {
    color: $primary;
    background-color: $white;

    .base-icon {
      @include svg-color($primary);
    }
  }

  &--transparent {
    color: $white;
    background-color: transparent;

    .base-icon {
      @include svg-color($white);
    }
  }

  &--full-width {
    width: 100%;
  }
}
</style>
