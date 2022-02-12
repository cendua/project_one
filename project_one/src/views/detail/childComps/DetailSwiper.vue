<template>
  <div>
    <van-swipe class="detail_swiper" autoplay="2000">
      <van-swipe-item v-for="(item, index) in detailSwiper" :key="index">
        <img :src="'data:image/png;base64,' + item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'DetailSwiper',
  props: {
    detailSwiper: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.detail_swiper {
  // width: 100vw;
  width: 100%;
  height: 13rem;
  img {
    // width: 100vw;
    width: 100%;
    height: 100%;
  }
}
</style>
