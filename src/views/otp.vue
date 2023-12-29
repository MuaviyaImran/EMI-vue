<template>
  <div
    class="mx-auto my-0 max-w-[900px] flex mt-32 justify-center"
  >
    <OTP :digitCount="4"/>
  </div>
</template>
<script setup>
import OTP from "../components/OTPass.vue";
</script>
