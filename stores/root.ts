import { defineStore } from 'pinia'

export const useRootStore = defineStore(
  'root',
  () => {
    const theme = ref('')

    return {
      theme
    }
  },
  {
    persist: {
      key: 'root',
      storage: persistedState.localStorage
    }
  }
)
