<script>
  import icons from '~/utils/icons'

  export let name

  let icon = icons[name]
  let viewBox = `0 0 ${icon.width} ${icon.height}`
</script>

<svg
  viewBox={viewBox}
  {...$$restProps}
>
  {@html icon.content}
</svg>
