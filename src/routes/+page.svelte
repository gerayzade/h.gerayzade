<script>
  import { onMount } from 'svelte'
  import { bounceOut } from 'svelte/easing'
  import {
    fly,
    scale,
  } from 'svelte/transition'
  import { META_DESCRIPTION } from '~/utils/constants'
  import { type } from '~/utils/transition'

  const title = 'h·gerayzade'

  let activeSlug = null
  let timeoutId = null
  let drawCircle = false

  $: isActive = (slug) => activeSlug === slug

  onMount(() => {
    timeoutId = setTimeout(() => {
      activeSlug = 'about'
    }, 500)

    return () => clearTimeout(timeoutId)
  })
</script>

<svelte:head>
	<title>{title}</title>
  <meta name="description" content={META_DESCRIPTION} />
  <link rel="preload" as="image" href="/images/h.g.png" />
</svelte:head>

{#if isActive('about')}
<section class="about">
  <h1
    class="title"
    class:hasCircle={drawCircle}
    in:fly={{
      duration: 1000,
      y: -10,
    }}
  >
    <span>{title.slice(0, 3)}</span>
    <span>{title.slice(3)}</span>
    <span 
      class="circle"
      in:scale={{
        delay: 1000,
        duration: 300,
        easing: bounceOut,
      }}
      on:introstart={() => drawCircle = true}
    />
  </h1>
  <p
    class="greeting"
    in:type={{
      delay: 1300,
      speed: 2.5,
    }}
  >
    Hi there, I'm Heydar, a front-end developer with 5+ years of tech wizardry up my sleeves.
  </p>
  <div
    class="image"
    class:hasDropShadow={drawCircle}
  >
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
    @apply absolute inset-0;
    @apply text-center text-white;
    @apply flex flex-col w-full min-h-[38rem] xs:min-h-[44rem] sm:max-md:min-h-[48rem] p-[4rem] md:pl-[34rem];
  }

  .title {
    @apply relative;
    @apply font-extrabold text-4xl sm:text-6xl;
    @apply self-center sm:mt-[4rem] md:mt-auto;

    &.hasCircle {
      span:nth-of-type(1) {
        @apply text-gray-800;
        @apply transition-colors duration-300	delay-1000;
      }
    }

    span:nth-of-type(2) {
      @apply -ml-[0.2em];
    }

    .circle {
      @apply absolute -z-10 -left-[0.2em] top-1/2 -translate-y-1/2;
      @apply w-[1.9em] h-[1.9em] bg-emerald-600 rounded-full;
    }
  }

  .greeting {
    @apply font-medium;
    @apply w-[18rem] sm:w-[24rem] max-w-full mx-auto mt-[3.5rem] sm:mt-[4rem] md:mb-auto;
  }

  .image {
    @apply absolute -z-10 bottom-0 left-1/2 md:left-0 lg:left-[5rem] -translate-x-1/2 md:translate-x-0;
    @apply flex-col justify-end;

    img {
      @apply w-auto max-w-none h-[22rem] xs:h-[28rem] md:h-[40rem] 2xl:h-[48rem] max-h-full;
      @apply grayscale brightness-75;
    }

    &.hasDropShadow {
      @apply drop-shadow-emerald;
      @apply transition-[filter] duration-300 delay-1000;

      @media (hover: none) {
        @apply delay-0;
      }
    }
  }
</style>