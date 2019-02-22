# vuepress-themem-blog

A blog theme for VuePress by tolking

> This theme is for Vuepress 1.x which is currently in alpha

Live Demo: [My Blog](https://ououe.com)

User [vuepress-theme-blog-template](https://github.com/tolking/vuepress-theme-blog-template) to starter

---

## Installation

``` sh
npm install -d vuepress-theme-blog
```

## Configuration

.vuepress/config.js
``` js
module.exports = {
  theme: 'blog',
  description: 'Vuepress-theme-blog',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  themeConfig: {
    cover: '/cover.jpg',
    logo: '/logo.png',
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts/'
    }, {
      text: 'About',
      link: '/about.html'
    }],
    footer: [{
      text: 'Github',
      link: 'https://github.com/tolking'
    }]
  }
}
```

# Structure directores

```
+- blog
  +- .vuepress
    +- config.js
  +- posts
    +- index.md
    +- XXX.md
    ...
  +- about.md
  +- index.md
  ...
```

## Matters needing attention

- 

## License
[MIT](http://opensource.org/licenses/MIT)
