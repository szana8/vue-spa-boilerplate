const Home = () => import("../components/Home.vue");

export default [
  {
    path: "/",
    component: Home,
    name: "home",
    meta: {
      //guest: false,
      needsAuth: false
    }
  }
];
