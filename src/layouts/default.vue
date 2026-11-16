<script setup lang="ts">
</script>

<template>
  <!-- `clip`, not `hidden`: `hidden` turns this into a scroll container, which breaks `position: sticky` below. -->
  <div class="overflow-x-clip">
    <main>
      <slot />
    </main>
  </div>
</template>
