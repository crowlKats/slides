<script setup lang="ts">

const props = defineProps({
  video: {
    type: String,
  },
})

</script>

<template>
  <video :src="props.video" loop autoplay class="absolute inset-0 object-cover -z-100" />

  <div
    class="slidev-layout cover text-center"
  >
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
