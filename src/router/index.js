import { createRouter, createWebHistory } from "vue-router";
import oneCard from "@/views/oneCard.vue";

const routes = [
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/Events",
    name: "Events",
    component: () => import("../views/Events.vue"),
  },

  {
    path: "/Events/:id",
    name: "oneCard",
    component: oneCard,
    props: true,
  },
  {
    path: "/Admin",
    name: "Admin",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
