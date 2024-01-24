import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
const app = createApp(App);
app.use(VueTailwindDatepicker);
app.use(router);
app.mount("#app");
