import "tailwindcss/tailwind.css";

import Vue from "vue";
import App from "./App.vue";
import Store from "./vuex";
import Axios from "axios";
import Router from "./router";
import LocalForage from "localforage";

/**
 * Initialize the localstorage to store the token and all
 * of the neccessary object.
 */
LocalForage.config({
  driver: LocalForage.LOCALSTORAGE,
  storeName: "slim"
});

//const api_version = "v1";

Vue.config.productionTip = false;

/**
 * If the token exist in the local machine and not expired we try to
 * fetch the user with the token. If the authentication is fine
 * we move on to the home screen, else move to the login
 * screen.
 *
 * @param  {Function} 'auth/setToken').then(() [description]
 * @return {[type]}                            [description]
 */
//Store.dispatch("auth/setToken")
//  .then(() => {
//    Store.dispatch("auth/fetchUser").catch(() => {
//      Store.dispatch("auth/clearAuth");
//      Router.replace({ name: "login" });
//    });
//  })
//  .catch(() => {
//    Store.dispatch("auth/clearAuth");
//  });

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */
Vue.prototype.$http = Axios;
Vue.prototype.$http.defaults.baseURL =
  process.env.VUE_APP_API_URL + "/" + process.env.VUE_APP_API_VERSION;
//Vue.prototype.$http.defaults.headers.common["X-Requested-With"] =
//  "XMLHttpRequest";

new Vue({
  router: Router,
  store: Store,
  render: function(h) {
    return h(App);
  }
}).$mount("#app");
