<template>
  <div
    class="mx-auto my-0 max-w-[1000px] flex items-center h-screen justify-center"
  >
    <OTP :digitCount="4"></OTP>
  </div>
</template>
<script setup>
import OTP from "../components/OTP.vue";
</script>
