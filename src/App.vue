<template>
  <div id="app">
    <div
      class="flex justify-center py-5 bg-primary text-secondary text-2xl font-extrabold shadow-lg"
    >
      EMI Components
    </div>
    <router-view />
    <div class="mx-auto max-w-[1200px] flex gap-10 my-7">
      <router-link to="/header">
        <BaseButton variant="outline" type="secondary">
          <template #text>Header</template>
        </BaseButton>
      </router-link>
      <router-link to="/otp"
        ><BaseButton variant="outline" type="secondary">
          <template #text>OTP</template>
        </BaseButton></router-link
      >
      <router-link to="/sidebar"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Sidebar</template>
        </BaseButton></router-link
      >
      <router-link to="/stepper"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Stepper</template>
        </BaseButton></router-link
      >

      <BaseButton
        variant="outline"
        type="secondary"
        @click="handleSnackbarClick()"
      >
        <template #text>Snackbar</template>
      </BaseButton>
    </div>
  </div>

  <BaseSnackBar
    variant="outline"
    type="secondary"
    :showSnackbar="showSnackbar"
    @handleSnackbarHide="hideSnackbar"
    ><template #message>
      Status indicator message Content with more than one line and an action
      button
    </template>
    <template #button>
      <BaseButton variant="outline" type="secondary">
        <template #text>action</template>
      </BaseButton>
    </template>
  </BaseSnackBar>
  <!-- --------------------------Components-------------------------- -->
  <!-- <Cosent></Cosent> -->
  <!-- <CosentInitiate></CosentInitiate> -->
  <!-- <CosentConfimationLoading> </CosentConfimationLoading> -->
  <!-- <DocumentsForm> </DocumentsForm> -->
  <!-- <Dropdown></Dropdown> -->
  <!-- --------------------------Components-------------------------- -->
</template>

<script setup>
import { ref } from "vue";
import SideBar from "./components/sidebar.vue";
import clientSidebarData from "./data/clientSidebarData";
import complianceSidebarData from "./data/complianceSidebarData";
import Cosent from "./components/cosentConfirmation.vue";
import CosentInitiate from "./components/cosentInitiate.vue";
import CosentConfimationLoading from "./components/cosentConfirmationLoading.vue";
import DocumentsForm from "./components/documentsForm.vue";
import Dropdown from "./components/dropdown.vue";

import BaseSnackBar from "./components/snackbar.vue";
import BaseButton from "./components/baseButton.vue";

const showSnackbar = ref(false);
const handleSnackbarClick = () => {
  showSnackbar.value = true;
  setTimeout(() => {
    hideSnackbar();
  }, 5000);
};
const hideSnackbar = () => (showSnackbar.value = false);
</script>
