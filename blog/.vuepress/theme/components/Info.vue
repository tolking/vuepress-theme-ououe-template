<template>
  <section :style="{'background-image': `url(${$frontmatter.image})`}"
    :class="{'no-bg': !$frontmatter.image}"
    class="info">
    <div class="main info-main">
      <div class="info-header">
        <h1 class="header-title">{{ $page.title }}</h1>
      </div>
      <Content/>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="stylus" scoped>
.info
  padding-top ($coverHeight / 1.6)
  background-size cover
  background-position center
  background-attachment fixed
  .info-main
    min-height "calc(100vh - 4.1rem - %s)" % $headerHeight
    box-shadow 0px 0px 8px $shadowColor
    background $whiteColor
    .info-header
      padding 3rem 0 1rem
      text-align center
      .header-title
        font-size 2rem
        color $blackColor
        font-weight bold
        text-shadow $shadowColor
.no-bg
  padding-top 0
</style>
