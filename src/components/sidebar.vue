<template>
  <aside
    class="max-w-[50px] sm:max-w-[250px] border-border-primary border-r"
    :class="{
      'w-[50px]': isMenuClose,
      'max-w-[200px]': !isMenuClose,
    }"
  >
    <div class="flex justify-end px-2 pt-2">
      <img
        @click="handleMenuButton"
        class="cursor-pointer"
        :src="isMenuClose ? '/icons/menu-open.svg' : '/icons/menu-close.svg'"
        alt="Menu Button to Close Menu"
      />
    </div>
    <div class="py-3 border-b border-border-primary flex flex-col items-center">
      <img
        class="h-14 w-14 cursor-pointer"
        src="/icons/profile-filled.svg"
        alt="User Profile Picture"
      />
      <div
        :class="{
          hidden: isMenuClose,
          'flex flex-col items-center': !isMenuClose,
        }"
      >
        <span class="font-semibold">{{ userData.name }}</span>
        <span class="text-sm font-normal text-secondary-semi-light">{{
          userData.email
        }}</span>
      </div>
    </div>

    <ul>
      <li
        class="flex items-center gap-4 border-b border-border-primary cursor-pointer"
        :class="{
          'px-3 py-2 justify-center': isMenuClose,
          'px-6 py-4': !isMenuClose,
          'bg-primary': active === link.title,
        }"
        v-for="(link, index) in sidebarLinks"
        :key="link + index"
        @click="handleSelected(link.title)"
      >
        <img :src="link.icon" alt="Link Icon" class="h-[18px] w-[18px]" />
        <span
          class="text-sm font-normal text-secondary-semi-light"
          :class="{
            hidden: isMenuClose,
            'flex flex-col items-center': !isMenuClose,
            'text-black': active === link.title,
          }"
        >
          {{ link.title }}
        </span>
      </li>
    </ul>
  </aside>
</template>
<script setup>
import { ref, watch } from "vue";
import userData from "../data/userData";
const { sidebarLinks } = defineProps(["sidebarLinks"]);
const isMenuClose = ref(false);
const active = ref(sidebarLinks[0].title);
const handleMenuButton = () => (isMenuClose.value = !isMenuClose.value);
const handleSelected = (title) => (active.value = title);
</script>
