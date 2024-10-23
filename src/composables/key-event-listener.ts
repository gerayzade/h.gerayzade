import {
  KeyEvent,
  KeyEventCode,
} from '@/types/key-event.d'

export const useKeyEventListener = (type: KeyEvent, keyCode: KeyEventCode, callback: () => void) => {
  const onKeyEvent = (event: KeyboardEvent) => {
    if (event.key === keyCode) {
      callback()
    }
  }

  onMounted(() => {
    window.addEventListener(type, onKeyEvent)
  })

  onBeforeUnmount(() => {
    window.removeEventListener(type, onKeyEvent)
  })
}
