<template>
  <section class="flex-w main list">
    <router-link v-for="(item, index) in item" :key="index" :to="item.path"
      :class="{ 'no-image': !item.frontmatter.image }"
      class="flex-y list-item">
      <div :style="{'background-image': `url(${item.frontmatter.image})`}" class="item-img"></div>
      <div class="flex-y item-content">
        <h2 class="content-title">{{ item.title }}</h2>
        <div v-html="item.excerpt" class="content-text"></div>
      </div>
    </router-link >
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

<style lang="stylus" scoped>
.list
  position relative
  z-index 2
  margin-top 2rem
  min-height "calc(100vh - 6.1rem - %s)" % $headerHeight
  .list-item
    flex: 1 1 300px;
    margin 0 .8rem 2rem
    min-height $listCardHeight
    border-radius .5rem
    box-shadow 0 1px 10px $shadowColor
    background $whiteColor
    overflow hidden
    transition transform .5s ease-in-out
    &:hover
      transform scale3d(1.02, 1.02, 1)
      transition transform .5s ease-in-out
      .item-content
        .content-title:after
          transform scaleX(1)
          transition transform .5s ease-out
    .item-img
      flex: 1 1 auto;
      width 100%
      height ($listCardHeight / 1.5)
      background-size cover
      background-position center
    .item-content
      padding 1rem
      .content-title
        font-size 1rem
        color $titleColor
        line-height 2rem
        font-weight bold
        white-space nowrap
        overflow hidden
        text-overflow ellipsis
        &:after
          content ""
          display block
          margin-left 5%
          width 90%
          height .1rem
          background $mainColor
          transform scaleX(0)
          transition transform .5s ease-out
      .content-text
        margin-top .5rem
        max-height $listCardHeight
        overflow hidden
        font-size .8rem
        color $textColor
        line-height 1.2rem
.cover-list
  margin-top -2rem
  min-height "calc(100vh - 2.1rem - %s)" % $coverHeight
@media (min-width $phoneWidth)
  .home-list
    .list-item:nth-child(6n+1):not(.no-image)
      flex: 1 1 100%;
      flex-direction: row;
      .item-img
        height 100%
      .item-content
        flex: 0 1 45%
@media (max-width $phoneWidth)
  .list
    .list-item
      margin 0 0 1rem
</style>
