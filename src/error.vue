<template>
  <PageLayout>
    <div class="error-page">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ errorMessage }}</p>
      <BaseButton
        class="btn"
        label="GO HOME"
        href="/"
      />
    </div>
  </PageLayout>
</template>

<script lang="ts" setup>
import type { NuxtError } from 'nuxt/app'

const props = withDefaults(defineProps<{
  error: NuxtError,
}>(), {})

const errorMessage = computed(() => {
  return props.error.statusCode === 404
    ? 'Page not found'
    : 'Server error'
})
</script>

<style lang="scss">
.error-page {
  @include position-0;
  @include flex-middle;

  flex-direction: column;
  height: 100%;

  h1 {
    width: min-content;
    font-size: 60px;
    letter-spacing: 0.1em;
    font-weight: bold;
    text-align: center;
    text-transform: uppercase;
  }

  p {
    max-width: 350px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-align: center;
    text-transform: uppercase;
  }

  .base-button {
    margin-top: 24px;
  }
}
</style>
