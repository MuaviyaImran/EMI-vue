<template>
  <div class="text-[16px] font-medium leading-6 text-secondary px-3 py-2 tracking-wide">
    {{ Value }}
  </div>
</template>
<script setup>
const { Value } = defineProps(["Value"]);
</script>
