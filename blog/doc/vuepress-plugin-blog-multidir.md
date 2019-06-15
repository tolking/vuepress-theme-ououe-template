---
title: vuepress-plugin-blog-multidir
display: home
image: https://picsum.photos/1920/1080/?random&date=2019-03-09
date: 2019-03-09
tags:
  - vue
  - vuepress
  - vuepress-plugin-blog-multidir
categories:
  - documentation
--- 

> Blog plugin for vuepress

**This plugin is for Vuepress 1.0**

<!-- more -->

The [@vuepress/plugin-blog](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-blog) only supports one folder, but I want more.

## Installation

``` sh
yarn add vuepress-plugin-blog-multidir
// or
npm i vuepress-plugin-blog-multidir
```

## Usage

``` js
module.exports = {
  plugins: [
    'blog-multidir'
  ]
}
```

[ Vuepress documentation](https://v1.vuepress.vuejs.org/plugin/using-a-plugin.html)


## Options

### aliasesRoot
- Type: `string`
- default: `:root`

**Can't have the same name as your folder.**

For internal use only.

### categoryIndexPageUrl
- Type: `string`
- Default: `/category/`

### tagIndexPageUrl
- Type: `string`
- Default: `/tag/`

### categoryLayout
- Type: `string`
- Default: `Tag`

### tagLayout
- Type: `string`
- Default: `Tag`

### postLayout
- Type: `string`
- Default: `Page`

### postsDir
- Type: `string`, `array`, `Object`
- Default: `posts`

Configures the permalink generated for you folder.

example
``` js
postsDir = 'posts'
// or
postsDir = ['posts1', 'posts2', 'posts3']
// or { path: permalink }
postsDir = {
  posts1: ':year',
  posts2: ':month',
  posts3: ':slug'
}
```

### permalink
- Type: `string`, `boolean(false)`
- Default: `false`

See [Permalinks](https://v1.vuepress.vuejs.org/guide/permalinks.html#template-variables) for a list of valid variables.

### postsSorter
- Type: `function`
- Default: 
``` js
((prev, next) => {
  const prevTime = new Date(prev.frontmatter.date).getTime()
  const nextTime = new Date(next.frontmatter.date).getTime()
  return prevTime - nextTime > 0 ? -1 : 1
})
```

### paginationDir
- Type: `boolean`, `string`, `array`
- Default: `true`

### paginationLimit
- Type: `number`
- Default: `12`

### paginatioPath
- Type: `string`
- Default: `/page/`

## computed

### $pluginConfig

### $tags

### $categories

### $lists

### $list

``` js
{
  pageKeys,
  pagination,
  path,
  posts
}
```

Here's the paging list data you need.

## attention

**You don't need to create a `index.md(or README.md)` file in a folder that needs Pagination**

```
+- blog
  +- posts
    +- test.md
    ...
  ...
  +- about
    +- index.md
```

or set `layout`

``` md
// about -> index.md

---
layout: Page
---
```

You need to use `display` to control where the current article is displayed

``` md
// posts -> test.md

---
display: home
---
```

A list of home pages will displayed。

``` md
// posts -> test.md

---
display: none
---
```

It will not be displayed.

However, you can still access it through the right path.

## License

[MIT](http://opensource.org/licenses/MIT)

## Keywords

vue vuepress plugin blog blog-multidir
