<script>
  import { onMount } from 'svelte'
  import { registerSW } from 'virtual:pwa-register'

  import '~/styles/tailwind.scss'

  onMount(() => {
    registerSW({ immediate: true })
  })
</script>

<main>
  <slot />
</main>

<style lang="scss">
  main {
    @apply overflow-x-hidden;
  }
</style>
