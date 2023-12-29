<template>
  <BaseSideBar :sidebarLinks="clientSidebarData"/>
  <BaseSideBar :sidebarLinks="complianceSidebarData"/>
</template>
<script setup>
import BaseSideBar from "../components/BSB.vue";
import clientSidebarData from "../data/clientSidebarData";
import complianceSidebarData from "../data/complianceSidebarData";
</script>
