<template>
  <div
    id="dropdownSearchButton"
    @click.stop="preventClose"
    @click="toggleDropdown"
    class="relative inline-flex justify-between items-center px-4 py-2 text-sm font-base ring-1 ring-gray-400 rounded bg-white shadow-md"
    :class="width"
    type="button"
  >
    <span class="text-secondary text-sm font-medium">{{ title }}</span>

    <svg
      class="w-[10px] h-[10px] ml-2.5"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
      id="down-arrow"
    >
      <path
        d="M98.9 184.7l1.8 2.1 136 156.5c4.6 5.3 11.5 8.6 19.2 8.6 7.7 0 14.6-3.4 19.2-8.6L411 187.1l2.3-2.6c1.7-2.5 2.7-5.5 2.7-8.7 0-8.7-7.4-15.8-16.6-15.8H112.6c-9.2 0-16.6 7.1-16.6 15.8 0 3.3 1.1 6.4 2.9 8.9z"
      ></path>
    </svg>
    <transition name="fade" mode="out-in" class="bg-white ring-1 ring-gray-400">
      <div
        v-if="showDropdown"
        id="dropdownSearch"
        class="absolute z-10 p-2 shadow-md origin-top bg-white w-full top-[45px] left-0 border rounded-md"
      >
        <ul class="overflow-y-auto text-sm">
          <li
            v-if="background"
            class="text-[#5B5B5B] text-sm font-base border-b pb-1 mb-1"
          >
            Sort by
          </li>
          <li
            v-for="(option, index) in options"
            :key="option + index"
            @click.stop="preventClose"
          >
            <div
              class="flex text-[#5B5B5B] items-center px-1 py-2 rounded hover:bg-gray-100"
            >
              <input
                :id="'checkbox-option-' + option + index"
                type="checkbox"
                :value="option"
                v-model="selectedOption"
                class="w-4 h-4 accent-[#ffcf25] bg-gray-100 border-gray-300 rounded"
              />
              <label
                :for="'checkbox-label-' + option + index"
                class="w-fit ml-3 py-1 px-3 text-sm font-base rounded"
                :class="{
                  'bg-[#DFFFE4] text-success':
                    background && option === 'Success',
                  'bg-[#F9E6D0] text-[#E08315]': option === 'Pending',
                  'bg-danger-light text-danger': option === 'Rejected',
                }"
              >
                {{ option }}
              </label>
            </div>
          </li>
          <li
            v-if="!background"
            class="text-[#5B5B5B] text-sm font-base border-t"
          >
            <div
              class="flex text-[#5B5B5B] items-center px-1 py-2 rounded hover:bg-gray-100"
            >
              <input
                :id="'checkbox-option-All Transfers'"
                type="checkbox"
                value="All Transfers"
                v-model="selectedOption"
                class="w-4 h-4 accent-[#ffcf25] bg-gray-100 border-gray-300 rounded"
              />
              <label
                :for="'checkbox-label-All Transfers'"
                class="w-fit ml-3 py-1 px-3 text-sm font-base rounded"
              >
                All Transfers
              </label>
            </div>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
const showDropdown = ref(false);
const selectedOption = ref([]);
const emit = defineEmits(["get-filters"]);
const { options, title, width, background } = defineProps([
  "options",
  "title",
  "width",
  "background",
]);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};
watch(selectedOption, (newValue) => {
  const objectType =
    title === "Transfer Type"
      ? "transfer_type"
      : title === "Status"
      ? title.toLowerCase()
      : "";
  emit("get-filters", { [objectType]: newValue });
});

const closeDropdown = (event) => {
  const dropdown = document.getElementById("dropdownSearch");
  if (showDropdown.value && dropdown && !dropdown.contains(event.target)) {
    showDropdown.value = false;
  }
};

onMounted(() => {
  document.addEventListener("click", closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener("click", closeDropdown);
});

const preventClose = (event) => {
  event.stopPropagation();
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter {
  transition: all 0.2s ease-in-out;
  transform: scale(0, 0);
}

.fade-leave-to {
  opacity: 0;
}
</style>
