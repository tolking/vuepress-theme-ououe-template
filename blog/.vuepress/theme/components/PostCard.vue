<template>
  <section class="card article-card">
    <!-- Article title -->
    <h2>
      <router-link class="art-header-link"
        :to="post.path">{{ post.title }}</router-link>
    </h2>
    <!-- Article overview -->
    <div v-html="post.excerpt"></div>
  </section>
</template>

<script>
export default {
  name: 'post-card',
  props: ['post']
};
</script>
