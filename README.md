# JSONBeautifier
Code to beautify (or pretty-print) JSON responses in the browser.

[[https://github.com/keithws/JSONBeautifier/blob/master/screenshot.png|alt=screenshot]]

I created this because [JSON Formatter for Safari](https://github.com/rfletcher/safari-json-formatter) stopped working in Safari 12. There are a few new options for Safari 12, but I didn't find an open source one in the App Store, and I do not trust closed source browser extensions.

This can be used as a bookmarklet or the source, `json-beautifier.js`, can be copied and pasted into the browser console.

```
javascript:!function(){var%20e,t,i,a;window.JSONBeautifier={space:%22\t%22,theme:%22coy%22},a=%22https://keithws.github.io/JSONBeautifier/json-beautifier.js%22,e=Date.now(),i=e-e%2524*60*60*1e3,t=document.createElement(%22script%22),t.src=a+%22%3Fd=%22+i,document.head.appendChild(t)}();
```

Note, you can change the indentation (spaces or tabs) and the theme (from prism.js) in the global object defined in the first part of the bookmarklet.

Bookmarketlet made from `json-beautifier-bootstrap.js` with [Bookmarkleter](http://chriszarate.github.io/bookmarkleter/).
