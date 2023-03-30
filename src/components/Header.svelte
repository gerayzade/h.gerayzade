<script>
  import { bounceOut } from 'svelte/easing'
  import { scale } from 'svelte/transition'
  import { SOCIALS } from '~/utils/constants'
  import SvgIcon from '~/components/SvgIcon.svelte'
</script>

<header class="header">
  <div class="socials">
    {#each SOCIALS as social, index}
    <a
      class="socialsLink"
      href={social.href}
      target="_blank"
      in:scale={{
        delay: 1300 + 150 * index,
        duration: 300,
        easing: bounceOut,
      }}
    >
      <SvgIcon name={social.name} />
    </a>
    {/each}
  </div>
</header>

<style lang="scss">
  .header {
    @apply fixed z-10 top-0 md:top-[1rem] max-md:bottom-0 right-0 sm:right-[1rem];
    @apply flex items-center;
  }

  .socials {
    @apply flex flex-col items-center;

    &Link {
      @apply p-[0.75rem];

      :global(svg) {
        @apply w-[1.5rem] h-[1.5rem];
      }

      :global(svg path) {
        @apply transition-[fill] duration-150;
      }

      &:hover {
        :global(svg path) {
          @apply [@media(hover)]:fill-emerald-600;
        }
      }
    }
  }
</style>
