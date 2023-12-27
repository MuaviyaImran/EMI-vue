import Header from "../views/header.vue";
import SideBar from "../views/sidebar.vue";
import Stepper from "../views/stepper.vue";
import OTP from "../views/otp.vue";

const routes = [
  
  {
    path: "/header",
    component: Header,
  },
  {
    path: "/sidebar",
    component: SideBar,
  },
  {
    path: "/stepper",
    component: Stepper,
  },
  {
    path: "/otp",
    component: OTP,
  },
];

export default routes;
