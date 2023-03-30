<script>
  import { onMount } from 'svelte'
  import { registerSW } from 'virtual:pwa-register'
  import Header from '~/components/Header.svelte'

  import '~/styles/tailwind.scss'

  let timeoutId = null
  let init = false

  onMount(() => {
    registerSW({ immediate: true })

    timeoutId = setTimeout(() => {
      init = true
    }, 500)

    return () => clearTimeout(timeoutId)
  })
</script>

{#if init}
<div class="wrapper">
  <Header />
  <main>
    <slot />
  </main>
</div>
{/if}

<style lang="scss">
  .wrapper {
    @apply overflow-x-hidden;
  }
</style>
