<template>
  <section>
    <app-header></app-header>
    <hr>
    <div class="posts-list">
      <post-card v-for="(item, index) in posts" :key="index" :post="item"></post-card>
    </div>
  </section>
</template>

<script>
import AppHeader from '../components/Header.vue';
import PostCard from '../components/PostCard.vue';

export default {
  components: {
    AppHeader,
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
  },
  created() {
    console.log(this.$site);
    console.log(this.$page);
  }
}
</script>
