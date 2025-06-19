<script setup lang="ts">

const props = defineProps({
  video: {
    type: String,
  },
})

</script>

<template>
  <video :src="props.video" loop autoplay class="absolute inset-0 object-cover" />

  <div
    class="slidev-layout cover text-center z-10"
  >
    <div class="my-auto w-full z-20">
      <slot />
    </div>
  </div>
</template>
