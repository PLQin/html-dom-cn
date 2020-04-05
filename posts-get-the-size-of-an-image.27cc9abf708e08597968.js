(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"2Luf":function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),c=t("Ov9x"),r=t("2G++");n.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{content:"\n## Image is already loaded\n\n~~~ javascript\nconst image = document.querySelector(...);\n\n// Get the original size\nconst naturalWidth = image.naturalWidth;\nconst naturalHeight = image.naturalHeight;\n\n// Get the scaled size\nconst width = image.width;\nconst height = image.height;\n~~~\n\n## Image is not loaded yet\n\nListen on the `load` event to calculate the size of image which can be loaded via a given URL:\n\n~~~ javascript\nconst image = document.createElement('img');\nimage.addEventListener('load', function(e) {\n    // Get the size\n    const width = e.target.width;\n    const height = e.target.height;\n});\n\n// 设置源\nimage.src = '/path/to/image.png';\n~~~\n\nWe can use a `Promise` to turn the snippet to a reusable function:\n\n~~~ javascript\nconst calculateSize = function(url) {\n    return new Promise(function(resolve, reject) {\n        const image = document.createElement('img');\n        image.addEventListener('load', function(e) {\n            resolve({\n                width: e.target.width,\n                height: e.target.height,\n            });\n        });\n\n        image.addEventListener('error', function() {\n            reject();\n        });\n\n        image.src = url;\n    });\n};\n\ncalculateSize('/path/to/image.png').then(function(data) {\n    const width = data.width;\n    const height = data.height;\n});\n~~~\n\n## Use case\n\nAssume that you want to show the size of avatar which can be uploaded via a file input:\n\n~~~ html\n<input type=\"file\" id=\"avatar\" />\n\n\x3c!-- Display the size --\x3e\n<div id=\"size\" />\n~~~\n\nFirst, we need to get the selected file, and then load it via `FileReader`:\n\n~~~ javascript\nconst avatarEle = document.getElementById('avatar');\nconst sizeEle = document.getElementById('size');\n\navatarEle.addEventListener('change', function(e) {\n    // Get the selected file\n    const file = e.target.files[0];\n\n    const reader = new FileReader();\n    reader.readAsDataURL(file);\n    reader.addEventListener('loadend', function(e) {\n        const src = e.target.result;\n\n        calculateSize(src).then(function(data) {\n            const width = data.width;\n            const height = data.height;\n\n            sizeEle.innerHTML = `${width} x ${height}`;\n        });\n    });\n});\n~~~\n"}),i.a.createElement(r.a,{slugs:["attach-or-detach-an-event-handler","preview-an-image-before-uploading-it"]}))}}}]);
//# sourceMappingURL=posts-get-the-size-of-an-image.27cc9abf708e08597968.js.map