(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{ZoKU:function(n,e,t){"use strict";t.r(e);var r=t("q1tI"),a=t.n(r),o=t("Ov9x"),i=t("2G++");e.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,{content:"\n## Load a JavaScript file\n\n~~~ javascript\n// Create new script element\nconst script = document.createElement('script');\nscript.src = '/path/to/js/file.js';\n\n// Append to the `head` element\ndocument.head.appendChild(script);\n~~~\n\n## Execute code when the JavaScript file is loaded\n\n~~~ javascript\n// Create new script element\n...\nscript.addEventListener('load', function() {\n    // The script is loaded completely\n    // Do something\n});\n\n// Append to the `head` element\n...\n~~~\n\n## Load multiple JavaScript files in order\n\nAssume that you want to load an array of JavaScript files, `arrayOfJs`, in order.\n\nTo do that, we have to load the first script, and load the second script when the first one is loaded completely.\nAnd continue doing so until all scripts are loaded.\n\n~~~ javascript\n// Load a script from given `url`\nconst loadScript = function(url) {\n    return new Promise(function(resolve, reject) {\n        const script = document.createElement('script');\n        script.src = url;\n\n        script.addEventListener('load', function() {\n            // The script is loaded completely\n            resolve(true);\n        });\n\n        document.head.appendChild(script);\n    });\n};\n\n// Perform all promises in the order\nconst waterfall = function(promises) {\n    return promises.reduce(\n        function(p, c) {\n            // Waiting for `p` completed\n            return p.then(function() {\n                // and then `c`\n                return c().then(function(result) {\n                    return true;\n                });\n            });\n        },\n        // The initial value passed to the reduce method\n        Promise.resolve([])\n    );\n};\n\n// Load an array of scripts in order\nconst loadScriptsInOrder = function(arrayOfJs) {\n    const promises = arrayOfJs.map(function(url) {\n        return loadScript(url);\n    });\n    return waterfall(promises);\n};\n~~~\n\nThe `loadScriptsInOrder` function returns a `Promise` indicates whether all scripts are loaded successfully:\n\n~~~ javascript\nloadScriptsInOrder([\n    '/path/to/file.js',\n    '/path/to/another-file.js',\n    '/yet/another/file.js',\n]).then(function() {\n    // All scripts are loaded completely\n    // Do something\n})\n~~~\n"}),a.a.createElement(i.a,{slugs:["change-the-website-favicon","load-a-css-file-dynamically"]}))}}}]);
//# sourceMappingURL=posts-load-a-javascript-file-dynamically.9cc68fc26b03f8b70d9c.js.map