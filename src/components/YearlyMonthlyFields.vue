<template>
  <div
    class="border border-secondary p-4 max-w-[1200px] mx-auto my-0 flex gap-5"
  >
    <div class="w-full">
      <label for="monthly">Monthly:</label>
      <div class="border border-secondary">
        <input
          class="w-full h-14 px-2"
          type="number"
          v-model="monthly"
          @input="updateYearly"
          id="monthly"
        />
      </div>
    </div>

    <div class="w-full">
      <label for="yearly">Yearly:</label>
      <div class="border border-secondary">
        <input
          type="number"
          class="w-full h-14 px-2"
          v-model="yearly"
          @input="updateMonthly"
          id="yearly"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

const monthly = ref(0);
const yearly = ref(0);
const income = ref({ monthly: 0, yearly: 0 });
const updateYearly = () => {
  yearly.value = parseFloat(monthly.value) * 12 || 0;
};

const updateMonthly = () => {
  monthly.value = parseFloat(yearly.value) / 12 || 0;
};

// Watch for changes in monthly and yearly values to show two decimal places
watch([monthly, yearly], () => {
  monthly.value = parseFloat(monthly.value.toFixed(2));
  yearly.value = parseFloat(yearly.value.toFixed(2));
});
</script>
