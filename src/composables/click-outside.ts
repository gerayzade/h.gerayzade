export const useClickOutside = (callback: () => void) => {
  const elementRef = ref<HTMLElement | null>(null)

  const onDocumentClick = (event: MouseEvent) => {
    if (!elementRef.value) {
      return
    }

    const clickedInside = elementRef.value.contains(event.target as HTMLElement)

    if (!clickedInside) {
      callback()
    }
  }

  onMounted(() => {
    document.addEventListener('click', onDocumentClick, true)
  })

  onBeforeUnmount(() => {
    document.removeEventListener('click', onDocumentClick, true)
  })

  return {
    elementRef,
  }
}
