<template>
  <div class="loading-container">
    <div
      v-if="loading"
      class="loader animate-spin rounded-full border-t-4 border-success border-solid h-20 w-20"
    ></div>
    <div class="text-3xl" v-else>
      <span
        v-if="status === 'success'"
        class="bg-[#dff0e4] text-success h-20 w-20 flex items-center justify-center rounded-full"
      >
        &#10004;
      </span>
      <span
        v-else-if="status === 'failure'"
        class="bg-[#f3dfdf] text-danger h-20 w-20 flex items-center justify-center rounded-full"
      >
        &#10008;
      </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(["loading", "status"]);
</script>
