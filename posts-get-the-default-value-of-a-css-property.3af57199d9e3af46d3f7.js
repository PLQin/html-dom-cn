(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{PPwg:function(e,t,n){"use strict";n.r(t);var o=n("q1tI"),r=n.n(o),l=n("Ov9x"),a=n("2G++");t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{content:"\nThe function below returns the default value of CSS `property` for given `tagName`:\n\n~~~ javascript\nconst getDefaultProperty = function(tagName, property) {\n    // Create new element\n    const ele = document.createElement(tagName);\n\n    // Append to the body\n    document.body.appendChild(ele);\n\n    // Get the styles of new element\n    const styles = window.getComputedStyle(ele);\n\n    // Get the value of property\n    const value = styles.getPropertyValue(property);\n\n    // Remove the element\n    document.body.removeChild(ele);\n\n    // Return the value of property\n    return value;\n};\n~~~\n\n> ## Good to know\n>\n> The [getComputedStyle()](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle) method\n> returns the _live_ styles of given element.\n> It means that it's updated automatically if the element styles are changed.\n> \n> That's why we need to get the value of property before removing the element.\n> The following code doesn't return the correct value:\n>\n> ~~~ javascript\n> ...\n> const styles = window.getComputedStyle(ele);\n> document.body.removeChild(ele);\n>\n> // Always return \"\" because the element is already \n> // removed from the document\n> return styles.getPropertyValue(property);\n> ~~~\n\nWe can use it, for example, to get the default font size of `div` tag:\n\n~~~ javascript\ngetDefaultProperty('div', 'font-size');\n\n// Or\ngetDefaultProperty('div', 'fontSize');\n~~~\n"}),r.a.createElement(a.a,{slugs:["get-css-styles-of-an-element"]}))}}}]);
//# sourceMappingURL=posts-get-the-default-value-of-a-css-property.3af57199d9e3af46d3f7.js.map