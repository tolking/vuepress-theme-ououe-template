<template>
  <section>
    <div class="card">
      <div class="content-header">
        <h1 class="page-title">{{ $page.title }}</h1>
      </div>
      <Content/>
      <!-- <div class="content page-nav" v-if="prev || next">
        <p class="inner">
          <span v-if="prev" class="prev">←
            <router-link v-if="prev" class="prev" :to="prev.path">{{ prev.title || prev.path }}</router-link>
          </span>
          <span v-if="next" class="next">
            <router-link v-if="next" :to="next.path">{{ next.title || next.path }}</router-link>→
          </span>
        </p>
      </div> -->
    </div>
  </section>
</template>

<script>
export default {
  name: 'post',
  created() {
    console.log(this.$site);
    console.log(this.$page);
  }
};
</script>
