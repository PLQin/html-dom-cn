(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{"2V82":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),r=t.n(a),o=t("TJpk"),i=t("Ov9x"),s=t("2G++");n.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Helmet,null,r.a.createElement("meta",{name:"keywords",content:"Blob, FileReader, readAsDataURL, resize image, toBlob, toDataURL, URL createObjectURL"})),r.a.createElement(i.a,{content:"\nAssume that we want to resize an image to a given number of percentages.\nThe image can be determined from a `file` input:\n\n~~~ javascript\n// A file input\n<input type=\"file\" id=\"upload\" />\n\n// Get the selected file\nconst image = document.getElementById('upload').files[0];\n~~~\n\nThe following function scales an `image` file to `ratio` of percentages:\n\n~~~ javascript\nconst resize = function(image, ratio) {\n    return new Promise(function(resolve, reject) {\n        const reader = new FileReader();\n        \n        // Read the file\n        reader.readAsDataURL(image);\n\n        // Manage the `load` event\n        reader.addEventListener('load', function(e) {\n            // Create new image element\n            const ele = new Image();\n            ele.addEventListener('load', function() {\n                // Create new canvas\n                const canvas = document.createElement('canvas');\n\n                // Draw the image that is scaled to `ratio`\n                const context = canvas.getContext('2d');\n                const w = ele.width * ratio;\n                const h = ele.height * ratio;\n                canvas.width = w;\n                canvas.height = h;\n                context.drawImage(ele, 0, 0, w, h);\n                \n                // Get the data of resized image\n                ('toBlob' in canvas)\n                    ? canvas.toBlob(function(blob) {\n                        resolve(blob);\n                    })\n                    : resolve(dataUrlToBlob(canvas.toDataURL()));\n            });\n\n            // Set the source\n            ele.src = e.target.result;\n        });\n\n        reader.addEventListener('error', function(e) {\n            reject();\n        });\n    });\n};\n~~~\n\nIn the sample code above, after drawing a new image, we have to check if the current browser supports the _canvas_' `toBlob` method.\n\nIf not, we have to get the data URL from `canvas.toDataURL()` first, and then use the following function to convert it to a _Blob_:\n\n~~~ javascript\nconst dataUrlToBlob = function(url) {\n    const arr = url.split(',');\n    const mime = arr[0].match(/:(.*?);/)[1];\n    const str = atob(arr[1]);\n    let length = str.length;\n    const uintArr = new Uint8Array(length);\n    while (length--) {\n        uintArr[length] = str.charCodeAt(length);\n    }\n    return new Blob([uintArr], { type: mime });\n};\n~~~\n\nAs soon as we have the _Blob_ of the resized image, we can preview it on the front-end or send it to the back-end as a part of _FormData_:\n\n~~~ javascript\n// Resize image to 50%\nresize(image, 0.5).then(function(blob) {\n    // Preview\n    // Assume that `previewEle` represents the preview image element\n    previewEle.src = URL.createObjectURL(blob);\n});\n~~~\n"}),r.a.createElement(s.a,{slugs:["attach-or-detach-an-event-handler","create-an-element","preview-an-image-before-uploading-it"]}))}}}]);
//# sourceMappingURL=posts-resize-an-image.1f1d554e362477af864a.js.map