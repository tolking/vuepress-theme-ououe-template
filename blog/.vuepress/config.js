module.exports = {
  title: 'Theme',
  description: 'theme for Vuepress',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }]
  ],
  theme: 'ououe',
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
