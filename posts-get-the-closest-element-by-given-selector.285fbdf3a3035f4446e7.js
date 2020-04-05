(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{RzjN:function(e,t,n){"use strict";n.r(t);var l=n("q1tI"),s=n.n(l),c=n("Ov9x"),o=n("2G++");t.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(c.a,{content:"\n## 1. Use the native closest() method\n\n~~~ javascript\nconst result = ele.closest(selector);\n~~~\n\nNote that the [closest](https://developer.mozilla.org/en-US/docs/Web/API/Element/closest) method isn't supported in IE.\n\n## 2. Traverse up until find the matching element\n\n~~~ javascript\nconst matches = function(ele, selector) {\n    return (\n        ele.matches || \n        ele.matchesSelector || \n        ele.msMatchesSelector || \n        ele.mozMatchesSelector || \n        ele.webkitMatchesSelector || \n        ele.oMatchesSelector\n    ).call(ele, selector);\n};\n\n// Find the closest element to `ele` and matches the `selector`\nconst closest = function(ele, selector) {\n    let e = ele;\n    while (e) {\n        if (matches(e, selector)) {\n            break;\n        }\n        e = e.parentNode;\n    }\n    return e;\n};\n~~~\n"}),s.a.createElement(o.a,{slugs:["check-an-element-against-a-selector"]}))}}}]);
//# sourceMappingURL=posts-get-the-closest-element-by-given-selector.285fbdf3a3035f4446e7.js.map