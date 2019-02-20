<template>
  <section class="flex-w main list">
    <router-link v-for="(item, index) in item" :key="index" :to="item.path" class="list-item">
      <div :style="{'background-image': `url(${item.frontmatter.image})`}" class="item-img"></div>
      <div class="item-content">
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
  },
  created() {
    console.log(this.item);
    
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
    margin-right 2%
    width 32%
    height $listCardHeight
    border-radius .5rem
    box-shadow 0 1px 10px $shadowColor
    background $whiteColor
    overflow hidden
    &:nth-child(3n)
      margin-right 0
    .item-img
      width 100%
      height 60%
      background-size cover
      background-position center
    .item-content
      padding 1rem
      .content-title
        font-size 1rem
        color $titleColor
        font-weight bold
      .content-text
        font-size .8rem
        color $textColor
.cover-list
  margin-top -2rem
  min-height "calc(100vh - 2.1rem - %s)" % $coverHeight
@media (max-width $mainWidth)
  .list
    .list-item
      margin-right 2%
      width 48%
      &:nth-child(2n)
        margin-right 0
@media (max-width $phoneWidth)
  .list
    .list-item
      margin-bottom .6rem
      margin-right 0
      width 100%
      height ($listCardHeight / 2)
      .item-img
        display inline-block
        vertical-align top
        width 56%
        height 100%
      .item-content
        display inline-block
        vertical-align top
        padding 0.5rem 0.2rem
        width 40%
</style>

