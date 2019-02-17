module.exports = {
  title: 'Theme',
  description: 'theme for Vuepress',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false
    }
  },
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
      text: 'Latest Posts',
      link: '/posts/'
    }, {
      text: 'Github',
      link: 'https://github.com/tolking'
    }]
  }
}
