(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{l3HO:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),a=t.n(o),l=t("TJpk"),s=t("Ov9x"),c=t("2G++");n.default=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(l.Helmet,null,a.a.createElement("meta",{name:"keywords",content:"scrollTo, scroll to top"})),a.a.createElement(s.a,{content:"\nIn general, you can scroll to a point whose coordinates indicates the distance from it to the top and left side of document:\n\n~~~ javascript\nwindow.scrollTo(pageX, pageY);\n~~~\n\nSo, the following code scrolls to top of the page:\n\n~~~ javascript\nwindow.scrollTo(0, 0);\n~~~\n\n## Use cases\n\n1. You can add a button at the bottom of page that allows user to scroll to the top quickly.\n\n2. In a single page application, where page is built on top of components, and users usually don't realize the page changes\nwhen navigating to other page.\n\nThe browser keeps the current scroll position. We have to scroll to the top when users change page. The following sample code\nis used in the layout of a React application using the [React Router](https://github.com/ReactTraining/react-router):\n\n~~~ javascript\nimport { useLocation } from 'react-router-dom';\n\nexport default ({ children }) => {\n    const { pathname } = useLocation();\n\n    useEffect(() => {\n        window.scrollTo(0, 0);\n    }, [pathname]);\n\n    return (\n        ...\n    );\n};\n~~~\n"}),a.a.createElement(c.a,{slugs:["scroll-to-an-element"]}))}}}]);
//# sourceMappingURL=posts-scroll-to-top-of-the-page.b8f36deba0140692e656.js.map