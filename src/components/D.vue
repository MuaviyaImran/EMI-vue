<template>
  <div class="flex flex-col gap-1">
    <div
      id="dropdownSearchButton"
      @click.stop="preventClose"
      @click="toggleDropdown"
      class="inline-flex justify-between items-center px-2 py-1 text-sm w-60 font-base ring-1 ring-gray-400 rounded-sm bg-white shadow-md"
      type="button"
    >
      <span class="text-gray-400">Input Source(s)</span>

      <svg
        class="w-[10px] h-[10px] ml-2.5"
        :class="{ showDropdown: rotate - 90 }"
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
    </div>
    <!-- Dropdown menu -->
    <transition name="fade" mode="out-in" class="bg-white ring-1 ring-gray-400">
      <div
        v-if="showDropdown"
        id="dropdownSearch"
        class="z-10 p-2 shadow-md origin-top rounded-sm w-60"
      >
        <ul class="overflow-y-auto text-sm">
          <!-- Iterate over the items array and create checkboxes -->
          <li v-for="(item, index) in options" :key="index">
            <div class="flex items-center px-1 py-2 rounded hover:bg-gray-100">
              <input
                :id="'checkbox-item-' + index"
                type="checkbox"
                :value="item.id"
                v-model="selectedOption"
                class="w-4 h-4 accent-[#ffcf25] bg-gray-100 border-gray-300 rounded"
              />
              <label
                :for="'checkbox-item-' + index"
                class="w-full ml-3 text-sm font-base text-gray-900 rounded"
              >
                {{ item.label }}
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
const props = defineProps({
  context: Object,
});

const showDropdown = ref(false);
const selectedOption = ref([]);
const options = [
  { id: 0, label: "jkahsd" },
  { id: 1, label: "jkasahsd" },
  { id: 2, label: "jkahassd" },
  { id: 3, label: "jkahasdsd" },
];
console.log(options);
watch(selectedOption, (newValue, oldValue) => {
  props.context.node.input(getSelectedObject());
  console.log(selectedOption);
});

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const getSelectedObject = () => {
  const selectedObject = {};
  options.forEach((item) => {
    selectedObject[item.id] = selectedOption.value.includes(item.id);
  });
  return selectedObject;
};

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
