<template>
  <div class="bg-[#fff] p-8">
    <div
      class="px-3 mb-4 flex justify-between text-lg font-extrabold text-secondary"
    >
      <p>Supporting Documents</p>
      <span>x</span>
    </div>
    <hr />
    <table className=" text-[#723D08] m-3">
      <thead>
        <tr>
          <th
            v-for="(headerItem, index) in tableHeader"
            :key="headerItem + index"
            className="px-2 py-3 text-base"
          >
            {{ headerItem }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="even:bg-[#f9f7f5]"
          v-for="(document, index) in supportingDocuments"
          :key="document + index"
        >
          <td
            v-for="(value, index) in Object.values(document)"
            :key="value + index"
            class="px-2 min-w-[120px] py-3 text-base text-[#b06004]"
          >
            {{ value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup>
import { ref } from "vue";
import supportingDocuments from "../data/supportingDocumentsData";
const tableHeader = ref([
  "Source",
  "Amount",
  "Description",
  "Date",
  "Supporting Documents",
]);
</script>
<style scoped>
table,
th,
td {
  border: 1px solid #dbd5cd;
}
</style>
