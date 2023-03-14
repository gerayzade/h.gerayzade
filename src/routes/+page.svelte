<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { type } from '~/utils/transition'
  import { META_DESCRIPTION } from '~/utils/constants'

  const title = 'h.gerayzade'

  let init = false
  let show = true
  let showTimeoutId

  onMount(async () => {
    show = false
    showTimeoutId = setTimeout(() => {
      init = true
      show = true
    }, 500)

    return () => clearTimeout(showTimeoutId)
  })
</script>

<svelte:head>
	<title>{title}</title>
  <meta name="description" content={META_DESCRIPTION} />
</svelte:head>

{#if show}
<section
  class="about"
  class:opacity-0={!init}
>
  <h1
    class="title"
    in:fly={{
      duration: 1000,
      y: -10,
    }}
  >
    {title}
  </h1>
  <h2
    class="subtitle"
    in:fly={{
      duration: 1000,
      y: 5,
    }}
  >
    {'<front-end-dev />'}
  </h2>
  <div class="notice">
    <p
      in:type={{
        speed: 2,
      }}
    >
      website under construction, please come back later :)
    </p>
  </div>
  <div class="image">
    <img
      src="/images/h.g.png"
      alt={title}
      in:fly={{
        duration: 1000,
        y: 20,
      }}
    />
  </div>
</section>
{/if}

<style lang="scss">
  .about {
    @apply relative overflow-x-hidden;
    @apply text-center text-white/50;
    @apply flex flex-col w-full h-160 min-h-screen p-10 md:pl-120;
  }

  .title {
    @apply font-extrabold text-4xl xs:text-6xl text-gray-800;
    @apply md:mt-auto;
  }

  .subtitle {
    @apply font-medium text-xl xs:text-2xl;
    @apply mt-5;
  }

  .notice {
    @apply relative;
    @apply h-12 w-54 mx-auto mt-auto md:my-auto;

    p {
      @apply absolute inset-0;
      @apply font-medium;
    }
  }

  .image {
    @apply absolute -z-10 bottom-0 left-1/2 md:left-0 lg:left-20 -translate-x-1/2 md:translate-x-0;
    @apply flex-col justify-end;

    img {
      @apply w-auto max-w-none h-120 md:h-160 2xl:h-200 max-h-full;
    }
  }
</style>