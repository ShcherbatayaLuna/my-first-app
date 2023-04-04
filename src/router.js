import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import VueRouter from "vue-router";
import ErrorPage from "./pages/ErrorPage.vue";
import LoginPage from "./pages/LoginPage.vue";
import RegistrationPage from './pages/RegistrationPage.vue'

const routes = [
  {
    path: "/",
    component: HomePage,
    name: "homepage",
  },
  {
    path: "/apartments/:id",
    component: ApartmentPage,
    name: "apartment",
  },
  {
    path: "/login",
    component: LoginPage,
    name: "login-page",
  },
  {
    path: "/registration",
    component: RegistrationPage,
    name: "registration-page",
  },
  {
    path: "*",
    component: ErrorPage,
    name: "error-page",
  },
];

const router = new VueRouter({ routes, mode: "history" });

export default router;
