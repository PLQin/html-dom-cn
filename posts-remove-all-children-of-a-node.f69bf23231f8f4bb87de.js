(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{nJ1H:function(e,n,t){"use strict";t.r(n);var a=t("q1tI"),i=t.n(a),o=t("Ov9x"),r=t("2G++");n.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(o.a,{content:"\n## 1. Empty the inner HTML (not recommended)\n\n~~~ javascript\nele.innerHTML = '';\n~~~\n\nThis method isn't recommended because it doesn't remove event handlers of child node. Hence, it might cause a memory leak if you\nare managing a big list of elements.\n\n## 2. Remove child nodes\n\nRemove its child node until it doesn't have any children.\n\n~~~ javascript\nwhile (node.firstChild) {\n    node.removeChild(node.firstChild);\n}\n~~~\n"}),i.a.createElement(r.a,{slugs:["remove-an-element","unwrap-an-element"]}))}}}]);
//# sourceMappingURL=posts-remove-all-children-of-a-node.f69bf23231f8f4bb87de.js.map