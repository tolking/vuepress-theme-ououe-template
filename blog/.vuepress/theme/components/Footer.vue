<template>
  <footer class="footer">
    <div class="flex-bc main footer-main">
      <router-link :to="$site.base"
        class="copyright">{{ $site.title + " &copy; " + year }}</router-link>
      <nav-link v-if="links" :value="links" class="footer-link"></nav-link>
    </div>
  </footer>
</template>

<script>
import NavLink from './NavLink.vue';

export default {
  components: {
    NavLink
  },
  computed: {
    links() {
      return this.$site.themeConfig.footer;
    },
    year() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style lang="stylus" scoped>
.footer
  height ($s-cover / 4)
  background $c-black
  .footer-main
    padding-top 1rem
    .copyright
      font-size .8rem
      color $c-white
      font-weight 100
</style>
