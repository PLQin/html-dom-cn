(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{dLmu:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),o=t.n(a),l=t("TJpk"),r=t("Ov9x"),s=t("2G++");n.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(l.Helmet,null,o.a.createElement("meta",{name:"keywords",content:"ajax file upload, FormData, XMLHttpRequest"})),o.a.createElement(r.a,{content:"\nThe function below sends selected files from a `fileEle` element to a back-end:\n\n~~~ javascript\nconst upload = function(fileEle, backendUrl) {\n    return new Promise(function(resolve, reject) {\n        // Get the list of selected files\n        const files = fileEle.files;\n\n        // Create a new FormData\n        const formData = new FormData();\n\n        // Loop over the files\n        [].forEach.call(files, function(file) {\n            formData.append(fileEle.name, file, file.name);\n        });\n\n        // Create new Ajax request\n        const req = new XMLHttpRequest();\n        req.open('POST', backendUrl, true);\n\n        // Handle the events\n        req.onload = function() {\n            if (req.status >= 200 && req.status < 400) {\n                resolve(req.responseText);\n            }\n        };\n        req.onerror = function() {\n            reject();\n        };\n\n        // Send it\n        req.send(formData);\n    });\n};\n~~~\n\n## Usage\n\nAssume that we have a `file` input that allows user to choose multiple files:\n\n~~~ html\n<input type=\"file\" id=\"upload\" multiple />\n~~~\n\nWe can use the following code inside a `click` event handler of a button which performs the uploading:\n\n~~~ javascript\nconst fileEle = document.getElementById('upload');\n\nupload(fileEle, '/path/to/back-end').then(function(response) {\n    // `response` is what we got from the back-end\n    // We can parse it if the server returns a JSON\n    const data = JSON.parse(response);\n    ...\n});\n~~~\n"}),o.a.createElement(s.a,{slugs:["loop-over-a-nodelist","paste-an-image-from-the-clipboard","submit-a-form-with-ajax"]}))}}}]);
//# sourceMappingURL=posts-upload-files-with-ajax.725d360d4749742c9c5f.js.map