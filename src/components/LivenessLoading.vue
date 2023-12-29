<template>
  <div class="text-center flex justify-center mt-12 items-center flex-col">
    <div class="text-secondary tracking-[.25px]">
      <h1 class="font-medium text-[32px] leading-[100%]">
        Liveness Detection for User Verification
      </h1>
      <p class="my-2 text-xs">Liveness Check</p>
      <div class="border border-[#e3e3e3] rounded-lg px-4 py-8 w-[900px] my-5">
        <LoadingStatus
          class="flex justify-center"
          :loading="loading"
          :status="status"
        >
        </LoadingStatus>
        <!-- On Loading -->

        <div v-if="loading">
          <p class="my-4 text-xl">Verification can take up to one minute</p>
          <p class="text-base">Please do not close your window.</p>

          <button
            class="bg-[#ffeca8] text-[#111827] mt-6 py-2 px-4 rounded-[4px]"
            disabled
          >
            Next
          </button>
        </div>

        <!-- On Success -->

        <div v-if="status === 'success'">
          <p class="my-4 text-xl">Your Liveness Check is completed.</p>
          <button class="bg-primary mt-6 py-2 px-4 rounded-[4px]">Next</button>
        </div>

        <!-- On Failure -->
        <div v-if="status === 'failure'">
          <p class="my-4 text-xl">Your Liveness Check couldn’t be completed.</p>
          <p class="text-base">Please try again</p>
          <button class="bg-primary mt-6 py-2 px-4 rounded-[4px]">
            Try Again
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import LoadingStatus from "./LoadingStatus.vue";
import { ref } from "vue";

const loading = ref(true);
const status = ref(null);

setTimeout(() => {
  loading.value = false;
  status.value = "success";
}, 3000);
</script>
