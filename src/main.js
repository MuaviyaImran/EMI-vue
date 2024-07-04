import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import VueTailwindDatepicker from "vue-tailwind-datepicker";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";
const app = createApp(App);
app.component("EasyDataTable", Vue3EasyDataTable);
app.use(VueTailwindDatepicker);
app.use(router);
app.mount("#app");
