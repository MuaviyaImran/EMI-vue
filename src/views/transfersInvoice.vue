<template>
  <div class="flex justify-center mt-10">
    <TransfersInvoice :transfersInvoiceData="transfersInvoiceData" />
  </div>
</template>
<script setup>
import TransfersInvoice from "../components/TransfersInvoice.vue";
import transfersInvoiceData from "../data/transfersInvoiceData";
</script>
