module.exports = {
  title: 'Theme',
  description: 'theme for Vuepress',
  base: '/',
  dest: 'dist/',
  theme: 'ououe',
  themeConfig: {
    defaultTheme: 'dark',
    cover: '/cover.jpg',
    logo: '/logo.png',
    search: true,
    pageGroup: 5,
    postTime: {
      createTime: 'Create Time',
      lastUpdated: 'Last Updated'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Posts', link: '/posts/' },
      { text: 'Doc', link: '/doc/' },
      { text: 'Tags', link: '/tag/' },
      { text: 'Categories', link: '/category/' },
      { text: 'About', link: '/about/' }
    ],
    footer: [
      { text: 'Github', link: 'https://github.com/tolking' }
    ]
  },
  postcss: {
    plugins: [
      require('css-prefers-color-scheme/postcss'),
      require('autoprefixer')
    ]
  }
}
