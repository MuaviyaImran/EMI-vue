<template>
  <div class="flex justify-center mt-10 max-w-[1000px] mx-auto">
    <CustomerDetailDropdown :customerDetails="mainBeneficiaryObject" />
  </div>
</template>
<script setup>
import CustomerDetailDropdown from "../components/CustomerDetailDropdown.vue";
const mainBeneficiaryObject = {
  beneficiaryCustomerDetail: {
    key: "Beneficiary Customer",
    first_name: "John",
    last_name: "Doe",
    address: "Address Somewhere 123 ST ",
    city: "NJ",
    post_code: 5172,
    state: "That Place",
    country: "Canada",
    iban_number: "BK9876543217864039",
  },

  beneficiaryBankDetail: {
    key: "Beneficiary Bank",
    bic_code: 12345,
    bank_name: "USA",
    bank_country: "CY",
    bank_address: "California",
    bank_city: "USA",
    post_code: 91608,
    sort_code: 1005,
    iban_number: "BK9876543217864039",
  },
  beneficiaryIntermediaryBankDetail: {
    key: "Intermediary Bank",
    bic_code: 12345,
    bank_name: "USA",
    bank_country: "CY",
    bank_address: "California",
    bank_city: "USA",
    post_code: 91608,
    sort_code: 100,
    iban_number: "9B87654",
  },
  beneficiaryTransferDetails: {
    key: "Transfer Details",
    ammount_to_transfer: 2500,
    currency: "EURO",
    description:
      "This is a placeholder text designed to demonstrate how the actual content will fill the designated container. As data or information is integrated, it will seamlessly occupy this space, providing a comprehensive description tailored to the context and purpose of the container.",
    lase_execution_date: "05/12/2023",
    reference_message: "GHUOP1235",
  },
};
</script>
