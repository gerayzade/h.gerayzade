<script setup lang="ts">
import icons from '@/utils/icons'
import type { SocialName } from '@/utils/constants'

const props = defineProps<{
  name: SocialName
}>()

const icon = computed(() => icons[props.name])
const viewBox = computed(() => `0 0 ${icon.value.width} ${icon.value.height}`)
</script>

<template>
  <!-- eslint-disable vue/no-v-html -->
  <svg
    :viewBox="viewBox"
    v-html="icon.content"
  />
  <!-- eslint-enable vue/no-v-html -->
</template>
