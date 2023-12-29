<template>
  <div id="app">
    <div
      class="flex justify-center py-5 bg-primary text-secondary text-2xl font-extrabold shadow-lg"
    >
      EMI Components
    </div>
    <div class="mx-auto max-w-[1200px] flex gap-6 my-7 px-10 flex-wrap">
      <router-link to="/header">
        <BaseButton variant="outline" type="secondary">
          <template #text>Header</template>
        </BaseButton>
      </router-link>
      <router-link to="/otp"
        ><BaseButton variant="outline" type="secondary">
          <template #text>OTP</template>
        </BaseButton>
      </router-link>
      <router-link to="/sidebar"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Sidebar</template>
        </BaseButton>
      </router-link>
      <router-link to="/stepper"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Stepper</template>
        </BaseButton>
      </router-link>
      <router-link to="/dropdown"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Dropdown</template>
        </BaseButton>
      </router-link>
      <router-link to="/livenessPermition"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Liveness Permition</template>
        </BaseButton>
      </router-link>
      <router-link to="/livenessLoading"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Liveness Loading</template>
        </BaseButton>
      </router-link>
      <router-link to="/requiredDocumentTable"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Document Form</template>
        </BaseButton>
      </router-link>
      <BaseButton
        variant="outline"
        type="secondary"
        @click="handleSnackbarClick()"
      >
        <template #text>Snackbar</template>
      </BaseButton>
      <router-link to="/livenessInitiate"
        ><BaseButton variant="outline" type="secondary">
          <template #text>Liveness Initiate</template>
        </BaseButton>
      </router-link>
    </div>
    <router-view />
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
</template>

<script setup>
import { ref } from "vue";
import BaseSnackBar from "./components/BaseSnackBar.vue";
import BaseButton from "./components/BaseButton.vue";

const showSnackbar = ref(false);
const handleSnackbarClick = () => {
  showSnackbar.value = true;
  setTimeout(() => {
    hideSnackbar();
  }, 5000);
};
const hideSnackbar = () => (showSnackbar.value = false);
</script>
