<template>
  <section class="page">
    <app-header></app-header>
    <div class="card">
      <div class="content-header">
        <h1 class="page-title">{{ $page.title }}</h1>
      </div>
      <Content/>
    </div>
    <app-footer></app-footer>
  </section>
</template>

<script>
import AppHeader from '../components/Header.vue';
import AppFooter from '../components/Footer.vue';

export default {
  components: {
    AppHeader,
    AppFooter
  },
  created() {
    console.log(this.$site);
    console.log(this.$page);
  }
};
</script>
