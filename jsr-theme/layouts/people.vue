<script setup lang="ts">

const props = defineProps({
  people: {
    type: Array,
  },
});
</script>

<template>
  <div class="slidev-layout default">
    <slot />

    <div class="flex flex-col justify-between h-4/5">
      <ul class="list-disc pl-5 my-auto">
        <li v-for="(person, index) in people" :key="index" v-click="index + 1">
          <span class="inline-block w-1/4">{{ person.name }}</span> {{ person.title }}
        </li>
      </ul>

      <div class="flex justify-around items-center w-full *:w-1/8 *:rounded mt-auto">
        <img v-for="(person, index) in people" :key="index" v-click="index + 1" :src=person.icon />
      </div>
    </div>
  </div>
</template>

