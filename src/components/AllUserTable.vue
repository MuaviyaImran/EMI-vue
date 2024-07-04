<script setup lang="ts">
import { ref } from "vue";
import type { ClickRowArgument } from "vue3-easy-data-table";

const loading = ref(true);
const allUsersHeader = [
  { text: "Name", value: "name", sortable: true },
  { text: "Email", value: "email", sortable: true },
  { text: "Role", value: "roles", sortable: true },
  { text: "Duties", value: "duties", sortable: true },
  { text: "Active", value: "active", sortable: true },
  { text: "Delete", value: "delete", sortable: true },
];
const allUserData = ref([
  {
    name: "John Doe",
    email: "akyriakou@zolvat.com",
    roles: ["Admin", "Member of the Board"],
    duties: [
      "Updated Onboarding Corporate Accounts requests",
      "New Onboarding Corporate Accounts requests",
      "Duty 3",
    ],
    active: true,
  },
  {
    name: "Jane Smith",
    email: "jsmith@zolvat.com",
    roles: ["User", "Member of the Board", "Senior Compliance Officer"],
    duties: ["Review Financial Documents", "Prepare Meeting Agendas", "Duty 3"],
    active: true,
  },
  {
    name: "Michael Brown",
    email: "mbrown@zolvat.com",
    roles: ["Admin", "Finance"],
    duties: ["Update Financial Records", "Manage Budget Requests", "Duty 3"],
    active: false,
  },
  {
    name: "Emily Johnson",
    email: "ejohnson@zolvat.com",
    roles: ["User", "HR"],
    duties: ["Conduct Interviews", "Employee Onboarding", "Duty 3"],
    active: true,
  },
  {
    name: "David Wilson",
    email: "dwilson@zolvat.com",
    roles: ["Admin", "IT Support"],
    duties: [
      "Maintain IT Infrastructure",
      "Support Employee IT Requests",
      "Duty 3",
    ],
    active: false,
  },
  {
    name: "Olivia Martinez",
    email: "omartinez@zolvat.com",
    roles: ["User", "Marketing"],
    duties: [
      "Develop Marketing Strategies",
      "Manage Social Media Accounts",
      "Duty 3",
    ],
    active: true,
  },
  {
    name: "William Anderson",
    email: "wanderson@zolvat.com",
    roles: ["Admin", "Operations"],
    duties: [
      "Oversee Operational Procedures",
      "Implement Efficiency Improvements",
      "Duty 3",
    ],
    active: true,
  },
  {
    name: "Sophia Thomas",
    email: "sthomas@zolvat.com",
    roles: ["User", "Sales"],
    duties: ["Generate Sales Leads", "Close Sales Deals", "Duty 3"],
    active: false,
  },
  {
    name: "James Taylor",
    email: "jtaylor@zolvat.com",
    roles: ["Admin", "Customer Support"],
    duties: [
      "Resolve Customer Issues",
      "Provide Product Information",
      "Duty 3",
    ],
    active: true,
  },
  {
    name: "Isabella Jackson",
    email: "ijackson@zolvat.com",
    roles: ["User", "Product Development"],
    duties: ["Design New Products", "Conduct Market Research", "Duty 3"],
    active: true,
  },
  {
    name: "Ethan Lee",
    email: "elee@zolvat.com",
    roles: ["Admin", "Quality Assurance"],
    duties: ["Ensure Product Quality", "Develop QA Processes", "Duty 3"],
    active: false,
  },
]);
const handleRowClick = (account: ClickRowArgument) => {
  //   if (account.ticket_details.account_type === 'PERSONAL') {
  //     router.push({
  //       name: `employee-review-personal-account-request`,
  //       params: { accountId: account.request_id }
  //     })
  //   } else {
  //     router.push({
  //       name: `employee-review-corporate-account-request`,
  //       params: { accountId: account.request_id }
  //     })
  //   }
};
const handleActive = (item) => {
  console.log("i am here", item.active);
  item.active = !item.active;
};
</script>
<template>
  <EasyDataTable
    :headers="allUsersHeader"
    alternating
    :items="allUserData"
    @click-row="handleRowClick"
    table-class-name="customize-table"
  >
    <template #empty-message>No Record Found </template>

    <template #item-delete="item">
      <div class="border w-fit p-2 rounded-lg cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M5.00033 15.8333C5.00033 16.75 5.75033 17.5 6.66699 17.5H13.3337C14.2503 17.5 15.0003 16.75 15.0003 15.8333V7.5C15.0003 6.58333 14.2503 5.83333 13.3337 5.83333H6.66699C5.75033 5.83333 5.00033 6.58333 5.00033 7.5V15.8333ZM7.50033 7.5H12.5003C12.9587 7.5 13.3337 7.875 13.3337 8.33333V15C13.3337 15.4583 12.9587 15.8333 12.5003 15.8333H7.50033C7.04199 15.8333 6.66699 15.4583 6.66699 15V8.33333C6.66699 7.875 7.04199 7.5 7.50033 7.5ZM12.917 3.33333L12.3253 2.74167C12.1753 2.59167 11.9587 2.5 11.742 2.5H8.25866C8.04199 2.5 7.82533 2.59167 7.67533 2.74167L7.08366 3.33333H5.00033C4.54199 3.33333 4.16699 3.70833 4.16699 4.16667C4.16699 4.625 4.54199 5 5.00033 5H15.0003C15.4587 5 15.8337 4.625 15.8337 4.16667C15.8337 3.70833 15.4587 3.33333 15.0003 3.33333H12.917Z"
            fill="#333333"
          />
        </svg>
      </div>
    </template>
    <template #item-roles="{ roles }">
      <div class="flex justify-between items-center w-64 py-1">
        <div class="max-w-[200px] wrap font-medium">
          <div
            class="flex flex-col"
            v-for="(role, index) in roles"
            :key="index"
          >
            {{ role }}
          </div>
        </div>
        <svg
          data-v-2cab337e=""
          class="w-[10px] h-[10px] ml-2.5"
          xmlns="http://www.w3.org/2000/svg"
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
        >
          <path
            data-v-2cab337e=""
            d="M7.71016 13.107C8.10078 13.4977 8.73516 13.4977 9.12578 13.107L15.1258 7.10703C15.5164 6.71641 15.5164 6.08203 15.1258 5.69141C14.7352 5.30078 14.1008 5.30078 13.7102 5.69141L8.41641 10.9852L3.12266 5.69453C2.73203 5.30391 2.09766 5.30391 1.70703 5.69453C1.31641 6.08516 1.31641 6.71953 1.70703 7.11016L7.70703 13.1102L7.71016 13.107Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </template>
    <template #item-duties="{ duties }">
      <div class="flex justify-between items-center w-full py-1">
        <div class="font-medium">
          <div
            class="flex flex-col"
            v-for="(role, index) in duties"
            :key="index"
          >
            <div class="flex gap-2">
              <span>{{ index + 1 }}</span>
              <span>
                {{ role }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template #item-active="item">
      <div
        @click.stop="handleActive(item)"
        class="flex items-center w-12 rounded-full cursor-pointer"
        :class="
          item.active
            ? 'bg-success justify-end'
            : 'bg-secondary/20 justify-start'
        "
      >
        <div class="h-4 m-1.5 w-4 bg-white rounded-full"></div>
      </div>
      <pre>{{ item.active }}</pre>
    </template>
  </EasyDataTable>
</template>

<style scoped>
.customize-table {
  --easy-table-footer-padding: 25px 20px;
  --easy-table-footer-font-size: 14px;
  --easy-table-header-background-color: #f1f1f1;
  --easy-table-body-row-hover-background-color: #f6f6f6;
}
.pagination__rows-per-page {
  color: #5f5e5e;
}
.vue3-easy-data-table__header th.sortable.none .sortType-icon[data-v-32683533] {
  margin-left: 6px;
}
.vue3-easy-data-table__main {
  min-height: 900px !important;
}
.easy-data-table__rows-selector .rows-input__wrapper[data-v-4ca5de3a] {
  border-bottom: none;
  display: flex;
  gap: 5px;
}
.operation-wrapper .operation-icon {
  width: 20px;
  cursor: pointer;
}
</style>
