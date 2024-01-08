<template>
  <div class="text-[12px] font-medium leading-4 text-secondary-semi-dark">
    {{ Heading }}
  </div>
</template>
<script setup>
const { Heading } = defineProps(["Heading"]);
</script>
