<template>
  <section class="list">
    <div v-for="(item, index) in item" :key="index" class="list-item">
      <h2>
        <router-link class="art-header-link" :to="item.path">{{ item.title }}</router-link>
      </h2>
      <div v-html="item.excerpt"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'list',
  props: {
    item: {
      type: Array,
      default: () => []
    },
  }
}
</script>
