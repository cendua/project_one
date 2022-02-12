<template>
  <div ref="wrapper" class="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import Pulldown from '@better-scroll/pull-down'
BScroll.use(Pulldown)

export default {
  name: 'Scroll',
  data() {
    return {
      scroll: ''
    }
  },
  props: {},
  mounted() {
    setTimeout(() => {
      this._initScroll()
    }, 20)
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        pullDownRefresh: true,
        click: true,
        probeType: 1,
        scrollY: true,
        bounceTime: 500
      })
      // console.log(this.scroll)
      //?下拉刷新
      this.scroll.on('touchEnd', () => {
        if (this.scroll.y > 30) {
          this.$emit('pulldown')
        }
      })
    },
    //?回到指定位置
    scrollTop(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time)
    }
  }
}
</script>

<style lang="less" scoped>
.wrapper {
  height: 50vh;
  // margin-bottom: 1rem;
  // background-color: red;
  .content {
    // background-color: aqua;
    height: 100vh;
    // margin-bottom: 1rem;
  }
}
</style>
