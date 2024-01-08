<template>
  <div ref="emailTemplate" class="">
    <div lang="en" class="main">
      <div class="container">
        <img :src="`cid:logo`" alt="Your golden key to success" class="logo" />
        <span class="welcome">WELCOME!</span>
        <div class="bottombar">
          <img
            :src="`cid:bottombar`"
            alt="Email Welcome Bottombar"
            class="bottombar"
          />
        </div>
        <span class="nameStyle">Dear {{ userDetails.name }},</span>
        <p class="paragraph">
          <span>
            We have received your Zolvat Corporate Account request associated
            with email address
          </span>
          <span class="underline"> {{ userDetails.email }}.</span>
        </p>

        <p class="paragraph">
          In order to verify your account details and your liveliness
          verification, please complete your account verification process by
          clicking the button below.
        </p>
        <button href="https://vuejs.org" class="button">
          Complete Account Verification
        </button>
        <p class="note">
          Note: Waiting period for account verification can take up to two
          working days.
        </p>
        <p class="paragraph">
          If you have any questions or comments, you can go through our
          <span class="underline">FAQs</span>
          page or drop us a message using chat option within your account. We
          would love to hear from you.
        </p>
        <div>
          <span class="paragraph">Best regards,</span>
        </div>
        <div>
          <img :src="`cid:signature`" alt="Signature" class="signature" />
        </div>
        <div>
          <span class="designation">CEO Zolvat LTD.</span>
        </div>

        <hr class="hr" />
        <!-- Footer -->
        <p class="footerNoticeHeading">
          IMPORTANT SECURITY NOTICE:
          <span class="footerNoticeDescription"
            >Please be vigilant in protecting your personal information. Do not
            share sensitive details, such as passwords or financial information,
            via email or unverified platforms. Always ensure you are logging in
            through our official website.</span
          >
        </p>
        <div class="socialMediaIconsTable">
          <img class="socialIcon" :src="`cid:twitter`" alt="Twitter" />
          <img class="socialIcon" :src="`cid:instagram`" alt="Instagram" />
          <img class="socialIcon" :src="`cid:facebook`" alt="Facebook" />
          <img class="socialIcon" :src="`cid:linkedin`" alt="LinkedIn" />
        </div>
        <div class="footerAboutUsTable">
          <div class="footerAboutUs">
            <span>Zolvat LTD</span>
            <div class="footerAboutUsLinks">
              <span>FAQs</span>
              <span>Privacy Policy</span>
              <span>Terms & Conditions</span>
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
<style scoped>
:root {
  --font-stack: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
}
.socialIcon {
  cursor: pointer;
}
.main {
  width: 100%;
  background-color: white;
  padding: 40px 80px;
  border: 1px solid #b6b6b6;
  margin: 0 auto;
  max-width: 1200px;
}
.logo {
  margin: 0 auto;
}
.container {
  font-family: var(--font-stack);
  width: 100%;
}

.bottombar {
  margin: 0 auto;
  display: block;
  text-align: center;
}
.nameStyle {
  color: #333;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 41px;
}
.welcome {
  color: #5b5b5b;
  display: block;
  text-align: center;
  font-size: 100px;
  font-style: normal;
  font-weight: 200;
  line-height: normal;
  letter-spacing: 15px;
}

.button {
  padding: 10px 24px;
  border-radius: 8px;
  background: #ffcf25;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.4px;
  color: #333;
  margin-top: 18px;
}
.signature {
  margin: 16px 0;
}
.note {
  color: #808080;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 30px;
  margin-top: 16px;
}
.hr {
  border-color: "#B6B6B6";
  margin: 20px 0;
}
.paragraph {
  color: #333;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
  margin-top: 16px;
}

.designation {
  color: #808080;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 41px;
}
.underline {
  color: #2136f3;
  font-weight: 500;
  font-size: 24px;
  font-style: normal;
  line-height: 41px;
  text-decoration-line: underline;
}

.footerNoticeHeading {
  color: #808080;
  font-size: 18px;
  font-style: italic;
  font-weight: 600;
}
.footerNoticeDescription {
  font-size: 18px;
  font-weight: 400;
}
.socialMediaIconsTable {
  display: flex;
  justify-content: center;
  gap: 36px;
  margin: 20px 0;
}

.footerAboutUsTable {
  width: 100%;
}
.footerAboutUs {
  display: flex;
  color: #808080;
  font-size: 18px;
  align-items: center;
  justify-content: space-between;
  text-decoration-color: #808080;
  text-decoration-line: underline;
}
.footerAboutUsLinks {
  display: flex;
  gap: 20px;

  font-style: normal;
  font-weight: 400;
  line-height: 22px;
}
</style>
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
