<template>
  <div
    ref="emailTemplate"
    class="border-2 mx-auto my-0 max-w-[1200px] flex flex-col items-center"
  >
    <!-- <p>asdas{{ process.env.BASE_URL }}</p> -->
    <div lang="en" :style="main">
      <div :style="container">
        <img :src="`icons/logo.svg`" alt="App Logo" :style="logo" />
        <span :style="welcome">WELCOME!</span>
        <img
          :src="`icons/email-welcome-bottombar.svg`"
          alt="Email Welcome Bottombar"
          :style="bottombar"
        />
        <span :style="nameStyle">Dear {{ userDetails.name }},</span>
        <p :style="paragraph">
          <span>
            We have received your Zolvat Corporate Account request associated
            with email address
          </span>
          <span :style="underline"> {{ userDetails.email }}.</span>
        </p>

        <p :style="paragraph">
          In order to verify your account details and your liveliness
          verification, please complete your account verification process by
          clicking the button below.
        </p>
        <button href="https://vuejs.org" :style="button">
          Complete Account Verification
        </button>
        <p :style="note">
          Note: Waiting period for account verification can take up to two
          working days.
        </p>
        <p :style="paragraph">
          If you have any questions or comments, you can go through our
          <span :style="underline">FAQs</span>
          page or drop us a message using chat option within your account. We
          would love to hear from you.
        </p>
        <span :style="paragraph">Best regards,</span>
        <img :src="`icons/signature.svg`" alt="Signature" :style="signature" />
        <span :style="designation">CEO Zolvat LTD.</span>

        <hr :style="hr" />
        <!-- Footer -->
        <p :style="footerNoticeHeading">
          IMPORTANT SECURITY NOTICE:
          <span :style="footerNoticeDescription"
            >Please be vigilant in protecting your personal information. Do not
            share sensitive details, such as passwords or financial information,
            via email or unverified platforms. Always ensure you are logging in
            through our official website.</span
          >
        </p>
        <table :style="socialMediaIconsTable">
          <tbody>
            <tr :style="socialMediaIcons">
              <img class="socialIcon" src="/icons/twitter.svg" alt="App Logo" />
              <img
                class="socialIcon"
                src="/icons/instagram.svg"
                alt="App Logo"
              />
              <img
                class="socialIcon"
                src="/icons/facebook.svg"
                alt="App Logo"
              />
              <img
                class="socialIcon"
                src="/icons/linkedin.svg"
                alt="App Logo"
              />
            </tr>
          </tbody>
        </table>
        <table :style="footerAboutUsTable">
          <tbody>
            <tr :style="footerAboutUs">
              <span>Zolvat LTD</span>
              <div :style="footerAboutUsLinks">
                <span>FAQs</span>
                <span>Privacy Policy</span>
                <span>Terms & Conditions</span>
              </div>
            </tr>
          </tbody>
        </table>
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
.socialIcon {
  cursor: pointer;
}
</style>
<script setup>
import { ref } from "vue";
import BaseButton from "./BaseButton.vue";

const emailTemplate = ref(null);

const handleClick = async () => {
  console.log(emailTemplate.value);

  await fetch("http://192.168.100.80:3000/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ template: `${emailTemplate.value.innerHTML}` }),
  }).then(async (response) => {
    if (!response.ok) {
      console.error(`Request failed with status: ${response.status}`);
      return;
    }
    const data = await response.json();
    console.log("res", response);
    console.log("data", data);
  });
};

const userDetails = ref({
  name: "Dave",
  email: "davemorris@gmail.com",
});

const main = {
  width: "100%",
  backgroundColor: "#ffffff",
  padding: "40px 80px",
};

const fontFamily =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif';
const marginTop = "18px";

const container = {
  fontFamily,
  width: "100%",
};
const logo = {
  margin: "0 auto",
};

const bottombar = {
  margin: "0 auto",
};
const nameStyle = {
  color: "#333",
  fontSize: "24px",
  "font-style": "normal",
  "font-weight": "500",
  "line-height": "41px",
};
const welcome = {
  color: "#5B5B5B",
  display: "block",
  "text-align": "center",
  fontSize: "100px",
  "font-style": "normal",
  "font-weight": "200",
  "line-height": "normal",
  "letter-spacing": "15px",
};

const button = {
  padding: "10px 24px",
  "border-radius": "8px",
  background: "#FFCF25",
  fontSize: "24px",
  "font-style": "normal",
  "font-weight": "500",
  "letter-spacing": "0.4px",
  color: "#333",
  marginTop,
};
const signature = {
  margin: "16px 0",
};
const note = {
  color: "#808080",
  fontSize: "24px",
  "font-style": "italic",
  "font-weight": "400",
  "line-height": "30px",
  "margin-top": "16px",
};
const hr = {
  borderColor: "#B6B6B6",
  margin: "20px 0",
};
const paragraph = {
  color: "#333",
  fontSize: "24px",
  "font-style": "normal",
  "font-weight": "400",
  "line-height": "41px",
  marginTop,
};

const designation = {
  color: "#808080",
  fontSize: "24px",
  "font-style": "normal",
  "font-weight": "400",
  "line-height": "41px",
};
const underline = {
  color: "#2136F3",
  "font-weight": "500",
  fontSize: "24px",
  "font-style": "normal",
  "line-height": "41px",
  "text-decoration-line": "underline",
};

const footerNoticeHeading = {
  color: "#808080",
  fontSize: "18px",
  "font-style": "italic",
  "font-weight": "600",
};
const footerNoticeDescription = {
  fontSize: "18px",
  "font-weight": "400",
};
const socialMediaIconsTable = {
  display: "flex",
  "justify-content": "center",
};
const socialMediaIcons = {
  width: "100%",
  display: "flex",
  gap: "36px",
  margin: "20px 0",
};
const footerAboutUsTable = {
  width: "100%",
};
const footerAboutUs = {
  display: "flex",
  color: "#808080",
  "justify-content": "space-between",
  "text-decoration-color": "#808080",
  "text-decoration-line": "underline",
};
const footerAboutUsLinks = {
  display: "flex",
  gap: "20px",
  "font-size": "18px",
  "font-style": "normal",
  "font-weight": "400",
  "line-height": "22px",
};
</script>
