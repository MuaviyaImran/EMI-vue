<template>
  <div class="w-full">
    <ul class="flex justify-center">
      <li
        v-for="(stepText, index) in steps"
        :key="index + stepText"
        class="text-right"
        :class="{ 'w-full': index != 0 }"
      >
        <div
          class="flex items-center"
          :class="{
            'before:h-1 before:w-full before:border-dotted before:border-b-8':
              index !== 0,
            '': index === 0,
            'before:border-primary': index <= step,
            'before:border-[#808080]': index > step,
          }"
        >
          <div
            class="flex items-center justify-center w-10 h-10 rounded-full shrink-0 border-2 mx-2 cursor-pointer"
            :class="{
              'border-primary': index <= step,
              'border-[#808080] ': index > step,
            }"
            @click="handleChangeForm(index)"
          >
            <span
              :class="{
                'bg-primary': index <= step,
                'bg-[#808080]': index > step,
              }"
              class="w-4 h-4 rounded-full"
            ></span>
          </div>
        </div>

        {{ stepText }}
      </li>
    </ul>

    <form @submit.prevent="formAction" class="border px-6 b">
      <component :is="forms[step]"> </component>
      <div class="py-4"></div>
      <div class="flex justify-end gap-1">
        <button
          class="px-5 rounded-lg py-2 border bg-blue-500"
          type="button"
          v-if="step !== 0"
          @click="step--"
        >
          Back
        </button>
        <button
          class="px-5 py-2 border bg-green-300 rounded-lg"
          type="submit"
          v-if="step !== steps.length - 1"
        >
          Next
        </button>
        <button
          class="px-5 py-2 border bg-green-300 rounded-lg"
          type="submit"
          v-if="step == steps.length - 1"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
sty
<script setup>
import { ref } from "vue";

let step = ref(0);

const { steps, forms, submitAction } = defineProps([
  "steps",
  "submitAction",
  "forms",
]);
const formAction = () => {
  if (step.value !== steps.length - 1) return step.value++;
  submitAction();
};
const handleChangeForm = (index) => {
  if (step.value !== index) return (step.value = index);
  submitAction();
};
</script>
