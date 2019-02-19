<template>
  <section class="page">
    <app-header class="cover-header">
      <header-cover></header-cover>
    </app-header>
    <list></list>
    <info></info>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';
import HeaderCover from '../components/HeaderCover.vue';
import List from '../components/List.vue';
import Info from '../components/Info.vue';

export default {
  name: 'page',
  components: {
    AppHeader,
    AppFooter,
    HeaderCover,
    List,
    Info
  },
  created() {
    console.log(this.$site);
    console.log(this.$page);
    // console.log(this.$pagination);
  }
};
</script>
