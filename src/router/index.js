import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Track from "../views/Track.vue";

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
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Custom.vue"),
  },
  {
    path: "/Description/:petKind/:petID",
    name: "Description",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Description.vue"),
  },
  {
    path: "/test",
    name: "testForm",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../components/AdoptionApply.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
