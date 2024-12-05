<template>
    <Transition name="fade">
        <div v-if="store.modalOpen" @click="store.modalOpen = false" class="modal-container"
            aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 "
                        @click.stop>
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <!-- <div class="sm:flex sm:items-start mb-4"> -->
                            <!-- </div> -->
                            <video controls :src="video" preload="metadata" width="800"></video>
                            <div class="my-2 flex justify-center items-center">
                                <a-segmented v-model:value="selected" :options="keys"></a-segmented>
                            </div>
                            <MonacoEditor theme="vs" :options="options" language="json" :width="800" :height="300"
                                v-model:value="selectedAnnotationJson"></MonacoEditor>
                        </div>
                        <!-- <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="button"
                                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                            <button type="button"
                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </Transition>

</template>

<script setup lang="ts">
import { store } from '@/store';
import { Segmented } from 'ant-design-vue';
import { computed, reactive, readonly, ref } from 'vue';
import MonacoEditor from 'monaco-editor-vue3';
const options = ref({
    colorDecorators: true,
    lineHeight: 24,
    tabSize: 2,
    readOnly: true,
})

const video = computed(() => store.video)
const keys = computed(() => Object.keys(store.annotations))
const selected = ref('Captions')
const annotations = computed(() => store.annotations)
const selectedAnnotation = computed(() => annotations.value[selected.value])
const selectedAnnotationJson = computed(() => JSON.stringify(selectedAnnotation.value, null, 2))

</script>


<style scoped lang="scss">
.modal-container {
    @apply fixed w-full h-full;
    background-color: rgba(0, 0, 0, 0.5);
    top: 0;
    left: 0;
    z-index: 999;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
