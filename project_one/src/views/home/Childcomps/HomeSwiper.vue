<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banner" :key="index" lazy-render>
        <img :src="'data:image/png;base64,' + item.img" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    banner: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      pics: ''
    }
  }
}
</script>

<style lang="less" scoped>
.van-swipe-item {
  height: 11rem;
  color: #fff;
  background-color: #39a9ed;
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
