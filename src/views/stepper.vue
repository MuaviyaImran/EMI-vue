<template>
  <div
    class="mx-auto my-0 max-w-[1200px] flex items-center h-screen justify-center"
  >
    <Stepper
      :forms="forms"
      :steps="['Identity', 'Accounts', 'Risks', 'Review']"
      :submit-action="submitAction"
    />
  </div>
</template>
<script setup>
import SideBar from "../components/stepper/stepper.vue";
import Stepper from "../components/stepper/stepper.vue";
import Step1 from "../components/stepper/Step1.vue";
import Step2 from "../components/stepper/Step2.vue";
import Step3 from "../components/stepper/Step3.vue";
import Step4 from "../components/stepper/Step4.vue";
const forms = [Step1, Step2, Step3, Step4];
const submitAction = () => {
  console.log("submitting form...");
};
</script>
