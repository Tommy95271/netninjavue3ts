import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Test from "@/views/About.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: Test,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;