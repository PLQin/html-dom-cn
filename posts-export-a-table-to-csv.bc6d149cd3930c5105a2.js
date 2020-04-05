(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{nztC:function(e,n,t){"use strict";t.r(n);var o=t("q1tI"),l=t.n(o),a=t("mcK/"),c=t("Ov9x"),r=t("2G++");n.default=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(c.a,{content:"\nAssume that we have a `table` element and a `button` for exporting the table cells to CSV as following:\n\n~~~ html\n<table id=\"exportMe\" class=\"table\">\n    ...\n</table>\n\n<button id=\"export\">Export</button>\n~~~\n\n## Export the table cells to CSV\n\nThe function below exports all the cells of `table` to CSV format. First, we [select](/select-an-element-or-list-of-elements) all the rows,\n[loop](/loop-over-a-nodelist) over them and export each row to CSV.\n\nIn each row, we go through all cells, and retrive their [text content](/get-the-text-content-of-an-element).\n\n~~~ javascript\nconst toCsv = function(table) {\n    // Query all rows\n    const rows = table.querySelectorAll('tr');\n\n    return [].slice.call(rows)\n        .map(function(row) {\n            // Query all cells\n            const cells = row.querySelectorAll('th,td');\n            return [].slice.call(cells)\n                .map(function(cell) {\n                    return cell.textContent;\n                })\n                .join(',');\n        })\n        .join('\\n');\n};\n~~~\n\n## Download the CSV\n\nThe function below creates a fake `a` element whose content is `text` and triggers the `click` event.\nFor more information, you can visit the [Download a file](/download-a-file) post.\n\n~~~ javascript\nconst download = function(text, fileName) {\n    const link = document.createElement('a');\n    link.setAttribute('href', `data:text/csv;charset=utf-8,${encodeURIComponent(text)}`);\n    link.setAttribute('download', fileName);\n\n    link.style.display = 'none';\n    document.body.appendChild(link);\n\n    link.click();\n\n    document.body.removeChild(link);\n};\n~~~\n\nThe last thing is to connect all pieces together. We just need to [handle](/attach-or-detach-an-event-handler) the `click` event of the _Export_ button:\n\n~~~ javascript\nconst table = document.getElementById('exportMe');\nconst exportBtn = document.getElementById('export');\n\nexportBtn.addEventListener('click', function() {\n    // Export to csv\n    const csv = toCsv(table);\n\n    // Download it\n    download(csv, 'download.csv');\n});\n~~~\n"}),l.a.createElement(a.a,{src:"/demo/export-a-table-to-csv/index.html"}),l.a.createElement(r.a,{slugs:["attach-or-detach-an-event-handler","download-a-file","get-the-text-content-of-an-element","loop-over-a-nodelist","select-an-element-or-list-of-elements"]}))}}}]);
//# sourceMappingURL=posts-export-a-table-to-csv.bc6d149cd3930c5105a2.js.map