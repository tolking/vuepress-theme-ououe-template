module.exports = {
  title: 'Theme',
  description: 'theme for Vuepress',
  base: '/',
  theme: 'ououe',
  themeConfig: {
    cover: '/cover.jpg',
    logo: '/logo.png',
    search: true,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated'
    },
    nav: [{
      text: 'Home',
      link: '/'
    }, {
      text: 'Posts',
      link: '/posts/'
    }, {
      text: 'About',
      link: '/about/'
    }],
    footer: [{
      text: 'Github',
      link: 'https://github.com/tolking'
    }]
  }
}
