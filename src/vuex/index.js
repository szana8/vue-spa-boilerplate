import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

/**
 * Import global vuex functions
 */
import state from "./state";
import * as getters from "./getters";
import * as mutations from "./mutations";
import * as actions from "./actions";

/**
 * Import all of the vues modules from the components
 */
import auth from "../app/auth/vuex";

/**
 * Set the vuex components to the base vuex store
 *
 * @type {Object}
 */
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    auth: auth
  }
});
