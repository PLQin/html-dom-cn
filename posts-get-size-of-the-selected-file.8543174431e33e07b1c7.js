(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{MtSU:function(e,n,t){"use strict";t.r(n);var i=t("q1tI"),s=t.n(i),l=t("mcK/"),a=t("Ov9x"),o=t("2G++");n.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(a.a,{content:"\nIn the markup below, we have two elements defined by different `id` attributes. \nThe `id=\"size\"` element will be used to display the size of selected file from the `id=\"upload\"` element.\n\n~~~ html\n<input type=\"file\" id=\"upload\" />\n<div id=\"size\"></div>\n~~~\n\nWe listen on the `change` event of the file input, and get the selected files via `e.target.files`.\nThe file size in bytes of the selected file can be retrieved from the `size` property of the first (and only) file.\n\nThe size element is [shown up or hidden](/show-or-hide-an-element) based on the fact that user selects a file or not.\n\n~~~ javascript\n// Query the elements\nconst fileEle = document.getElementById('upload');\nconst sizeEle = document.getElementById('size');\n\nfileEle.addEventListener('change', function(e) {\n    const files = e.target.files;\n    if (files.length === 0) {\n        // Hide the size element if user doesn't choose any file\n        sizeEle.innerHTML = '';\n        sizeEle.style.display = 'none';\n    } else {\n        // File size in bytes\n        sizeEle.innerHTML = `${files[0].size} B`;\n\n        // Display it\n        sizeEle.style.display = 'block';\n    }\n});\n~~~\n\n## Display a readable size\n\nThere is a room for improving the output of file size. Instead of displaying in bytes, we can transform it to\na readable format in kB, MB, GB, and TB depending on how big it is.\n\nThe following `formatFileSize` helper method is created for that purpose:\n\n~~~ javascript\n// Convert the file size to a readable format\nconst formatFileSize = function(bytes) {\n    const sufixes = ['B', 'kB', 'MB', 'GB', 'TB'];\n    const i = Math.floor(Math.log(bytes) / Math.log(1024));\n    return `${(bytes / Math.pow(1024, i)).toFixed(2)} ${sufixes[i]}`;\n};\n\n// Display the file size\nsizeEle.innerHTML = formatFileSize(files[0].size);\n~~~\n\n## Use case\n\n* Validate the file size before uploading to the server.\n"}),s.a.createElement(l.a,{src:"/demo/get-size-of-the-selected-file/index.html"}),s.a.createElement(o.a,{slugs:["attach-or-detach-an-event-handler","get-or-set-the-html-of-an-element","show-or-hide-an-element"]}))}}}]);
//# sourceMappingURL=posts-get-size-of-the-selected-file.8543174431e33e07b1c7.js.map