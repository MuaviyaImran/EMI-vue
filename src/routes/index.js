import Header from "../views/header.vue";
import SideBar from "../views/baseSidebar.vue";
import Stepper from "../views/stepper.vue";
import Dropdown from "../views/dropdown.vue";
import OTP from "../views/otp.vue";
import LivenessPermition from "../views/livenessPermition.vue";
import LivenessInitiate from "../views/livenessInitiate.vue";
import LivenessLoading from "../views/livenessLoading.vue";
import SendEmail from "../views/sendEmail.vue";
import RequiredDocumentTable from "../views/requiredDocumentTable.vue";
import CustomerDetailDropdown from "../views/customerDetailDropdown.vue";
import YearlyMonthlyFields from "../views/yearlyMonthlyFields.vue";
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
    path: "/yearly-monthly",
    component: YearlyMonthlyFields,
  },
  {
    path: "/dropdown",
    component: Dropdown,
  },
  {
    path: "/customerDetailDropdown",
    component: CustomerDetailDropdown,
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
  {
    path: "/sendEmail",
    component: SendEmail,
  },
];

export default routes;
