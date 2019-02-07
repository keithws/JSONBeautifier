/*
 * code to beautify (or pretty-print) JSON responses in the browser
 * syntax highlighting is done with prism.js
 * (optional) specify tabs or spaces
 * (optional) use any prism.js theme
 */
(function () {

	"use strict";

	var space, theme, text, value, code, pre, childNodes, i, l, cdn, link, fragment, script;

	// initialize
	window.JSONBeautifier = window.JSONBeautifier || {};

	// user configurable space used for indenting
	space = window.JSONBeautifier.space || "  ";

	// user configurable theme from prism.js
	theme = window.JSONBeautifier.theme || "";

	// get original JSON string from response
	text = document.body.textContent;
	value = JSON.parse(text);

	// create code element with standard class name
	code = document.createElement("code");
	code.className = "language-json";
	code.textContent = JSON.stringify(value, null, space);

	// create containing pre element
	pre = document.createElement("pre");
	pre.appendChild(code);

	// remove all child nodes of the body
	childNodes = document.body.childNodes;
	for (i = 0, l = childNodes.length; i < l; i += 1) {

		document.body.removeChild(childNodes.item(i));

	}

	// append new child node
	document.body.appendChild(pre);

	// inject prsim.js scripts and styles for syntax highlighting
	cdn = "https://cdnjs.cloudflare.com/ajax/libs/prism/1.15.0";

	// inject base css
	link = document.createElement("link");
	link.href = cdn + "/themes/prism.min.css";
	link.rel = "stylesheet";
	document.head.appendChild(link);

	if (theme) {

		// inject theme css
		link = document.createElement("link");
		link.href = cdn + "/themes/prism-" + theme + ".min.css";
		link.rel = "stylesheet";
		document.head.appendChild(link);

	}

	// use fragment to inject both script tags at the same time
	fragment = document.createDocumentFragment();

	// inject prism.js main script
	script = document.createElement("script");
	script.src = cdn + "/prism.min.js";
	script.async = false;
	fragment.appendChild(script);

	// inject prism.js JSON language defination
	script = document.createElement("script");
	script.src = cdn + "/components/prism-json.min.js";
	script.async = false;
	fragment.appendChild(script);
	document.body.appendChild(fragment);

	// create global object with properties to provide access
	// to the original text and the parsed value
	window.JSONBeautifier.text = text;
	window.JSONBeautifier.value = value;

	/* eslint-disable no-console */
	console.log({
		"JSONBeautifier": window.JSONBeautifier
	});

})();
