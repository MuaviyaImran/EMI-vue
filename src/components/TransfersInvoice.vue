<template>
  <div class="w-[1200px] mx-auto my-0 text-secondary font-medium">
    <!-- download Button -->
    <div
      class="flex justify-end my-2"
      href="https://stackoverflow.com/questions/69040140/get-current-web-pages-innerhtml-and-download-it-as-html-file-using-javascriptv"
    >
      <div
        @click="downloadPDF"
        class="border border-secondary-light px-4 py-2 rounded-md flex gap-1 items-center cursor-pointer"
      >
        <span class="text-sm underline"> Download Invoice as PDF </span>
        <img src="/icons/save-icon.svg" alt="Save PDF Icon" />
      </div>
    </div>
    <!-- Invoice -->

    <div id="invoice" class="border border-secondary-light p-4 rounded-2xl">
      <div class="">
        <span class="text-xs font-normal block mb-2"
          >Tansfer No : {{ transfersInvoiceData.transferID }}</span
        >
        <span
          class="px-3 py-1 text-sm rounded-sm text-white"
          :class="{
            'bg-success': transfersInvoiceData.status,
            'bg-danger': !transfersInvoiceData.status,
          }"
          >{{ transfersInvoiceData.status ? "Approved" : "Rejected" }}</span
        >
      </div>
      <div class="flex justify-between mb-4 mt-2">
        <div class="flex flex-col mt-4 gap-3">
          <div class="flex gap-2">
            <img src="/icons/amount-icon.svg" alt="Amount Icon" />
            <span class="text-base font-normal leading-6">Amount</span>
          </div>
          <span class="text-3xl font-semibold leading-10">
            {{ transfersInvoiceData.amount }} EUR</span
          >
          <div class="text-base">
            <span class="font-normal">Zolvat Transfer Fee </span>
            <span class="text-lg font-bold"> 5.00 EUR</span>
          </div>
        </div>
        <div class="flex flex-col gap-3 mt-3 justify-end">
          <div class="flex border border-secondary-light rounded-md">
            <span
              class="border-r border-secondary-light w-32 ml-2 py-2 text-sm font-normal"
              >Requested Date</span
            >
            <span class="flex justify-center items-center w-32 text-base">
              {{ transfersInvoiceData.requestedDate }}</span
            >
          </div>
          <div class="flex border border-secondary-light rounded-md">
            <span
              class="border-r border-secondary-light w-32 ml-2 py-2 text-sm font-normal"
              >Exection Date</span
            >
            <span class="flex justify-center items-center w-32 text-base">
              {{ transfersInvoiceData.executionDate }}</span
            >
          </div>
        </div>
      </div>
      <div class="border-secondary-light my-5 border-t h-[1px]" />
      <!-- Tables -->
      <!-- 1st Row Tables -->
      <div class="flex gap-7">
        <div class="basis-[50%]">
          <span class="text-base font-semibold">Payer Details</span>
          <div class="border border-secondary-light rounded-xl mt-3">
            <!-- ROW # 1 -->
            <div class="flex">
              <div class="border-r border-b border-secondary-light basis-[50%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-3 px-5"
                >
                  Company Name
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.payerDetails.companyName }}
                </div>
              </div>
              <div class="basis-[50%] border-b border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  IBAN
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.payerDetails.IBAN }}
                </div>
              </div>
            </div>
            <!-- ROW # 2 -->
            <div class="flex">
              <div class="border-r border-b border-secondary-light basis-[50%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Country
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.payerDetails.country }}
                </div>
              </div>
              <div class="basis-[50%] border-b border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Address
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.payerDetails.address }}
                </div>
              </div>
            </div>
            <!-- ROW # 3 -->
            <div class="flex">
              <div class="border-r border-secondary-light basis-[30%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  City
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.payerDetails.city }}
                </div>
              </div>
              <div class="basis-[30%] border-r border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Post Code
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.payerDetails.postCode }}
                </div>
              </div>
              <div class="basis-[40%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  State / Province / Region
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.payerDetails.state }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-[50%]">
          <span class="text-base font-semibold">Documents Uploaded</span>
          <div
            class="border border-secondary-light rounded-xl mt-3 px-4 py-[10px] max-h-[240px]"
            :class="{
              ' overflow-y-auto custom-scrollbar':
                transfersInvoiceData?.documentUploaded?.length > 5,
            }"
          >
            <div
              class="flex justify-between items-center border border-secondary-light py-[6px] px-2 rounded-md cursor-pointer"
              v-for="(document, index) in transfersInvoiceData.documentUploaded"
              :key="document + index"
              :class="{
                'mb-2':
                  index !== transfersInvoiceData?.documentUploaded?.length - 1,
              }"
            >
              <span class="flex gap-2 items-center">
                <img src="/icons/save-icon.svg" alt="Save Document" />
                <span class="text-sm font-normal">
                  {{ document }}
                </span>
              </span>
              <img src="/icons/download-icon.svg" alt="Download Icon" />
            </div>
          </div>
        </div>
      </div>
      <div class="border-secondary-light my-5 border-t h-[1px]" />

      <!-- 2nd Row Tables -->
      <div class="flex gap-7 mt-5">
        <div class="basis-[50%]">
          <span class="text-base font-semibold">Beneficiary Details</span>
          <div class="border border-secondary-light rounded-xl mt-3">
            <!-- ROW # 1 -->
            <div class="flex">
              <div class="border-r border-b border-secondary-light basis-[30%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Customer First Name
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.beneficiaryDetails.firstName }}
                </div>
              </div>
              <div class="basis-[30%] border-b border-r border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Customer First Name
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.beneficiaryDetails.lastName }}
                </div>
              </div>
              <div class="basis-[40%] border-b border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  IBAN
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.beneficiaryDetails.IBAN }}
                </div>
              </div>
            </div>

            <!-- ROW # 2 -->
            <div class="flex">
              <div class="border-r border-b border-secondary-light basis-[50%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Address
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.beneficiaryDetails.address }}
                </div>
              </div>
              <div class="basis-[50%] border-b border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Address
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.beneficiaryDetails.country }}
                </div>
              </div>
            </div>

            <!-- ROW # 3 -->
            <div class="flex">
              <div class="border-r border-secondary-light basis-[30%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  City
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.beneficiaryDetails.city }}
                </div>
              </div>
              <div class="basis-[30%] border-r border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Post Code
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.beneficiaryDetails.postCode }}
                </div>
              </div>
              <div class="basis-[40%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  State / Province / Region
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.beneficiaryDetails.state }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-[50%]">
          <span class="text-base font-semibold">Bank Details</span>
          <div class="border border-secondary-light rounded-xl mt-3">
            <!-- ROW # 1 -->
            <div class="flex">
              <div class="border-r border-b border-secondary-light basis-[30%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  BIC / SWIFT Code
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.bankDetails.bic }}
                </div>
              </div>
              <div class="basis-[30%] border-b border-r border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Bank Name
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.bankDetails.bankName }}
                </div>
              </div>
              <div class="basis-[40%] border-b border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  ABA / RTN / SORT Code
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.bankDetails.sortCode }}
                </div>
              </div>
            </div>

            <!-- ROW # 2 -->
            <div class="flex">
              <div class="border-r border-b border-secondary-light basis-[50%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Bank Address
                </div>
                <div class="text-sm font-medium px-5 tracking-wide">
                  {{ transfersInvoiceData.bankDetails.address }}
                </div>
              </div>
              <div class="basis-[50%] border-b border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Bank Country
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.bankDetails.country }}
                </div>
              </div>
            </div>

            <!-- ROW # 3 -->
            <div class="flex">
              <div class="border-r border-secondary-light basis-[50%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Bank City
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.bankDetails.city }}
                </div>
              </div>
              <div class="basis-[50%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Post Code
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.bankDetails.postCode }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 3rd Row Tables -->
      <div class="flex gap-7 mt-5">
        <div class="basis-[50%]">
          <span class="text-base font-semibold">Intermediate Bank Details</span>
          <div class="border border-secondary-light rounded-xl mt-3">
            <!-- ROW # 1 -->
            <div class="flex">
              <div class="border-r border-b border-secondary-light basis-[30%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  BIC / SWIFT Code
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.intermediateBankDetails.bic }}
                </div>
              </div>
              <div class="basis-[30%] border-b border-r border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Bank Name
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.intermediateBankDetails.bankName }}
                </div>
              </div>
              <div class="basis-[40%] border-b border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  IBAN
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.intermediateBankDetails.IBAN }}
                </div>
              </div>
            </div>
            <!-- ROW # 2 -->
            <div class="flex">
              <div class="border-r border-b border-secondary-light basis-[50%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  ABA / RTN / SORt Code
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.intermediateBankDetails.sortCode }}
                </div>
              </div>
              <div class="basis-[50%] border-b border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Bank Address
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.intermediateBankDetails.address }}
                </div>
              </div>
            </div>

            <!-- ROW # 3 -->
            <div class="flex">
              <div class="border-r border-secondary-light basis-[30%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Bank City
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.intermediateBankDetails.city }}
                </div>
              </div>
              <div class="basis-[30%] border-r border-secondary-light">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Post Code
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.intermediateBankDetails.postCode }}
                </div>
              </div>
              <div class="basis-[40%]">
                <div
                  class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
                >
                  Bank Country
                </div>
                <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                  {{ transfersInvoiceData.intermediateBankDetails.country }}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="basis-[50%] mt-8 flex flex-col gap-3">
          <div class="border border-secondary-light rounded-xl mt-1">
            <div class="flex flex-col">
              <div
                class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
              >
                Reference Message
              </div>
              <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                {{ transfersInvoiceData.invoiceID }}
              </div>
            </div>
          </div>
          <div class="border border-secondary-light rounded-xl mt-1">
            <div class="flex flex-col">
              <div
                class="text-xs font-normal text-secondary-semi-dark py-2 px-5"
              >
                Description
              </div>
              <div class="text-sm font-medium px-5 pb-5 pt-1 tracking-wide">
                {{ transfersInvoiceData.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import html2pdf from "html2pdf.js";
const { transfersInvoiceData } = defineProps(["transfersInvoiceData"]);
const invoice = ref();
const downloadPDF = () => {
  const element = document.getElementById("invoice");

  html2pdf(element).from(element).save("Taddddaa.pdf");
};
</script>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
  border-radius: 20px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px transparent;
  border-radius: 20px;
  margin: 15px 0 !important;
  padding-right: 15px !important;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: darkgrey;
}
</style>
