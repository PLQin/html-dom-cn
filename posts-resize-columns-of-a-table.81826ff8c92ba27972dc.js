(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{P9V5:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),s=t.n(o),r=t("mcK/"),a=t("Ov9x"),l=t("2G++");n.default=function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(a.a,{content:"\nAssume that we want to resize any column of the following table:\n\n~~~ html\n<table id=\"resizeMe\" class=\"table\">\n    ...\n</table>\n~~~\n\n## Prepare the resizer\n\nFor each column, we insert a `div` element indicating that the associated column can be resized.\nThe resizer element is positioned absolutely inside the column. The CSS styles for them would be as below:\n\n~~~ css\n.table th {\n    position: relative;\n}\n.resizer {\n    /* Displayed at the right side of column */\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 5px;\n    cursor: col-resize;\n    user-select: none;\n}\n~~~\n\nTo [create](/create-an-element) resizers and [append](/append-to-an-element) them to columns, we have to [query](/select-an-element-or-list-of-elements)\nand [loop over](/loop-over-a-nodelist) all columns:\n\n~~~ javascript\n// Query the table\nconst table = document.getElementById('resizeMe');\n\n// Query all headers\nconst cols = table.querySelectorAll('th');\n\n// Loop over them\n[].forEach.call(cols, function(col) {\n    // Create a resizer element\n    const resizer = document.createElement('div');\n    resizer.classList.add('resizer');\n\n    // Set the height\n    resizer.style.height = `${table.offsetHeight}px`;\n\n    // Add a resizer element to the column\n    col.appendChild(resizer);\n\n    // Will be implemented in the next section\n    createResizableColumn(col, resizer);\n});\n~~~\n\n## Handle the resizer's events\n\nWe are going to implement a function, `createResizableColumn`,  which accepts two parameters:\n\n* `col` that represents the table header\n* `resizer` that represents the resizer element within the column\n\nIn order to allow user to resize `col`, we have to handle three events:\n\n* `mousedown` on the resizer: Track the current position of mouse\n* `mousemove` on `document`: Calculate how far the mouse has been moved, and adjust the width of the column\n* `mouseup` on `document`: Remove the event handlers of `document`\n\n~~~ javascript\nconst createResizableColumn = function(col, resizer) {\n    // Track the current position of mouse\n    let x = 0;\n    let w = 0;\n\n    const mouseDownHandler = function(e) {\n        // Get the current mouse position\n        x = e.clientX;\n\n        // Calculate the current width of column\n        const styles = window.getComputedStyle(col);\n        w = parseInt(styles.width, 10);\n\n        // Attach listeners for document's events\n        document.addEventListener('mousemove', mouseMoveHandler);\n        document.addEventListener('mouseup', mouseUpHandler);\n    };\n\n    const mouseMoveHandler = function(e) {\n        // Determine how far the mouse has been moved\n        const dx = e.clientX - x;\n\n        // Update the width of column\n        col.style.width = `${w + dx}px`;\n    };\n\n    // When user releases the mouse, remove the existing event listeners\n    const mouseUpHandler = function() {\n        document.removeEventListener('mousemove', mouseMoveHandler);\n        document.removeEventListener('mouseup', mouseUpHandler);\n    };\n\n    resizer.addEventListener('mousedown', mouseDownHandler);\n};\n~~~\n\n## Highlight the resizer\n\nWe can improve the user experience a little bit. When user hovers or clicks on the resizer, it can be hightlighted.\nTo demonstrate the idea in the most simple way, we add a solid border to the `:hover` selector:\n\n~~~ css\n.resizer:hover, .resizing {\n    border-right: 2px solid blue;\n}\n~~~\n\nThe `resizing` class is added to the resizer while user clicks and drags the resizer:\n\n~~~ javascript\nconst mouseDownHandler = function(e) {\n    ...\n    resizer.classList.add('resizing');\n};\n\nconst mouseUpHandler = function() {\n    ...\n    resizer.classList.remove('resizing');\n};\n~~~\n"}),s.a.createElement(r.a,{src:"/demo/resize-columns-of-a-table/index.html"}),s.a.createElement(l.a,{slugs:["add-or-remove-class-from-an-element","append-to-an-element","attach-or-detach-an-event-handler","create-an-element","get-css-styles-of-an-element","loop-over-a-nodelist","make-a-draggable-element","make-a-resizable-element","set-css-style-for-an-element"]}))}}}]);
//# sourceMappingURL=posts-resize-columns-of-a-table.81826ff8c92ba27972dc.js.map