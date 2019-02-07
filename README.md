# JSONBeautifier
Code to beautify (or pretty-print) JSON responses in the browser.

I created this because [JSON Formatter for Safari](https://github.com/rfletcher/safari-json-formatter) stopped working in Safari 12. There are a few new options for Safari 12, but I didn't find an open source one, and I do not trust closed source browser extensions.

This can be used as a bookmarklet or the source, `json-beautifier.js` can be copied and pasted into the browser console.

[JSONBeautifier Bookmarklet](javascript:%21function%28%29%7Bvar%20e%2Ct%2Ci%2Ca%3Bwindow.JSONBeautifier%3D%7Bspace%3A%22%5Ct%22%2Ctheme%3A%22coy%22%7D%2Ca%3D%22https%3A%2F%2Fkeithws.github.io%2FJSONBeautifier%2Fjson-beautifier.js%22%2Ce%3DDate.now%28%29%2Ci%3De-e%2524%2A60%2A60%2A1e3%2Ct%3Ddocument.createElement%28%22script%22%29%2Ct.src%3Da%20%22%3Fd%3D%22%20i%2Cdocument.head.appendChild%28t%29%7D%28%29%3B)

```
javascript:!function(){var%20e,t,i,a;window.JSONBeautifier={space:%22\t%22,theme:%22coy%22},a=%22https://keithws.github.io/JSONBeautifier/json-beautifier.js%22,e=Date.now(),i=e-e%2524*60*60*1e3,t=document.createElement(%22script%22),t.src=a+%22%3Fd=%22+i,document.head.appendChild(t)}();
```

Note, you can change the indentation (spaces or tabs) and the theme (from prism.js) in the global object defined in the first part of the bookmarklet.

Bookmarketlet made from `json-beautifier-bootstrap.js` with [Bookmarkleter](http://chriszarate.github.io/bookmarkleter/).
