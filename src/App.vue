<script setup lang="ts"></script>

<template>
  <div class="bg-mist-950">
    <!-- TITLE CARD -->
    <div class="flex justify-center py-[2rem]">
      <svg
        class="h-[5rem] w-[5rem]"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path d="M2 4L16 28L30 4H24.5L16 18.5L7.5 4H2Z" fill="#41B883"></path>
          <path d="M7.5 4L16 18.5L24.5 4H19.5L16.0653 10.0126L12.5 4H7.5Z" fill="#35495E"></path>
        </g>
      </svg>
      <h1 class="text-2xl flex items-center">
        <div class="flex flex-col">
          <span class="text-mist-300">Vue.js</span>
          <span class="text-mist-500">Showcase Website</span>
        </div>
      </h1>
    </div>
    <!-- MAIN DIV -->
    <div class="flex h-[100vh] my-2 divide-y w-1/2 mx-auto">
      <!-- SIDEBAR -->
      <sidebar class="min-w-1/5 mr-2 text-mist-600">
        <h2 class="text-mist-300 font-bold ml-2">N A V I G A T I O N</h2>
        <hr class="border-t border-mist-800" />
        <ul class="flex space-y-[0.5rem] flex-col mt-2">
          <RouterLink
            to="/"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-200"
          >
            <div
              class="active_indicator | absolute top-0 bottom-0 w-0 bg-emerald-500 rounded-sm transition-all"
            ></div>
            <p class="ml-2">Home</p>
          </RouterLink>
          <RouterLink
            to="/refType"
            class="relative hover:rounded-t-xl hover:text-mist-300 transition-all duration-100"
          >
            <div
              class="active_indicator | absolute top-0 bottom-0 w-0 bg-emerald-500 rounded-sm transition-all"
            ></div>
            <p class="ml-2">RefType</p>
          </RouterLink>
        </ul>
      </sidebar>
      <!-- PAGE CONTENT -->
      <div class="">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  color: white;

  .active_indicator {
    width: 0.25rem;
    transition-duration: 1;
  }
}
</style>
