# vuepress-theme-ououe-template

up to vuepress 1.3.3

## Structure directores

```
+- blog
  +- .vuepress
    +- config.js
  +- posts
    +- test.md
    ...
  +- about
    +- index.md
  ...
```

**You don't need to create a `index.md(or README.md)` file in a folder that needs Pagination**

or set `layout`

``` md
// about -> index.md

---
layout: Page
---
```

## frontmatter

``` md
// posts -> test.md

---
title: How to use
display: home
image: ...
date: 2019-02-22
tags:
  - vuepress
  - vuepress-themt-ououe
categories: 
  - blog
--- 
```

You need to use `display` to control where the current article is displayed

``` md
// posts -> test.md

---
display: home
---
```

A list of home pages will displayed.

``` md
// posts -> test.md

---
display: none
---
```

It will not be displayed.

However, you can still access it through the right path.

## Other

### [theme config](https://github.com/tolking/vuepress-theme-ououe)

### Partitioning some function into [vuepress-plugin-blog-multidir](https://github.com/tolking/vuepress-plugin-blog-multidir)

You can change the default options.

``` js
// .vuepress -> config.js
module.exports = {
  theme: 'ououe',
  themeConfig: {
    // ...
  },
  plugins: [
    ['blog-multidir', {
      // ...
    }]
  ]
}
```

[default options](https://github.com/tolking/vuepress-plugin-blog-multidir)

### Change theme

```
+- blog
  +- .vuepress
    +- styles
      +- palette.styl
      +- index.styl
```

#### palette.styl

If you wish to apply simple color overrides to the styling of the [default preset](https://github.com/tolking/vuepress-theme-ououe/blob/master/styles/palette.styl) or define some color variables for using later.

#### index.styl

add styles

[Theme Inheritance](https://v1.vuepress.vuejs.org/theme/inheritance.html)


`` bash
# install dependencies
$ yarn install
# or
$ npm install

# serve with hot reload at localhost:8080
$ yarn dev
# or
$ npm run dev

# build for production
$ yarn build
# or
$ npm run build
```


## License
[MIT](http://opensource.org/licenses/MIT)


## Keywords

vue vuepress theme ououe blog template
