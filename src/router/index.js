import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import Track from "../views/Track.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    props: true,
    component: Home,
  },
  {
    path: "/Search",
    name: "Search",
    props:true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Search.vue"),
  },
  {
    path: "/Track",
    name: "Track",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Track.vue"),
  },
  {
    path: "/Volunteer",
    name: "Volunteer",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Volunteer.vue"),
  },
  {
    path: "/Description/:petKind/:petID",
    name: "Description",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Description.vue"),
  },
  {
    path: "/custom",
    name: "Custom",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Custom.vue"),
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
