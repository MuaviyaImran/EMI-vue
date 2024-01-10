<template>
  <div ref="emailTemplate">
    <div
      style="
        background-color: white;
        padding: 40px 80px;
        border: 1px solid #b6b6b6;
        max-width: 1000px;
      "
    >
      <div style="width: 100%">
        <img
          :src="`cid:logo`"
          alt="Your golden key to success"
          style="margin: 0 auto"
        />
        <span
          style="
            color: #5b5b5b;
            display: block;
            margin-top: 30px;
            text-align: center;
            font-size: 100px;
            font-style: normal;
            font-weight: 200;
            line-height: normal;
            letter-spacing: 15px;
          "
          >WELCOME!</span
        >
        <div style="margin: 0 auto; display: block; text-align: center">
          <img
            :src="`cid:bottombar`"
            alt="Email Welcome Bottombar"
            style="margin: 0 auto; display: block; text-align: center"
          />
        </div>
        <span
          style="
            color: #333;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 41px;
          "
          >Dear {{ userDetails.name }},</span
        >
        <p
          style="
            color: #333;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 41px;
            margin-top: 16px;
          "
        >
          <span>
            We have received your Zolvat Corporate Account request associated
            with email address
          </span>
          <span
            style="
              color: #2136f3;
              font-weight: 500;
              font-size: 24px;
              font-style: normal;
              line-height: 41px;
              text-decoration-line: underline;
            "
          >
            {{ userDetails.email }}.</span
          >
        </p>

        <p
          style="
            color: #333;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 41px;
            margin-top: 16px;
          "
        >
          In order to verify your account details and your liveliness
          verification, please complete your account verification process by
          clicking the button below.
        </p>
        <button
          href="https://vuejs.org"
          style="
            padding: 10px 24px;
            border-radius: 8px;
            background: #ffcf25;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            letter-spacing: 0.4px;
            color: #333;
            margin-top: 18px;
          "
        >
          Complete Account Verification
        </button>
        <p
          style="
            color: #808080;
            font-size: 24px;
            font-style: italic;
            font-weight: 400;
            line-height: 30px;
            margin-top: 16px;
          "
        >
          Note: Waiting period for account verification can take up to two
          working days.
        </p>
        <p
          style="
            color: #333;
            font-size: 24px;
            font-style: normal;
            font-weight: 400;
            line-height: 41px;
            margin-top: 16px;
          "
        >
          If you have any questions or comments, you can go through our
          <span
            style="
              color: #2136f3;
              font-weight: 500;
              font-size: 24px;
              font-style: normal;
              line-height: 41px;
              text-decoration-line: underline;
            "
            >FAQs</span
          >
          page or drop us a message using chat option within your account. We
          would love to hear from you.
        </p>
        <div>
          <span
            style="
              color: #333;
              font-size: 24px;
              font-style: normal;
              font-weight: 400;
              line-height: 41px;
              margin-top: 16px;
            "
            >Best regards,</span
          >
        </div>
        <div>
          <img :src="`cid:signature`" alt="Signature" style="margin: 16px 0" />
        </div>
        <div>
          <span
            style="
              color: #808080;
              font-size: 24px;
              font-style: normal;
              font-weight: 400;
              line-height: 41px;
            "
            >CEO Zolvat LTD.</span
          >
        </div>

        <hr style="border-color: #b6b6b6; margin: 20px 0" />
        <!-- Footer -->
        <p
          style="
            color: #808080;
            font-size: 18px;
            font-style: italic;
            font-weight: 600;
          "
        >
          IMPORTANT SECURITY NOTICE:
          <span style="font-size: 18px; font-weight: 400"
            >Please be vigilant in protecting your personal information. Do not
            share sensitive details, such as passwords or financial information,
            via email or unverified platforms. Always ensure you are logging in
            through our official website.</span
          >
        </p>
        <div style="width: 300px; display: flex; margin: 20px auto">
          <img
            style="cursor: pointer; margin: 0 18px"
            :src="`cid:twitter`"
            alt="Twitter"
          />
          <img
            style="cursor: pointer margin:0 18px"
            :src="`cid:instagram`"
            alt="Instagram"
          />
          <img
            style="cursor: pointer margin:0 18px"
            :src="`cid:facebook`"
            alt="Facebook"
          />
          <img
            style="cursor: pointer margin:0 18px"
            :src="`cid:linkedin`"
            alt="LinkedIn"
          />
        </div>
        <div style="width: 100%">
          <div
            style="
              color: #808080;
              display: flex;
              font-size: 18px;
              text-decoration-color: #808080;
              text-decoration-line: underline;
            "
          >
            <span style="margin-right: auto">Zolvat LTD</span>
            <div
              style="
                display: flex;
                font-style: normal;
                font-weight: 400;
                line-height: 22px;
              "
            >
              <span style="margin: 0 10px">FAQs</span>
              <span style="margin: 0 10px">Privacy Policy</span>
              <span style="margin: 0 10px">Terms & Conditions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="flex justify-center my-4">
    <BaseButton @click="handleClick" variant="outline" type="secondary">
      <template #text>Send Email</template>
    </BaseButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";
const emailTemplate = ref(null);

const handleClick = async () => {
  await fetch("http://192.168.0.241:3000/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      template: `${emailTemplate.value.innerHTML}`,
    }),
  }).then(async (response) => {
    if (!response.ok) {
      console.error(`Request failed with status: ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log("data", data);
  });
};

const userDetails = ref({
  name: "Dave",
  email: "davemorris@gmail.com",
});
</script>
