/* eslint-disable */

/**
 * Check if valid email format
 * @param  {string}  email
 * @return {boolean}
 */
function isValidEmail(email) {
   var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return pattern.test(email)
}

export default {
  isValidEmail
}
