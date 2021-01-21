import Vue from "vue";
import VueRouter from "vue-router";
import beforeEach from "./beforeEach";

Vue.use(VueRouter);

/**
 * Import all of the routes from the components
 */
import { routes } from "../app/index";

/**
 * Use all of the routes which came from the components
 * @type {Router}
 */
const router = new VueRouter({
  mode: "history",
  routes: routes,
  base: process.env.BASE_URL
});

router.beforeEach(beforeEach);

export default router;
