<template>
  <section class="inblock">
    <span v-for="(item, index) in value" :key="index" class="list-item">
      <a v-if="checkUrl(item.link)" :href="item.link" class="item-link" target="_blank">{{ item.text }}</a>
      <router-link v-else :to="item.link" class="item-link">{{ item.text }}</router-link>
    </span>
  </section>
</template>

<script>
import { checkUrl } from '../lib/util';

export default {
  name: 'nav-link',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
  },
  methods: {
    checkUrl
  }
}
</script>

<style lang="stylus" scoped>
.nav-link
  margin-left .5rem
  .list-item
    .item-link
      padding 0 .5rem
      font-size 1rem
      color $c-white
      line-height $s-header
    .router-link-exact-active,
    .router-link-active
      color $c-main
    &:nth-child(1)
      .router-link-active
        color $c-white
      .router-link-exact-active
        color $c-main
.footer-link
  .list-item
    margin-left .4rem
    &:before
      content ""
      display inline-block
      width .3rem
      height .3rem
      border-radius 50%
      background $c-white
      vertical-align middle
    &:nth-child(1)
      &:before
        content none
    .item-link
      margin-left .4rem
      font-size .7rem
      color $c-white
      font-weight 100
</style>
