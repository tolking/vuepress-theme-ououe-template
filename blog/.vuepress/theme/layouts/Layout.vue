<template>
  <section class="latout">
    <app-header class="cover-header">
      <div v-if="coverImg"
        :style="{'background-image': `url(${coverImg})`}"
        class="flex-ccc header-cover">
        <h1 class="cover-title">
          <img v-if="logoImg" :src="logoImg" class="title-img"/>
          <span v-else class="title-text">{{ $site.title }}</span>
        </h1>
        <h2 class="cover-text">{{ $site.description }}</h2>
      </div>
    </app-header>
    <hr>
    <div class="posts-list">
      <post-card v-for="(item, index) in posts" :key="index" :post="item"></post-card>
    </div>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';
import PostCard from '../components/PostCard.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
    PostCard
  },
  name: 'layout',
  computed: {
    posts() {
      return this.$site.pages.filter(item => {
        if (this.$site.base === this.$page.path) {
          return item.frontmatter.display === 'home'
        } else {
          return item.path.includes(this.$page.path)
            && item.frontmatter.display !== 'none'
        }
      })
    },
    coverImg() {
      return this.$site.themeConfig.cover
    },
    logoImg() {
      return this.$site.themeConfig.logo
    }
  },
  created() {
    console.log(this.$site);
    console.log(this.$page);
  }
}
</script>

<style lang="stylus" scoped>
.cover-header
  height $s-cover
.header-cover
  position absolute
  top 0
  bottom 0
  left 0
  right 0
  z-index 1
  width 100%
  height 100%
  background-size cover
  background-position center
  .cover-title
    .title-img
      height ($s-cover / 5)
    .title-text
      font-size 2rem
      color $c-white
  .cover-text
    font-size 1.2rem
    color $c-white
@media (max-width $s-phone)
  .cover-header
    height 100vh
</style>
