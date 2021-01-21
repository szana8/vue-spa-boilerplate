import localforage from "localforage";
import { isEmpty } from "lodash";

/**
 * Set the user token to the localforage if the token
 * is not empty
 *
 * @param  {[type]} state [description]
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
export const setToken = (state, token) => {
  if (isEmpty(token)) {
    localforage.removeItem("authtoken", token);
    return;
  }

  localforage.setItem("authtoken", token);
};

/**
 * Set the user authenticated state to true when the user
 * has been authenticated
 *
 * @param  {[type]}  state           [description]
 * @param  {Boolean} isAuthenticated [description]
 * @return {[type]}                  [description]
 */
export const setAuthenticated = (state, isAuthenticated) => {
  state.user.authenticated = isAuthenticated;
};

/**
 * Set the user data to the state object
 *
 * @param  {[type]} state [description]
 * @param  {[type]} data  [description]
 * @return {[type]}       [description]
 */
export const setUserData = (state, data) => {
  state.user.data = data;
};
