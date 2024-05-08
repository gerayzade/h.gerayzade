type State = {
  isLoading: boolean,
}

export const useRootStore = defineStore('rootStore', () => {
  const state = reactive<State>({
    isLoading: false,
  })

  const setLoading = (isLoading: boolean) => {
    state.isLoading = isLoading
  }

  return {
    ...toRefs(state),
    setLoading,
  }
})
