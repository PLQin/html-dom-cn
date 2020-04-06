(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{c0km:function(n,e,t){"use strict";t.r(e);var a=t("q1tI"),o=t.n(a),c=t("Ov9x"),r=t("2G++");e.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(c.a,{content:'\n假设我们想知道 `child` 元素是否是 `parent` 元素的后代。\n\n## 1. 使用 contains() 方法\n\n~~~ javascript\nconst isDescendant = parent.contains(child);\n~~~\n\n## 2. 从子元素开始一直向上查找父元素\n\n~~~ javascript\n// 检查 `child` 元素是否是 `parent` 元素的后代\nconst isDescendant = function(parent, child) {\n    let node = child.parentNode;\n    while (node) {\n        if (node === parent) {\n            return true;\n        }\n\n        // 遍历父元素\n        node = node.parentNode;\n    }\n\n    // 一直遍历到根元素，但还没有遍历到指定的父元素\n    return false;\n};\n~~~\n\n相关链接: [Node.contains](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/contains "Node.contains")\n'}),o.a.createElement(r.a,{slugs:["detect-clicks-outside-of-an-element","get-the-parent-node-of-an-element"]}))}}}]);
//# sourceMappingURL=posts-check-if-an-element-is-a-descendant-of-another.ba0590b3b1c9797e906a.js.map