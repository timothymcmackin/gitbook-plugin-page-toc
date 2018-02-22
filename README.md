# gitbook-plugin-page-toc-optional

This plugin adds a table of contents (TOC) to each page in your Gitbook.
It has the following enhancements on top of aleung's [page-toc](https://github.com/aleung/gitbook-plugin-page-toc) plugin:
- You can set whether the TOC appears on all pages by default.
- You can enable or disable the TOC on individual pages to override the default.

## Install

Add the plugin to your `book.json`:

``` json
    {
      "plugins": [ "page-toc-optional" ],
      "pluginsConfig": {
         "selector": ".markdown-section h1, .markdown-section h2, .markdown-section h3, .markdown-section h4",
         "position": "before-first",
         "showByDefault": true
      }
    }
```

## Use

To show a TOC in one of your pages, either set the `showByDefault` parameter to `true` in your `book.json`, or add a tag to an individual page with the class "showToc", like this: `<div class="showToc"></div>`.

If you have the `showByDefault` parameter set to `true` and you want to hide the TOC on a page, add a tag with the class "hideToc", like this: `<div class="showToc"></div>`.

Tip: When I put `<div class="showToc"/>` on a line by itself, such as one the second line, just after the page title, Gitbook wraps the entire page within that div.
This doesn't happen if I use the full tag, like this: `<div class="showToc"></div>`.
However, it seems to be OK to use the closed tag at the end of another line, such as at the end of the H1 at the top of the page.

The page-specific tags override the `showByDefault` parameter.

## Configuration

- `showByDefault`: Whether to show the TOC on all pages by default.
Default value is `true`.
- `selector` : CSS selector to select the elements to put anchors on
  - Default: `.markdown-section h1, .markdown-section h2, .markdown-section h3, .markdown-section h4`,
    which include headings from level 1 to level 4.
- `position` : Position of TOC
  - Allowed values:
    - `before-first` _(default)_ : Before the first heading
    - `top` : On top of the page

## CSS Customization

The TOC elements have class attribute `.page-toc`. You can override the styles in `styles/website.css`.
