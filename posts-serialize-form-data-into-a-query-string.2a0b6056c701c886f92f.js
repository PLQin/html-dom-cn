(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{RtIH:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),l=t.n(o),a=t("TJpk"),i=t("Ov9x"),c=t("2G++");n.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(a.Helmet,null,l.a.createElement("meta",{name:"keywords",content:"encodeURIComponent, serialize form data"})),l.a.createElement(i.a,{content:"\nThe following function serializes the form data which consists of names and values of its fields:\n\n~~~ javascript\nconst serialize = function(formEle) {\n    // Get all fields\n    const fields = [].slice.call(formEle.elements, 0);\n\n    return fields\n        .map(function(ele) {\n            const name = ele.name;\n            const type = ele.type;\n            \n            // We ignore\n            // - field that doesn't have a name\n            // - disabled field\n            // - `file` input\n            // - unselected checkbox/radio\n            if (!name ||\n                ele.disabled ||\n                type === 'file' ||\n                (/(checkbox|radio)/.test(type) && !ele.checked))\n            {\n                return '';\n            }\n\n            // Multiple select\n            if (type === 'select-multiple') {\n                return ele.options\n                    .map(function(opt) {\n                        return opt.selected\n                            ? `${encodeURIComponent(name)}=${encodeURIComponent(opt.value)}`\n                            : '';\n                    })\n                    .filter(function(item) {\n                        return item;\n                    })\n                    .join('&');\n            }\n\n            return `${encodeURIComponent(name)}=${encodeURIComponent(ele.value)}`;\n        })\n        .filter(function(item) {\n            return item;\n        })\n        .join('&');\n};\n~~~\n\nNote that we [convert](/loop-over-a-nodelist) the collection of form elements to array by\n\n~~~ javascript\nconst fields = [].slice.call(formEle.elements, 0)\n~~~\n"}),l.a.createElement(c.a,{slugs:["loop-over-a-nodelist","submit-a-form-with-ajax"]}))}}}]);
//# sourceMappingURL=posts-serialize-form-data-into-a-query-string.2a0b6056c701c886f92f.js.map