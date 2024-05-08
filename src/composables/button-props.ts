import { NuxtLink } from '#components'

type ButtonProps = {
  href?: string | null,
  to?: string | null,
  type?: 'button' | 'submit',
  [key: string]: unknown,
}

export const useButtonProps = (props: ButtonProps) => {
  const tagName = computed(() => {
    if (props.href) {
      return 'a'
    }
    if (props.to) {
      return NuxtLink
    }
    return 'button'
  })

  const buttonProps = computed(() => {
    return tagName.value === 'button'
      ? {
        type: props.type || 'button',
      }
      : {
        href: props.href || undefined,
        target: props.href && !props.href.startsWith('/')
          ? '_blank'
          : null,
        to: props.to,
      }
  })

  return {
    buttonProps,
    tagName,
  }
}
