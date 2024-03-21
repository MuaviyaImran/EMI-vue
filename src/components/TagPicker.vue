<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { defineProps } from 'vue';

const props = defineProps({
  tags: Array,
});
const emit = defineEmits(['getSelectedTags']);
const searchTerm = ref('');
const selectedTags = ref([]);
const showDropdown = ref(false);
const listRef = ref(null);
const highlightedIndex = ref(-1);

const filteredTags = computed(() => {
  return props.tags.filter((tag) =>
    tag.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

const filterTags = () => {
  showDropdown.value = true;
};

const addTag = (index) => {
  if (filteredTags.value.length > 0) {
    if (!isTagAlreadyAdded(filteredTags.value[index])) {
      selectedTags.value.push(filteredTags.value[index]);
      emit('getSelectedTags', selectedTags.value);
    }
    searchTerm.value = '';
    showDropdown.value = false;
  }
};

const isTagAlreadyAdded = (item) => {
  if (selectedTags.value.length > 0) {
    return selectedTags?.value?.includes(item) ? true : false;
  }
};

const removeTag = (index) => {
  selectedTags.value.splice(index, 1);
};
const tagListKeyPress = (event) => {
  if (event.key === 'ArrowUp') {
    highlightedIndex.value =
      (highlightedIndex.value - 1 + filteredTags.value.length) %
      filteredTags.value.length;
  } else if (event.key === 'ArrowDown' || event.key === 'Tab') {
    highlightedIndex.value =
      (highlightedIndex.value + 1) % filteredTags.value.length;
  } else if (event.key === 'Enter' && highlightedIndex.value !== -1) {
    addTag(highlightedIndex.value);
  }
};

const closeDropdown = (event) => {
  if (!event.target.closest('.relative')) {
    showDropdown.value = false;
  }
};

watch(
  () => showDropdown.value,
  (newVal) => {
    console.log('Dropdown', newVal);
  }
);

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<template>
  <div class="relative">
    <div
      class="flex items-center max-w-md ring-1 ring-gray-400 focus-within:ring-yellow-500 focus-within:ring-2 rounded mb-1"
    >
      <span
        class="w-max pl-3 flex self-stretch grow-0 shrink-0 [&>svg]:w-full [&>svg]:max-h-[2em] [&>svg]:m-auto"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M12.9172 11.6672H12.2589L12.0255 11.4422C13.0255 10.2755 13.5422 8.68386 13.2589 6.99219C12.8672 4.67552 10.9339 2.82552 8.60052 2.54219C5.07552 2.10885 2.10885 5.07552 2.54219 8.60052C2.82552 10.9339 4.67552 12.8672 6.99219 13.2589C8.68386 13.5422 10.2755 13.0255 11.4422 12.0255L11.6672 12.2589V12.9172L15.2089 16.4589C15.5505 16.8005 16.1089 16.8005 16.4505 16.4589C16.7922 16.1172 16.7922 15.5589 16.4505 15.2172L12.9172 11.6672ZM7.91719 11.6672C5.84219 11.6672 4.16719 9.99219 4.16719 7.91719C4.16719 5.84219 5.84219 4.16719 7.91719 4.16719C9.99219 4.16719 11.6672 5.84219 11.6672 7.91719C11.6672 9.99219 9.99219 11.6672 7.91719 11.6672Z"
            fill="#5B5B5B"
          />
        </svg>
      </span>
      <input
        v-model="searchTerm"
        @input="filterTags"
        @keydown.enter.prevent=""
        @keydown="tagListKeyPress"
        @keydown.tab.prevent=""
        class="appearance-none bg-transparent focus:outline-none focus:ring-0 focus:shadow-none w-full px-3 py-2 border-none text-base text-gray-700 placeholder-gray-400"
        type="text"
        placeholder="Search Keywords here..."
      />
    </div>

    <div class="absolute z-10">
      <ul
        v-if="showDropdown"
        class="left-0 bg-white border border-gray-300 rounded-md p-0 min-w-[28rem]"
        ref="listRef"
      >
        <li
          v-for="(tag, index) in filteredTags"
          :key="index"
          @click="addTag(index)"
          @mouseenter="highlightedIndex = index"
          :class="{ 'bg-slate-100': index === highlightedIndex }"
          class="cursor-pointer py-2 px-4 hover:bg-slate-100 flex justify-between"
        >
          {{ tag }}
          <span v-if="isTagAlreadyAdded(tag)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="11"
              viewBox="0 0 14 11"
              fill="none"
            >
              <path
                d="M13 1L4.75 10L1 5.90909"
                stroke="#5B5B5B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </li>
      </ul>
    </div>

    <div class="flex flex-wrap gap-2 mt-2">
      <div
        v-for="(tag, index) in selectedTags"
        :key="index"
        class="cursor-pointer border border-[#FFCF25] bg-[#ffcf2552] text-[#5B5B5B] rounded px-2 py-1"
      >
        {{ tag }}
        <span @click="removeTag(index)" class="ml-1">×</span>
      </div>
    </div>
  </div>
</template>
