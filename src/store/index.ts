import { reactive, ref } from 'vue'
export const store = reactive<{
  tweInitializing: { [key: string]: any }
  setInitializing: (componentName: string, initializing: boolean) => void
  modalOpen: Boolean
  modalComponent: any
  annotations: { [key: string]: any }
  video: string
}>({
  tweInitializing: {},
  setInitializing(componentName: string, initializing: boolean) {
    this.tweInitializing[componentName] = initializing
    this.tweInitializing = { ...this.tweInitializing }
  },
  modalOpen: false,
  modalComponent: null,
  annotations: {},
  video: ''
})
