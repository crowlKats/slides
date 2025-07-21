<script setup lang="ts">
import { computed } from "vue";
import { resolveAssetUrl } from "../layoutHelper";

const props = defineProps({
  video: {
    type: String,
  },
});

const src = computed(() => resolveAssetUrl(props.video));
</script>

<template>
  <video :src="src" loop autoplay class="absolute inset-0 object-cover" />

  <div
    class="slidev-layout cover text-center z-10"
  >
    <div class="my-auto w-full z-20">
      <slot />
    </div>
  </div>
</template>
