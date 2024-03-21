<template>
  <div class="mx-auto my-0 max-w-[900px] flex flex-col items-center mt-32">
    <TagPicker :tags="tags" @getSelectedTags="getTags" />

    <pre>{{ selected_tags }}</pre>
  </div>
</template>
<script setup>
import TagPicker from '../components/TagPicker.vue';
import { ref } from 'vue';

const selected_tags = ref('');
const tags = ref([
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
]);
const getTags = (tags) => {
  selected_tags.value = tags;
};
</script>
