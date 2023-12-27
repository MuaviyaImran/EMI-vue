<template>
  <SideBar :sidebarLinks="clientSidebarData"></SideBar>
  <SideBar :sidebarLinks="complianceSidebarData"></SideBar>
</template>
<script setup>
import SideBar from "../components/sidebar.vue";
import clientSidebarData from "../data/clientSidebarData";
import complianceSidebarData from "../data/complianceSidebarData";
</script>
