<template>
  <div class="mx-auto my-0 max-w-[900px] flex mt-32 justify-center">
    <ReviewClientOnboarding
      :forms="forms"
      :steps="['Identity', 'Accounts', 'Risks', 'Review']"
      :submit-action="submitAction"
    />
  </div>
</template>
<script setup>
console.log("first");
import ReviewClientOnboarding from "../components/reviewClientOnboarding/Stepper.vue";
import Step1 from "../components/reviewClientOnboarding/Step1.vue";
import Step2 from "../components/reviewClientOnboarding/Step2.vue";
import Step3 from "../components/reviewClientOnboarding/Step3.vue";
import Step4 from "../components/reviewClientOnboarding/Step4.vue";
const forms = [Step1, Step2, Step3, Step4];
const submitAction = () => {
  console.log("submitting form...");
};
</script>
