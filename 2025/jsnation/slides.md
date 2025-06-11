---
theme: ../../jsr-theme
title: "JSR: Building an Open Registry for the JavaScript Community"
class: text-center
drawings:
  persist: false
transition: slide-left
mdc: true
addons:
  - slidev-addon-excalidraw
layout: video-cover
video: /background.mov
---

<img src="/jsr.svg" class="w-32 mx-auto">

Building an Open Registry for the JavaScript Community

---
transition: fade-out
layout: two-cols-header
---

# What is <span class="text-[--jsr-yellow]">JSR</span>?

::left::

- supports TypeScript out of the box
- does ***not*** replace npm, it lives alongside it
- compatible across different runtimes
- completely open-source and free
- Has built-in support by yarn and pnpm<br/>(but not npm)

::right::

<div class="pl-10">
  <img
    v-motion
    :initial="initial"
    :enter="getFinal()"
    src="/typescript.png"
    class="relative size-20 left-20"
  />
  
  <div class="w-60 relative left-50">
    <div class="relative w-40 h-40 *:size-20 *:absolute *:inset-0">
      <img
        v-motion
        :initial="initial"
        :enter="getFinal()"
        src="/npm.svg"
        class="left-10"
      />
      <img
        v-motion
        :initial="initial"
        :enter="getFinal()"
        src="/pnpm.svg"
        class="right-14 top-10"
      />
      <img
        v-motion
        :initial="initial"
        :enter="getFinal()"
        src="/yarn.svg"
        class="left-18 top-8"
      />
    </div>
  </div>
  
  <div class="w-60 relative">
    <div class="relative w-40 h-40 *:size-20 *:absolute *:inset-0">
      <img
        v-motion
        :initial="initial"
        :enter="getFinal()"
        src="/bun.svg"
        class="right-10 top-10"
      />
      <img
        v-motion
        :initial="initial"
        :enter="getFinal()"
        src="/cf-workers.svg"
        class="left-13 top-10"
      />
      <img
        v-motion
        :initial="initial"
        :enter="getFinal()"
        src="/node.svg"
        class="right-13 bottom-3"
      />
      <img
        v-motion
        :initial="initial"
        :enter="getFinal()"
        src="/deno.svg"
        class="left-15"
      />
    </div>
  </div>
</div>

<script setup lang="ts">
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const initial = {
 x: 0,
 y: 0,
};

function getFinal() {
  return {
    y: randomIntFromInterval(0, 15),
    x: randomIntFromInterval(0, 15),
    transition: {
      y: {
        delay: randomIntFromInterval(0, 1000),
        duration: randomIntFromInterval(2700, 3000),
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      },
      x: {
        delay: randomIntFromInterval(0, 1000),
        duration: randomIntFromInterval(2700, 3000),
        repeat: Infinity,
        ease: "easeInOut",
        repeatType: "mirror",
      }
    },
  };
}
</script>

---
layout: cover
transition: fade-out
background: "#f7df1eff"
---

# <span class="text-black">Governance</span>

---


# Why is <span class="text-[--jsr-yellow]">JSR</span> open?

<div class="pt-10 flex justify-center items-center">
<Excalidraw
  drawFilePath="./open-jsr.excalidraw"
  class="w-[600px]"
  :darkMode="false"
  :background="false"
/>
</div>


---

# <span class="text-[--jsr-yellow]">Board Members</span>

<div class="flex flex-col justify-between h-4/5">
<ul class="list-disc pl-5 my-auto">
    <li v-click=1><span class="inline-block w-1/4">Evan You</span> creator of Vue.js and Vite, founder of VoidZero</li>
    <li v-click=2><span class="inline-block w-1/4">Isaac Schlueter</span> creator of npm, cofounder of vlt.sh</li>
    <li v-click=3><span class="inline-block w-1/4">James Snell</span> Node.js TSC member, Principal System Engineer at Cloudflare</li>
    <li v-click=4><span class="inline-block w-1/4">Luca Casonato</span> software Engineer at Deno, TC39 representative</li>
    <li v-click=5><span class="inline-block w-1/4">Ryan Dahl</span> creator of Node.js and Deno</li>
</ul>

<div class="flex justify-around items-center w-full *:w-1/8 *:rounded mt-auto">
    <img v-click=1 src="https://github.com/yyx990803.png" />
    <img v-click=2 src="https://github.com/isaacs.png" />
    <img v-click=3 src="https://github.com/jasnell.png" />
    <img v-click=4 src="https://github.com/lucacasonato.png" />
    <img v-click=5 src="https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1674813354/dev/Dahl_Ryan_wg0lg5.png" />
</div>
</div>

---

# What does it do?

- Overseeing JSR's move to a foundation
- Setting the general direction of the project
- Making decisions on behalf of the project when necessary
- Determining how the governance board is to be elected in the future
- Determining how to review open source contributions to the project

---

# <span class="text-[--jsr-yellow]">Moderation Group</span>

<div class="flex flex-col justify-between h-4/5">
<ul class="list-disc pl-5 my-auto">
    <li><span class="inline-block w-1/4">Oliver Medhurst</span> creator of porffor</li>
    <li><span class="inline-block w-1/4">Augustin Mauroy</span> contributor to NodeJS</li>
    <li><span class="inline-block w-1/4">Doctor/BlackAsLight</span> contributor to JSR and Deno</li>
</ul>

<div class="flex justify-around items-center w-full *:w-1/8 *:rounded mt-auto">
    <img src="https://github.com/canadahonk.png" />
    <img src="https://github.com/AugustinMauroy.png" />
    <img src="https://github.com/BlackAsLight.png" />
</div>
</div>

---
layout: cover
transition: fade-out
---

# So, where is this foundation?

<!-- 
in the talks with OpenJS & ECMA, but it's a slow process.

alternatives are creating our own non-profit or seek other entities to be under.
-->
