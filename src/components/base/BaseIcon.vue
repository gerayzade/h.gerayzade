<template>
  <!-- eslint-disable vue/no-v-html -->
  <!-- eslint-disable vue/html-self-closing -->
  <svg
    v-if="icon"
    xmlns="http://www.w3.org/2000/svg"
    class="base-icon"
    fill="none"
    :viewBox="`0 0 ${icon.width} ${icon.height}`"
    :data-icon="name"
    v-html="icon.content"
  ></svg>
  <!-- eslint-enable vue/html-self-closing -->
  <!-- eslint-enable vue/no-v-html -->
</template>

<script lang="ts" setup>
import icons from '@/data/icons'

defineComponent({
  name: 'BaseIcon',
})

const props = withDefaults(defineProps<{
  name: string,
}>(), {})

const instanceId = useId()

const icon = computed(() => {
  const iconProps = icons[props.name]
  if (!iconProps) {
    return
  }
  // Replace id attribute values, so that <linearGradient> has a unique id per component instance
  const content = iconProps.content.replace(/instanceId/g, `icon-${instanceId}`)
  return {
    ...iconProps,
    content,
  }
})
</script>

<style lang="scss">
.base-icon {
  display: block;
  height: 1em;
  width: 1em;
  font-size: 16px;
}
</style>
