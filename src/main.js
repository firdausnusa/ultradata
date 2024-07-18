import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import HomeView from "./views/HomeView.vue";
import OtherView from "./views/OtherView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/others", component: OtherView },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");
