<template>
  <div
    class="fixed z-50 top-5 flex justify-end traslate transition-all duration-500 ease-out bg-white rounded-lg"
    :class="{
      '-right-96': !props.showSnackbar,
      'right-5': props.showSnackbar,
    }"
  >
    <div
      class="relative flex max-w-sm items-center justify-between gap-2 overflow-hidden rounded-lg border px-4 py-2 pr-0 text-sm font-medium capitalize shadow-xs before:absolute before:left-0 before:h-full before:w-2"
      :class="[classes, slots?.button && 'flex-wrap']"
    >
      <span class="max-w-[38ch]">
        <slot name="message" />
      </span>
      <div class="ml-auto flex gap-1">
        <slot name="button" />
        <img
          @click="hideSnackBar"
          src="../assets/close.svg"
          alt="close"
          class="cursor-pointer px-2 hover:scale-105 focus:scale-105 active:scale-95"
        />
      </div>
    </div>
  </div>
</template>
<style></style>
<script setup>
import { useSlots } from "vue";
import { generateBaseSnackBarClasses } from "../utils";

const slots = useSlots();
const props = defineProps(["variant", "type", "showSnackbar"]);
const emit = defineEmits(["handleSnackbarHide"]);
const classes = generateBaseSnackBarClasses(props.type, props.variant);
const hideSnackBar = () => emit("handleSnackbarHide");
</script>
