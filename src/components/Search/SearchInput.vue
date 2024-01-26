<template>
  <div class="w-full">
    <input
      @click.stop="props.preventClose"
      v-model="searchText"
      @input="handleInput"
      @focus="showAllResults"
      @keydown="handleKeyDown"
      @click="handleSearchDropdown"
      type="text"
      class="relative w-full h-full text-secondary rounded-lg font-medium tracking-[0.15px] text-base px-4 placeholder:font-bold"
      placeholder="Search..."
    />
    <div
      class="absolute w-full bg-white px-3 py-4 mt-1 rounded-lg border border-secondary-light"
      v-if="props.showDropDown"
    >
      <span
        v-if="searchResults.length !== 0"
        class="text-base font-medium tracking-[0.15px] text-secondary-semi-dark"
        >Recent Searches</span
      >
      <span
        v-else
        class="text-sm font-medium tracking-[0.15px] text-secondary-semi-dark"
        >No Record Found...</span
      >
      <div
        v-for="(result, index) in searchResults"
        :key="index"
        @click="selectResult(index)"
        class="flex group gap-3 p-4 cursor-pointer hover:bg-gray-100"
        :class="{ 'bg-gray-100': index === selectedResult }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M13 3C8.03 3 4 7.03 4 12H1L4.89 15.89L4.96 16.03L9 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.07 19 9.32 18.21 8.06 16.94L6.64 18.36C8.27 19.99 10.51 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z"
            fill="#5F5E5E"
          />
        </svg>
        <span
          class="font-normal text-base group-hover:text-secondary"
          :class="{
            'text-secondary': index === selectedResult,
            'text-secondary-semi-dark': index !== selectedResult,
          }"
          v-html="highlightSearchText(result)"
        >
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps(["showDropDown", "preventClose"]);
const searchText = ref("");
const searchResults = ref([]);
let selectedResult = ref(-1);
const stuff = [
  "Verified Requests",
  "Pakistan",
  "IND ABC",
  "COR 123",
  "Ahmad",
  "Bilal",
  "Oracle Ltd",
];

const emit = defineEmits(["showSearchDropdownSetter"]);

const handleSearchDropdown = () =>
  emit("showSearchDropdownSetter", props.showDropDown);

const handleInput = () => {
  selectedResult.value = -1;
  showResults(search(searchText.value));
};

const showAllResults = () => {
  showResults(stuff);
};

const search = (text) => {
  return stuff.filter((item) =>
    item.toLowerCase().includes(text.toLowerCase())
  );
};

const highlightSearchText = (result) => {
  const rx = new RegExp(`(${searchText.value})`, "i");
  return result.replace(rx, "<span>$1</span>");
};

const showResults = (results) => {
  searchResults.value = results;
};

const selectResult = (index) => {
  if (index >= 0 && index < searchResults.value.length) {
    selectedResult.value = index;
    searchText.value = searchResults.value[selectedResult.value];
  }
};

const handleKeyDown = (event) => {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    selectResult(selectedResult.value + 1);
  } else if (event.key === "ArrowUp") {
    event.preventDefault();
    selectResult(selectedResult.value - 1);
  }
  if (event.key === "Enter" || event.key === "Escape") {
    event.preventDefault();
    handleSearchDropdown();
  }
};
</script>

<style scoped>
input[type="text"] {
  outline: none;
  box-shadow: none;
  border: none;
}
</style>
