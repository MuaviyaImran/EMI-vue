<template>
  <div
    class="flex gap-[3%] items-center justify-between px-7 py-3 border-b border-border-primary"
  >
    <div class="basis-[20%]">
      <img
        class="max-w-[150px] cursor-pointer"
        src="/icons/logo.svg"
        alt="App Logo"
      />
    </div>
    <div class="flex gap-4 basis-[50%] items-center">
      <span class="pt-1 text-base font-normal">Hello {{ userData.name }}</span>
      <img
        class="icon-size cursor-pointer"
        src="/icons/mail.svg"
        alt="App Logo"
      />
    </div>
    <div class="flex gap-4 basis-[20%] items-center justify-end">
      <span class="border-r">
        <img
          class="cursor-pointer mx-3 icon-size"
          src="/icons/profile-filled.svg"
          alt="App Logo"
        />
      </span>
      <img
        class="icon-size cursor-pointer"
        src="/icons/logout.svg"
        alt="App Logo"
      />
    </div>
  </div>
</template>

<script setup>
import userData from "../data/userData";
</script>
<style scoped>
.icon-size {
  height: 32px;
  width: 32px;
}
</style>
