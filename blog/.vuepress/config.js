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
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts'
    },{
      text: 'About',
      link: '/about.html'
    }]
  }
}
