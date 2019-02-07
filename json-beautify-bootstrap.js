/*
 * load the JSON Beautify source
 * and let client cache it for 24 hours
 */
(function () {

	var now, script, today, url;

	// user configurable settings
	window.JSONBeautifier = {
		"space": "\t",
		"theme": "coy"
	};

	url = "https://keithws.github.io/JSONBeautifier/json-beautify.js";
	now = Date.now();
	today = now - now % 24 * 60 * 60 * 1000;
	script = document.createElement("script");
	script.src = url + "?d=" + today;

	document.body.appendChild(script);

})();
