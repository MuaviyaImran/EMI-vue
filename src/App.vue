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
    <RouterView />
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
  <BaseButton @click="handleClick" variant="outline" type="secondary">
    <template #text>Send Email</template>
  </BaseButton>
</template>

<script setup>
import { ref } from "vue";
import { RouterView } from "vue-router";
import BaseSnackBar from "./components/BaseSnackBar.vue";
import BaseButton from "./components/BaseButton.vue";

import { useRender } from "vue-email";
import SendEmail from "./components/SendEmail.vue";
console.log(SendEmail);
const handleClick = async () => {
  // const template = await useRender(SendEmail);
  const template = `<p style="color:red;">I am red</p>`;
  console.log(template);
  await fetch("http://192.168.0.241:3001/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      template,
    }),
  }).then(async (response) => {
    const data = await response.json();
    console.log("res", response);
    console.log("data", data);
  });
};

const showSnackbar = ref(false);
const handleSnackbarClick = () => {
  showSnackbar.value = true;
  setTimeout(() => {
    hideSnackbar();
  }, 5000);
};
const hideSnackbar = () => (showSnackbar.value = false);
</script>
