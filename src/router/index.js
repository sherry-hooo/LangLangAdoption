import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Search",
    name: "Search",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue"),
  },
  {
    path: "/Track",
    name: "Track",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Track.vue"),
  },
  {
    path: "/Volunteer",
    name: "Volunteer",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Volunteer.vue"),
  },
  {
    path: "/Custom",
    name: "Custom",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Custom.vue"),
  },
  {
    path: "/Description/:petID",
    name: "Description",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Description.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
