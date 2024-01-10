<template>
  <div class="flex flex-col gap-1 w-full">
    <div
      id="dropdownSearchButton"
      @click.stop="preventClose"
      @click="toggleDropdown"
      class="inline-flex justify-between items-center px-2 py-1 text-[16px] font-normal ring-1 ring-secondary-light rounded-lg shadow-md border border-secondary-light"
      type="button"
    >
      <span class="text-secondary">Beneficiary Details</span>

      <svg
        class="w-[10px] h-[10px] ml-2.5"
        xmlns="http://www.w3.org/2000/svg"
        width="17"
        height="17"
        viewBox="0 0 17 17"
        fill="none"
      >
        <path
          d="M7.71016 13.107C8.10078 13.4977 8.73516 13.4977 9.12578 13.107L15.1258 7.10703C15.5164 6.71641 15.5164 6.08203 15.1258 5.69141C14.7352 5.30078 14.1008 5.30078 13.7102 5.69141L8.41641 10.9852L3.12266 5.69453C2.73203 5.30391 2.09766 5.30391 1.70703 5.69453C1.31641 6.08516 1.31641 6.71953 1.70703 7.11016L7.70703 13.1102L7.71016 13.107Z"
          fill="black"
        />
      </svg>
    </div>
    <!-- Dropdown menu -->
    <transition name="fade" mode="out-in" class="bg-white ring-1 ring-gray-400">
      <div
        v-if="showDropdown"
        id="dropdownSearch"
        class="z-10 p-1 shadow-md origin-top ring-secondary-light rounded-md border border-secondary-light"
      >
        <div class="px-1">
          <!-- Beneficiary Customer Detail -->
          <div class="p-4 my-1 border border-secondary-light rounded-[4px]">
            <div class="font-bold leading-6">
              {{ customerDetails.beneficiaryCustomerDetail.key }}
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="Customer First Name" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryCustomerDetail.first_name"
                />
              </div>
              <div class="basis-[50%]">
                <Heading Heading="Customer Last Name" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryCustomerDetail.last_name"
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="">
                <Heading Heading="Address" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryCustomerDetail.address"
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="City" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryCustomerDetail.city"
                />
              </div>
              <div class="basis-[50%]">
                <Heading Heading="Postal code" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryCustomerDetail.post_code"
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="State / Province / Region" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryCustomerDetail.state"
                />
              </div>
              <div class="basis-[50%]">
                <Heading Heading="Country" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryCustomerDetail.country"
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="Account IBAN" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryCustomerDetail.iban_number"
                />
              </div>
            </div>
          </div>
          <!-- Beneficiary Customer Detail End-->

          <!-- Beneficiary Bank-->
          <div class="p-4 my-1 border border-secondary-light rounded-[4px]">
            <div class="font-bold leading-6">
              {{ customerDetails.beneficiaryBankDetail.key }}
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="BIC / SWIFT Code" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryBankDetail.bic_code"
                />
              </div>
              <div class="basis-[50%]">
                <Heading Heading="Bank Name" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryBankDetail.bank_name"
                />
              </div>
              <div class="basis-[50%]">
                <Heading Heading="Bank Country" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryBankDetail.bank_country"
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="basis-[33%]">
                <Heading Heading="Bank Address" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryBankDetail.bank_address"
                />
              </div>
              <div class="basis-[33%]">
                <Heading Heading="Bank City" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryBankDetail.bank_city"
                />
              </div>
              <div class="basis-[33%]">
                <Heading Heading="Post code" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryBankDetail.post_code"
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="IBAN" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryBankDetail.iban_number"
                />
              </div>
              <div class="basis-[50%]">
                <span class="flex items-center gap-1">
                  <Heading Heading="ABA / RTN / Sort Code (Optional)" />
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.17187 14.167H10.8385V9.16699H9.17187V14.167ZM10.0052 7.50033C10.2413 7.50033 10.4392 7.42046 10.599 7.26074C10.7587 7.10102 10.8385 6.9031 10.8385 6.66699C10.8385 6.43088 10.7587 6.23296 10.599 6.07324C10.4392 5.91352 10.2413 5.83366 10.0052 5.83366C9.7691 5.83366 9.57118 5.91352 9.41146 6.07324C9.25174 6.23296 9.17187 6.43088 9.17187 6.66699C9.17187 6.9031 9.25174 7.10102 9.41146 7.26074C9.57118 7.42046 9.7691 7.50033 10.0052 7.50033ZM10.0052 18.3337C8.85243 18.3337 7.7691 18.1149 6.75521 17.6774C5.74132 17.2399 4.85937 16.6462 4.10937 15.8962C3.35937 15.1462 2.76562 14.2642 2.32812 13.2503C1.89062 12.2364 1.67188 11.1531 1.67188 10.0003C1.67188 8.84755 1.89062 7.76421 2.32812 6.75033C2.76562 5.73644 3.35937 4.85449 4.10937 4.10449C4.85937 3.35449 5.74132 2.76074 6.75521 2.32324C7.7691 1.88574 8.85243 1.66699 10.0052 1.66699C11.158 1.66699 12.2413 1.88574 13.2552 2.32324C14.2691 2.76074 15.151 3.35449 15.901 4.10449C16.651 4.85449 17.2448 5.73644 17.6823 6.75033C18.1198 7.76421 18.3385 8.84755 18.3385 10.0003C18.3385 11.1531 18.1198 12.2364 17.6823 13.2503C17.2448 14.2642 16.651 15.1462 15.901 15.8962C15.151 16.6462 14.2691 17.2399 13.2552 17.6774C12.2413 18.1149 11.158 18.3337 10.0052 18.3337ZM10.0052 16.667C11.8663 16.667 13.4427 16.0212 14.7344 14.7295C16.026 13.4378 16.6719 11.8614 16.6719 10.0003C16.6719 8.13921 16.026 6.56283 14.7344 5.27116C13.4427 3.97949 11.8663 3.33366 10.0052 3.33366C8.1441 3.33366 6.56771 3.97949 5.27604 5.27116C3.98437 6.56283 3.33854 8.13921 3.33854 10.0003C3.33854 11.8614 3.98437 13.4378 5.27604 14.7295C6.56771 16.0212 8.1441 16.667 10.0052 16.667Z"
                        fill="#5F5E5E"
                      /></svg
                  ></span>
                </span>
                <HeadingValue
                  :Value="customerDetails.beneficiaryBankDetail.sort_code"
                />
              </div>
            </div>
          </div>
          <!-- Beneficiary Bank End-->

          <!-- Beneficiary Intermediate Bank-->
          <div class="p-4 my-1 border border-secondary-light rounded-[4px]">
            <div class="font-bold leading-6">
              {{ customerDetails.beneficiaryIntermediaryBankDetail.key }}
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="BIC / SWIFT Code" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryIntermediaryBankDetail.bic_code
                  "
                />
              </div>
              <div class="basis-[50%]">
                <Heading Heading="Bank Name" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryIntermediaryBankDetail.bank_name
                  "
                />
              </div>
              <div class="basis-[50%]">
                <Heading Heading="Bank Country" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryIntermediaryBankDetail
                      .bank_country
                  "
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="basis-[33%]">
                <Heading Heading="Bank Address" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryIntermediaryBankDetail
                      .bank_address
                  "
                />
              </div>
              <div class="basis-[33%]">
                <Heading Heading="Bank City" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryIntermediaryBankDetail.bank_city
                  "
                />
              </div>
              <div class="basis-[33%]">
                <Heading Heading="Post code" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryIntermediaryBankDetail.post_code
                  "
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="IBAN" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryIntermediaryBankDetail
                      .iban_number
                  "
                />
              </div>
              <div class="basis-[50%]">
                <span class="flex items-center gap-1">
                  <Heading Heading="ABA / RTN / Sort Code (Optional)" />
                  <span
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M9.17187 14.167H10.8385V9.16699H9.17187V14.167ZM10.0052 7.50033C10.2413 7.50033 10.4392 7.42046 10.599 7.26074C10.7587 7.10102 10.8385 6.9031 10.8385 6.66699C10.8385 6.43088 10.7587 6.23296 10.599 6.07324C10.4392 5.91352 10.2413 5.83366 10.0052 5.83366C9.7691 5.83366 9.57118 5.91352 9.41146 6.07324C9.25174 6.23296 9.17187 6.43088 9.17187 6.66699C9.17187 6.9031 9.25174 7.10102 9.41146 7.26074C9.57118 7.42046 9.7691 7.50033 10.0052 7.50033ZM10.0052 18.3337C8.85243 18.3337 7.7691 18.1149 6.75521 17.6774C5.74132 17.2399 4.85937 16.6462 4.10937 15.8962C3.35937 15.1462 2.76562 14.2642 2.32812 13.2503C1.89062 12.2364 1.67188 11.1531 1.67188 10.0003C1.67188 8.84755 1.89062 7.76421 2.32812 6.75033C2.76562 5.73644 3.35937 4.85449 4.10937 4.10449C4.85937 3.35449 5.74132 2.76074 6.75521 2.32324C7.7691 1.88574 8.85243 1.66699 10.0052 1.66699C11.158 1.66699 12.2413 1.88574 13.2552 2.32324C14.2691 2.76074 15.151 3.35449 15.901 4.10449C16.651 4.85449 17.2448 5.73644 17.6823 6.75033C18.1198 7.76421 18.3385 8.84755 18.3385 10.0003C18.3385 11.1531 18.1198 12.2364 17.6823 13.2503C17.2448 14.2642 16.651 15.1462 15.901 15.8962C15.151 16.6462 14.2691 17.2399 13.2552 17.6774C12.2413 18.1149 11.158 18.3337 10.0052 18.3337ZM10.0052 16.667C11.8663 16.667 13.4427 16.0212 14.7344 14.7295C16.026 13.4378 16.6719 11.8614 16.6719 10.0003C16.6719 8.13921 16.026 6.56283 14.7344 5.27116C13.4427 3.97949 11.8663 3.33366 10.0052 3.33366C8.1441 3.33366 6.56771 3.97949 5.27604 5.27116C3.98437 6.56283 3.33854 8.13921 3.33854 10.0003C3.33854 11.8614 3.98437 13.4378 5.27604 14.7295C6.56771 16.0212 8.1441 16.667 10.0052 16.667Z"
                        fill="#5F5E5E"
                      /></svg
                  ></span>
                </span>
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryIntermediaryBankDetail.sort_code
                  "
                />
              </div>
            </div>
          </div>
          <!-- Beneficiary Intermediate Bank End-->

          <!-- Beneficiary Transfer Details -->
          <div class="p-4 my-1 border border-secondary-light rounded-[4px]">
            <div class="font-bold leading-6">
              {{ customerDetails.beneficiaryTransferDetails.key }}
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="Amount to Transfer" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryTransferDetails
                      .ammount_to_transfer
                  "
                />
              </div>
              <div class="basis-[50%]">
                <Heading Heading="Currency" />
                <HeadingValue
                  :Value="customerDetails.beneficiaryTransferDetails.currency"
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div
                class="text-[12px] font-medium leading-4 text-secondary-semi-dark"
              >
                <Heading Heading="Description" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryTransferDetails.description
                  "
                />
              </div>
            </div>
            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="Last Execution Date" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryTransferDetails
                      .lase_execution_date
                  "
                />
              </div>
            </div>

            <div class="flex pt-5">
              <div class="basis-[50%]">
                <Heading Heading="Reference Message" />
                <HeadingValue
                  :Value="
                    customerDetails.beneficiaryTransferDetails.reference_message
                  "
                />
              </div>
            </div>
            <div class="flex pt-5">
              <span
                class="text-[14px] font-medium leading-5 text-secondary-semi-dark"
              >
                Supporting Documents
              </span>
            </div>
          </div>
          <!-- Beneficiary Transfer Details-->
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, watch } from "vue";
import Heading from "./TransferDetailHeading.vue";
import HeadingValue from "./TransferDetailHeadingValue.vue";
const { customerDetails } = defineProps(["customerDetails"]);
console.log(customerDetails);
const showDropdown = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
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
