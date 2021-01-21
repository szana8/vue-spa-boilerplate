import { isEmpty } from "lodash";

/**
 * Set the token for the http header to send with all
 * of the requests
 *
 * @param  {[type]} token [description]
 * @return {[type]}       [description]
 */
export const setHttpToken = token => {
  if (isEmpty(token))
    this.$http.defaults.headers.common["Authorization"] = null;
  else this.$http.defaults.headers.common["Authorization"] = "Bearer " + token;
};
