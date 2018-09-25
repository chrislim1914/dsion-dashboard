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

function isValidPassword (password) {
  var re = {
    lower: /[a-z]/g,
    upper: /[A-Z]/g,
    alpha: /[A-Z]/gi,
    numeric: /[0-9]/g,
    special: /[\W_]/g
  }

  var lower = (password.match(re['lower']) || []).length > 0 ? 1 : 0
  var upper = (password.match(re['upper']) || []).length > 0 ? 1 : 0
  var numeric = (password.match(re['numeric']) || []).length > 0 ? 1 : 0
  var special = (password.match(re['special']) || []).length > 0 ? 1 : 0

  return password.length >= 8 && lower + upper + numeric + special >= 2 ? true : false
}

export default {
  isValidEmail,
  isValidWalletAddress,
  isValidImageFileSize,
  isValidPassword
}
