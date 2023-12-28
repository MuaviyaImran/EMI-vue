import Header from "../views/header.vue";
import SideBar from "../views/baseSidebar.vue";
import Stepper from "../views/stepper.vue";
import Dropdown from "../views/dropdown.vue";
import OTP from "../views/otp.vue";
import LivenessPermition from "../views/livenessPermition.vue";
import LivenessInitiate from "../views/livenessInitiate.vue";
import LivenessLoading from "../views/livenessLoading.vue";
import RequiredDocumentTable from "../views/requiredDocumentTable.vue";

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
  {
    path: "/dropdown",
    component: Dropdown,
  },
  {
    path: "/livenessPermition",
    component: LivenessPermition,
  },
  {
    path: "/livenessInitiate",
    component: LivenessInitiate,
  },
  {
    path: "/livenessLoading",
    component: LivenessLoading,
  },
  {
    path: "/requiredDocumentTable",
    component: RequiredDocumentTable,
  },
];

export default routes;
