<script setup lang="ts">
import icons from '@/utils/icons'

const props = defineProps<{
  name: string,
}>()

const icon = computed(() => {
  return icons[props.name]
})
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    v-if="icon"
    :viewBox="`0 0 ${icon.width} ${icon.height}`"
    v-html="icon.content"
  ></svg>
  <!-- eslint-enable vue/no-v-html -->
</template>
