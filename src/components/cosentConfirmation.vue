<template>
  <div class="text-center flex justify-center h-screen items-center flex-col">
    <div class="text-secondary tracking-[.25px] max-w-[580px]">
      <h1 class="font-medium text-3xl">
        Liveness Detection for User Verification
      </h1>
      <p class="my-2">Some Instructions for you before we proceed.</p>
      <div class="text-start border border-[#e3e3e3] rounded-lg p-5 mx-12 my-5">
        <div
          class="tracking-[2%] pb-8"
          v-for="(data, index) in liveDetectionTextData"
          :key="data.title"
        >
          <p class="flex gap-2 text-xl font-semibold px-1 pb-3">
            <span class="">{{ index + 1 }}.</span>
            <span>{{ data.title }}</span>
          </p>
          <p class="text-[16px] font-medium leading-5">{{ data.content }}</p>
        </div>
        <div class="flex justify-center">
          <button class="bg-primary py-2 px-4 rounded-[4px]">Continue</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import liveDetectionTextData from "../data/liveDetectionsData";
</script>
