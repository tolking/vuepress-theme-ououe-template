<template>
  <section class="page">
    <app-header></app-header>
    <div class="card">
      <div class="content-header">
        <h1 class="page-title">{{ $page.title }}</h1>
      </div>
      <Content/>
    </div>
  </section>
</template>

<script>
import AppHeader from '../components/Header.vue';

export default {
  components: {
    AppHeader
  },
  created() {
    console.log(this.$site);
    console.log(this.$page);
  }
};
</script>
