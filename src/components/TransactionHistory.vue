<script setup>
import { ref } from "vue";
import transactionHistoryData from "../data/transactionHistory";
import BaseDropdownCheckbox from "./BaseDropdownCheckbox.vue";
import BaseDropdownRadio from "./baseDropdownRadio.vue";
const filters = ref({});
const tableHeader = [
  "Date",
  "Beneficiary",
  "Description",
  "Transfer ID",
  "Amount (EUR)",
  "Balance",
  "Status",
];

const transferTypeOptions = [
  "Date",
  "Beneficiary",
  "Description",
  "Transfer ID",
  "Amount (EUR)",
  "Balance",
  "Status",
];
const periodOptions = [
  "Last 10 transfers",
  "Last 20 transfers",
  "Current Day",
  "Last 5 days",
  "Last 10 days",
  "Last 20 days",
];
const statusOptions = ["Success", "Rejected", "Pending"];
const getFilters = (filterObj) => {
  const objKey = Object.keys(filterObj)[0];
  const objValue = Object.values(filterObj)[0];
  Object.assign(filters.value, { [objKey]: objValue });
  console.log(filters.value);
};
</script>
<template>
  <div>
    <div>
      <div class="my-7 flex gap-4">
        <BaseDropdownRadio
          :options="periodOptions"
          width="w-[230px]"
          title="Period : "
          @get-filters="getFilters"
        />
        <BaseDropdownCheckbox
          :options="transferTypeOptions"
          title="Transfer Type"
          width="w-[200px]"
          @get-filters="getFilters"
        />
        <BaseDropdownCheckbox
          :options="statusOptions"
          title="Status"
          @get-filters="getFilters"
          width="w-[160px]"
          :background="true"
        />
        <div class="px-4 py-2">
          <span
            class="border-b cursor-pointer border-primary text-secondary-semi-light text-sm font-medium pb-1"
            >Clear All</span
          >
        </div>
      </div>
      <table class="w-full">
        <thead>
          <tr class="bg-[#f8f8f8]">
            <th
              v-for="(headerItem, index) in tableHeader"
              :key="headerItem + index"
              className="px-3 py-4 text-base text-start text-[#606060] border-y"
            >
              <div class="flex gap-2 items-center">
                <span>
                  {{ headerItem }}
                </span>
                <div class="cursor-pointer">
                  <svg
                    width="10px"
                    height="10px"
                    viewBox="0 0 24 24"
                    fill="none"
                    @click="() => console.log('up')"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1018 16.9814C5.02785 16.9814 4.45387 15.7165 5.16108 14.9083L10.6829 8.59762C11.3801 7.80079 12.6197 7.80079 13.3169 8.59762L18.8388 14.9083C19.5459 15.7165 18.972 16.9814 17.898 16.9814H6.1018Z"
                      fill="#606060"
                    />
                  </svg>
                  <svg
                    @click="() => console.log('down')"
                    width="10px"
                    class="-mt-[3px]"
                    height="10px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.1018 8C5.02785 8 4.45387 9.2649 5.16108 10.0731L10.6829 16.3838C11.3801 17.1806 12.6197 17.1806 13.3169 16.3838L18.8388 10.0731C19.5459 9.2649 18.972 8 17.898 8H6.1018Z"
                      fill="#606060"
                    />
                  </svg>
                </div>
              </div>
            </th>
            <th class="border-y"></th>
          </tr>
        </thead>

        <tbody>
          <tr
            class="w-full border-y text-secondary text-sm bg-[#f8f8f8]"
            v-for="(document, index) in transactionHistoryData"
            :key="document + index"
          >
            <td
              v-for="(value, index) in Object.values(document)"
              :key="value + index"
              class="px-3 py-4 tracking-[0.17px]"
            >
              <span class="text-danger" v-if="index === 4"> {{ value }}</span>
              <span
                class="text-start px-3 py-1 rounded"
                :class="{
                  'bg-[#DFFFE4] text-success': value === 'Success',
                  'bg-[#F9E6D0] text-[#E08315]': value === 'Pending',
                  'bg-danger-light text-danger': value === 'Rejected',
                }"
                v-else
                >{{ value }}</span
              >
            </td>
            <td class="px-3 py-4 text-start">
              <span class="underline cursor-pointer">Detail View</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
