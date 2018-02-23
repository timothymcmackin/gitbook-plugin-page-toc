module.exports = {
  book: {
    assets: "./assets",
    css: ["page-toc.css"],
    js: ["anchor-3.1.1.min.js","page-toc.js"]
  },
  hooks: {
    "page:before": function(page) {
        if (page['showToc']) {
        page.content = "# TOC: " + page['showToc'] + "\n" +page.content;
        }
        return page;
    }
  }
}
