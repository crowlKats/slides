<script setup lang="ts">
import { computed } from "vue";
import { handleBackground } from "../layoutHelper";

const props = defineProps({
  background: {
    // random image from a curated Unsplash collection by Anthony
    default: "https://source.unsplash.com/collection/94734566/1920x1080",
  },
});

const style = computed(() => handleBackground(props.background, true));
</script>

<template>
  <div
    class="slidev-layout cover text-center"
    :style="style"
  >
    <div class="my-auto w-full">
      <slot />
    </div>
  </div>
</template>
