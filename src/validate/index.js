/* eslint-disable */

/**
 * Check if valid email format
 * @param  {string}  email
 * @return {boolean}
 */
function isValidEmail (email) {
   var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return pattern.test(email)
}

function isValidWalletAddress (address) {
  var pattern = /^(0x)?[0-9a-f]{40}$/i
  return pattern.test(address)
}

function isValidImageFileSize (size) {
  return (size <= 10000000) ? true : false
}

export default {
  isValidEmail,
  isValidWalletAddress,
  isValidImageFileSize
}
