/**
 * custom libraries
 */
/* eslint-disable */
/**
 * [shifters description]
 * @param  {[type]} str   [to be shifted]
 * @param  {[type]} count [iterations needed]
 * @return {[type]} shifted strings
 * from JavaScript Caesar shift
 *  by Evan Hahn (evanhahn.com)
 */
export function shifters (str, amount) {
	// To string json data
	// str = JSON.stringify(str)

  // Wrap the amount
	if (amount < 0)
		return shifters(str, amount + 26);
	// Make an output variable
	var output = '';
	// Go through each character
	for (var i = 0; i < str.length; i ++) {
		// Get the character we'll be appending
		var c = str[i];
		// If it's a letter...
		if (c.match(/[a-z]/i)) {
			// Get its code
			var code = str.charCodeAt(i);
			// Uppercase letters
			if ((code >= 65) && (code <= 90))
				c = String.fromCharCode(((code - 65 + amount) % 26) + 65)
			// Lowercase letters
			else if ((code >= 97) && (code <= 122))
				c = String.fromCharCode(((code - 97 + amount) % 26) + 97)
		}
		// Append
		output += c
	}
	// All done!
	return output
}

export function cookify (data) {
	var d = new Date()
  var p = '/';
  document.cookie = escape(data.toJSONString()) + ';path=' + p + ';expires=' + d.toUTCString()
}

export function cookieNameCutter (name) {
	var pair = document.cookie.match(new RegExp(name + '=([^;]+)'));
	return !!pair ? pair[1] : null;
}

export function unixer () {
	return Math.round((new Date()).getTime() / 1000)
}

export function pickANumber () {
	return Math.floor(Math.random() * (100 - 1)) + 1;
}
