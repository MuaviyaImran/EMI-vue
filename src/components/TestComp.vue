<script setup lang="ts">
import { ref, watch } from "vue";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
const getDateFromDaysAgo = (days: number): string => {
  const today = new Date();
  const pastDate = new Date(today);
  pastDate.setDate(today.getDate() - days);
  return pastDate.toISOString().split("T")[0];
};
const ticketIds = [
  {
    id: "1",
    label: "Individual Account - IND",
    value: "IND",
  },
  {
    id: "2",
    label: "Minor Account - MNR ",
    value: "MNR",
  },
  {
    id: "3",
    label: "Joint Account - JNT ",
    value: "JNT",
  },
  {
    id: "4",
    label: "Corporate Account - CORP ",
    value: "CORP",
  },
];

const livenessCheck = [
  {
    id: "1",
    label: "verified",
    value: true,
  },
  {
    id: "2",
    label: "not verified",
    value: false,
  },
];
const statuses = [
  {
    id: "1",
    label: "pending",
    value: "pending",
  },
  {
    id: "2",
    label: "awaiting",
    value: "awaiting",
  },
  {
    id: "3",
    label: "accepted",
    value: "accepted",
  },
  {
    id: "4",
    label: "rejected",
    value: "rejected",
  },
];

const dateRange = [
  {
    id: "1",
    label: "Last 7 Days",
    value: 7,
  },
  {
    id: "2",
    label: "Last 30 Days",
    value: 30,
  },
  {
    id: "3",
    label: "Last 60 Days",
    value: 60,
  },
  {
    id: "4",
    label: "Last 90 Days",
    value: 90,
  },
  {
    id: "5",
    label: "Last 6 month",
    value: 182,
  },
  {
    id: "6",
    label: "Last year",
    value: 365,
  },
];

const riskScore = [
  {
    id: "1",
    label: "Low (0 to 1000)",
    value: "low",
  },
  {
    id: "2",
    label: "med (1001 to 3000)",
    value: "med",
  },
  {
    id: "3",
    label: "high (3001 to 5000)",
    value: "high",
  },
];

const scoreRanges = {
  low: { from: "0", to: "1000" },
  med: { from: "1001", to: "3000" },
  high: { from: "3001", to: "5000" },
};

const filter = ref({
  ticketId: [],
  livenessCheck: [],
  dateRange: { from: "", to: "" },
  riskScore: { from: "", to: "" },
  status: [],
});
const showCalander = ref(false);

const options = ref({
  footer: {
    apply: "Save",
    cancel: "Cancel",
  },
});
const formatter = ref({
  date: "YYYY-MM-DD",
  month: "MMM",
});
watch(
  filter.value.dateRange,
  (newValue, oldValue) => {
    if (newValue !== oldValue && showCalander.value) {
      handleShowCalander();
    }
  },
  { deep: true }
);
const handleShowCalander = () => {
  showCalander.value = !showCalander.value;
};
const saveFilter = () => {
  console.log(filter.value);
};

const handleRiskScore = (score: keyof typeof scoreRanges) => {
  const { from, to } = scoreRanges[score];
  filter.value.riskScore.from = from;
  filter.value.riskScore.to = to;
};

const handleDateRange = (days: number) => {
  const fromDate = getDateFromDaysAgo(days);
  const toDate = new Date().toISOString().split("T")[0];
  filter.value.dateRange.from = fromDate;
  filter.value.dateRange.to = toDate;
};
</script>

<template>
  <pre>{{ filter }}</pre>
  <div class="relative z-10 w-full rounded bg-white px-3 shadow-2xl">
    <div class="flex items-center justify-between gap-1 py-3">
      <h3 class="text-lg font-medium text-black">Filters</h3>
      <span class="text-xs italic text-secondary-semi-dark"
        >*Filters will auto-apply, you can go back and see results by simply
        clicking ’Filters’ option again.
      </span>
    </div>
    <div class="border-y">
      <div class="flex justify-between">
        <div class="flex flex-col gap-1 p-2">
          <h4 class="mb-4 text-sm font-semibold text-secondary">Ticket ID</h4>
          <label
            v-for="ticket in ticketIds"
            :for="ticket.id"
            class="mb-4 flex w-full items-center gap-x-2 text-sm text-secondary"
            :key="ticket.id"
          >
            {{ ticket.label }}
            <input
              v-model="filter.ticketId"
              type="checkbox"
              :id="ticket.id"
              :value="ticket.value"
              :name="ticket.value"
              class="border-1 -order-1 text-primary focus:ring-0"
            />
          </label>
        </div>
        <div class="flex flex-col gap-1 p-2">
          <h4 class="mb-4 text-sm font-semibold text-secondary">
            Liveness Check
          </h4>
          <label
            v-for="status in livenessCheck"
            class="mb-4 flex w-full items-center gap-2 text-sm capitalize text-secondary"
            :key="status.id"
          >
            {{ status.label }}
            <input
              v-model="filter.livenessCheck"
              type="checkbox"
              :value="status.value"
              :name="status.label"
              class="border-1 -order-1 text-primary focus:ring-0"
            />
          </label>
        </div>

        <div class="flex flex-col gap-1 p-2">
          <h4 class="mb-4 text-sm font-semibold text-secondary">Date</h4>
          <div class="bg-white">
            <div class="relative flex gap-2">
              <label for="date-from" class="flex items-center gap-2 text-xs">
                From
                <input
                  type="text"
                  :value="filter.dateRange.from"
                  @click="handleShowCalander"
                  id="date-from"
                  placeholder="dd/mm/yyyy"
                  class="max-w-[90px] rounded border border-secondary-light px-[10px] py-1 text-[10px] font-normal outline-none placeholder:text-[10px] placeholder:font-normal"
                />
              </label>
              <label for="date-to" class="flex items-center gap-2">
                <span class="text-xs font-normal leading-[30px]">To:</span>
                <input
                  id="date-to"
                  type="text"
                  @click="handleShowCalander"
                  :value="filter.dateRange.to"
                  placeholder="dd/mm/yyyy"
                  class="max-w-[90px] rounded border border-secondary-light px-[10px] py-1 text-[10px] font-normal outline-none placeholder:text-[10px] placeholder:font-normal"
                />
              </label>
            </div>
            <div v-if="showCalander" class="absolute z-30">
              <vue-tailwind-datepicker
                v-model="filter.dateRange"
                as-single
                use-range
                no-input=""
                separator=" to "
                :auto-apply="false"
                :formatter="formatter"
                :options="options"
                :shortcuts="false"
              />
            </div>
            <!-- <div class="absolute z-10"> -->
            <!-- <VueDatePicker v-model="dateFromTo" range :enable-time-picker="false" /> -->
            <!-- </div> -->
          </div>
          <div class="flex max-w-xs flex-wrap gap-1.5 px-1 py-2">
            <BasePill
              v-for="range in dateRange"
              :key="range.id"
              type="secondary"
              class="cursor-pointer"
              rounded
              @click="() => handleDateRange(range.value)"
            >
              {{ range.label }}
            </BasePill>
          </div>
        </div>

        <div class="flex flex-col gap-1 p-2">
          <span class="mb-4 text-sm font-semibold text-secondary">
            Risk Score
          </span>
          <div class="flex gap-2">
            <label for="risk-from" class="flex items-center gap-2 text-xs">
              From:
              <input
                v-model="filter.riskScore.from"
                id="risk-from"
                type="text"
                placeholder="Starting Value"
                class="rounded border border-secondary-light px-2 py-2.5 text-xxs outline-none"
              />
            </label>
            <label for="risk-to" class="flex items-center gap-2 text-xs">
              To:
              <input
                v-model="filter.riskScore.to"
                id="risk-to"
                type="text"
                placeholder="Starting Value"
                class="rounded border border-secondary-light px-2 py-2.5 text-xxs outline-none"
              />
            </label>
          </div>
          <div class="flex max-w-xs flex-wrap gap-1.5 px-1 py-2">
            <BasePill
              v-for="score in riskScore"
              :key="score.id"
              type="secondary"
              class="cursor-pointer"
              rounded
              @click="() => handleRiskScore(score.value)"
            >
              {{ score.label }}
            </BasePill>
          </div>
        </div>

        <div class="mr-6 flex flex-col gap-1 p-2">
          <span class="mb-4 text-sm font-semibold text-secondary">Status</span>
          <label
            v-for="status in statuses"
            class="mb-4 flex w-full items-center gap-2 text-sm capitalize text-secondary"
            :key="status.id"
          >
            {{ status.label }}
            <input
              v-model="filter.status"
              type="checkbox"
              :id="status.id"
              :value="status.value"
              :name="status.label"
              class="border-1 -order-1 text-primary focus:ring-0"
            />
          </label>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2 border-b py-3">
      <span class="text-lg font-medium text-black">Saved Filters</span>
      <div class="flex flex-wrap gap-[4px] px-1 py-2">
        <BasePill type="secondary" rounded>
          Verified Requests
          <template #icon>
            <img
              src="../assets/close.svg"
              alt="close"
              class="cursor-pointer px-0.5"
            />
          </template>
        </BasePill>
      </div>
    </div>
    <div class="flex items-center justify-between">
      <label for="save_filter" class="flex w-full items-center gap-2">
        Save search with filter
        <input
          type="checkbox"
          id="save_filter"
          name="save_filter"
          class="border-1 -order-1 text-primary focus:ring-0"
        />
      </label>
      <div class="flex w-full items-center justify-end py-4">
        <BaseButton type="ghost">
          <template #text> Clear Filter </template>
        </BaseButton>
        <BaseButton @click="saveFilter" type="primary" variant="filled">
          <template #text> save Filter </template>
        </BaseButton>
      </div>
    </div>
  </div>
</template>
