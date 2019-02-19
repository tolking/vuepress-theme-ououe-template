<template>
  <section class="latout">
    <app-header class="cover-header">
      <header-cover></header-cover>
    </app-header>
    <list :item="posts"></list>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';
import HeaderCover from '../components/HeaderCover.vue';
import List from '../components/List.vue';

import { splitPages } from '../lib/util';
export default {
  name: 'layout',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    List
  },
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
    }
  },
  created() {
    // console.log(this);
    console.log(this.$site);
    // console.log(this.$page);
    // console.log(this.$pagination);
    
    // splitPages(this.$site.pages)
  }
}
</script>
