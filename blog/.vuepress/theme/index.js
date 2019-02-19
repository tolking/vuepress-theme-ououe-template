module.exports = ({ comments = {} }) => ({
  layoutDir: 'layouts',
  plugins: [
    '@vuepress/back-to-top',
    // ['@vuepress/blog', {
    //   postsDir: 'posts',
    //   permalink: '/posts/:slug' // bug：使用 /:regular 无法生成 /posts 下文件
    // }],
    '@vuepress/medium-zoom',
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    // '@vuepress/last-updated',
    // ['@vuepress/pagination', {
    //   perPagePosts: 10
    // }],
  ]
})
