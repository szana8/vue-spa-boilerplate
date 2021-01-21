const Login = () => import("../components/Login.vue");
const Register = () => import("../components/Register.vue");

export default [
  {
    path: "/login",
    component: Login,
    name: "login",
    meta: {
      guest: true,
      needsAuth: false
    }
  },
  {
    path: "/register",
    component: Register,
    name: "register",
    meta: { guest: true, needsAuth: false }
  }
];
