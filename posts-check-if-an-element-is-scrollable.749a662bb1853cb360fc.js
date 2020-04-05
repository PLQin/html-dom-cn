(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"3yIL":function(e,n,t){"use strict";t.r(n);var l=t("q1tI"),o=t.n(l),s=t("Ov9x"),a=t("2G++");n.default=function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement(s.a,{content:"\nThe following function returns `true` if the `ele` element is scrollable.\n\n~~~ javascript\nconst isScrollable = function(ele) {\n    // Compare the height to see if the element has scrollable content\n    const hasScrollableContent = ele.scrollHeight > ele.clientHeight;\n\n    // It's not enough because the element's `overflow-y` style can be set as\n    // * `hidden`\n    // * `hidden !important`\n    // In those cases, the scrollbar isn't shown\n    const overflowYStyle = window.getComputedStyle(ele).overflowY;\n    const isOverflowHidden = overflowYStyle.indexOf('hidden') !== -1;\n\n    return hasScrollableContent && !isOverflowHidden;\n};\n~~~\n"}),o.a.createElement(a.a,{slugs:["get-css-styles-of-an-element","get-the-first-scrollable-parent-of-an-element"]}))}}}]);
//# sourceMappingURL=posts-check-if-an-element-is-scrollable.749a662bb1853cb360fc.js.map