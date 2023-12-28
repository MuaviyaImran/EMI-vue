<template>
  <div class="text-center flex justify-center h-screen items-center flex-col">
    <div class="text-secondary tracking-[.25px]">
      <h1 class="font-medium text-[32px] leading-[100%]">
        Liveness Detection for User Verification
      </h1>
      <p class="my-2 text-xs">Please place your face inside the shape.</p>
      <div class="border border-[#e3e3e3] rounded-lg px-4 py-8 w-[900px] my-5">
        <div class="flex justify-center">
          <img
            src="../assets/liveScanUserImage.png"
            alt="Live Scan User Image"
          />
        </div>
        <button class="bg-primary mt-6 py-2 px-4 rounded-[4px]">
          Initiate Now
        </button>
      </div>
    </div>
  </div>
</template>
<script setup></script>
