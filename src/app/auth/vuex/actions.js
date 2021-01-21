import { isEmpty, reject } from "lodash";
import localforage from "localforage";
import { setHttpToken } from "../../../helpers/index";
import axios from "axios";

/**
 * Register the user and login than set the given token to the localforage
 * object for the future usage
 *
 * @param  {[type]} options.dispatch [description]
 * @param  {[type]} options.payload  [description]
 * @param  {[type]} options.context  [description]
 * @return {[type]}                  [description]
 */
export const register = ({ dispatch }, { payload, context }) => {
  return new Promise((resolve, reject) => {
    axios
      .post("auth/signup", payload)
      .then(response => {
        dispatch("setToken", response.data.meta.token).then(() => {
          dispatch("fetchUser");
        });
        resolve();
      })
      .catch(error => {
        context.errors = error.response.data.errors;
        reject(error);
      });
  });
};

/**
 * Login the user and set the token to the localforage object
 * for the future usage
 *
 * @param  {[type]} options.dispatch [description]
 * @param  {[type]} options.payload  [description]
 * @param  {[type]} options.context  [description]
 * @return {[type]}                  [description]
 */
export const login = ({ dispatch }, { payload, context }) => {
  return axios
    .post("auth/signin", payload)
    .then(response => {
      dispatch("setToken", response.data.meta.token).then(() => {
        dispatch("fetchUser");
      });
    })
    .catch(error => {
      context.errors = error.response.data.errors;
      reject(error);
    });
};

/**
 * Set the givven token if it is not exist
 *
 * @param  {[type]} options.commit   [description]
 * @param  {[type]} options.dispatch [description]
 * @param  {[type]} token            [description]
 * @return {[type]}                  [description]
 */
export const setToken = ({ commit, dispatch }, token) => {
  if (isEmpty(token)) {
    return dispatch("checkTokenExists").then(token => {
      setHttpToken(token);
        });
  }

  commit("setToken", token);
  setHttpToken(token);
};

/**
 * Check the token exist in the localforage
 *
 * @param  {[type]} options.commit   [description]
 * @param  {[type]} options.dispatch [description]
 * @param  {[type]} token            [description]
 * @return {[type]}                  [description]
 */
export const checkTokenExists = () => {
  return localforage.getItem("authtoken").then(token => {
    if (isEmpty(token)) {
      return Promise.reject("NO_STOREAGE_TOKEN");
    }

    return Promise.resolve(token);
  });
};

/**
 * Clear all of the login data from the localforage
 *
 * @param  {[type]} options.commit [description]
 * @param  {[type]} token          [description]
 * @return {[type]}                [description]
 */
export const clearAuth = ({ commit }) => {
  commit("setToken", null);
  commit("setUserData", null);
  commit("setAuthenticated", false);

  setHttpToken(null);
};

/**
 * Fetch the user from the backend than set the user data
 * to the state
 *
 * @param  {[type]} options.commit [description]
 * @return {[type]}                [description]
 */
export const fetchUser = ({ commit }) => {
  return axios.get("auth/signedIn").then(response => {
    commit("setAuthenticated", true);
    commit("setUserData", response.data.data);
  });
};

/**
 * Logout the user and clear all of the data from the localforage
 * which belongs to the user
 *
 * @param  {[type]} options.dispatch [description]
 * @return {[type]}                  [description]
 */
export const logout = ({ dispatch }) => {
  return axios.post("auth/logout").then(() => {
    dispatch("clearAuth");
  });
};
