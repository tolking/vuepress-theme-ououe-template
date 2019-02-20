module.exports = {
  layoutDir: 'layouts',
  plugins: [
    // ['@vuepress/blog', {
      //   postsDir: 'posts',
      //   permalink: '/posts/:slug' // bug：使用 /:regular 无法生成 /posts 下文件
      // }],
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/search',
    '@vuepress/plugin-nprogress',
    // '@vuepress/last-updated',
    // ['@vuepress/pagination', {
    //   perPagePosts: 10
    // }],
    [
      (pluginOptions, context) => ({
        name: 'add-layout',
        extendPageData($page) {
          if (!$page.frontmatter.layout && $page.regularPath.includes('.html')) {
            $page.frontmatter.layout = 'Page';
          }
        }
      })
    ]
  ]
}
