# JSONBeautifier
Code to beautify (or pretty-print) JSON responses in the browser.

I created this because [JSON Formatter for Safari|https://github.com/rfletcher/safari-json-formatter] stopped working in Safari 12. There are a few new options for Safari 12, but I didn't find an open source one, and I do not trust closed source browser extensions.

This can be used as a bookmarklet or the source can be copied and pasted into the browser console for pages with Content Security Policies that block external scripts.

```
javascript:(function(){window.JSONBeautifier={space:"\t",theme:"coy"};var a=Date.now();var b=a-a%24*36E5;a=document.createElement("script");a.src="https://keithws.github.io/JSONBeautifier/json-beautify.js?d="+b;document.body.appendChild(a)})();
```

Note, you can change the indentation (spaces or tabs) and the theme (from prism.js) in the global object defined in the first part of the bookmarklet.
