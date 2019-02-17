module.exports = ({ comments = {} }) => ({
  layoutDir: 'layouts',
  plugins: [
    ['@vuepress/back-to-top'],
    ['@vuepress/blog'],
    ['@vuepress/search'],
  ]
})
