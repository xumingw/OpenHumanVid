<template>
    <section class="image-stack">
      <h3>{{ title }}</h3>
      <div>
        <img
          v-for="(image, index) in images"
          :key="index"
          :src="image"
          :alt="'Image ' + (index + 1)"
        />
      </div>
    </section>
</template>

<script setup lang="ts">

interface Props {
title?: string
imageList?: string[]
}

const {props} = defineProps<{props: Props}>()

// Provide default values for props
const title = props.title || "Stacked Images"
const images = props.imageList || []

</script>

<style lang="scss" scoped>
.image-stack {
    div {
        max-width: 960px;
        @apply w-full mt-2;
    }
}

img {
    margin: 1rem 0;
}

</style>