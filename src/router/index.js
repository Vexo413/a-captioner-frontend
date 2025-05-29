import { createMemoryHistory, createRouter } from "vue-router";

import HomeView from "../views/HomeView.vue";
import DemoView from "../views/DemoView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/demo", component: DemoView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
