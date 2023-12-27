/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
// const formKitTailwind = require("@formkit/themes/tailwindcss");
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    // "./formkit-custom-theme.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffcf25",
        secondary: {
          DEFAULT: "#333333",
          light: "#B6B6B6",
          "semi-light": "#6B7280",
          dark: "#4C4639",
          "semi-dark": "#5F5E5E",
        },
        tertiary: { DEFAULT: "#CFC6B4", light: "#FFF8F0" },
        success: { DEFAULT: "#38A457", light: "#F4FFFB" },
        warning: { DEFAULT: "#FB9F34", light: "#F9E6D0" },
        danger: { DEFAULT: "#B33A3A", light: "#F3DFDF" },
        info: { DEFAULT: "#2196F3", light: "#EBF4FF" },
        "border-primary":{DEFAULT:"#e3e3e3"}
      },
      boxShadow: {
        xs: "0px 0px 5px 0px rgba(166, 176, 184, 0.39)",
        "shadow-xl":
          "0px 25px 35px 0px rgba(0, 0, 0, 0.03), 0px 0px 5px 0px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  // plugins: [formKitTailwind],
};