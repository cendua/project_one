<template>
  <div class="feature_view">
    <a href="http://act.mogujie.com/zzlx67" target="blank">
      <!-- <img :src="img" @load="featerLoad" /> -->
      <img :src="img" />
    </a>
  </div>
</template>
<script>
export default {
  name: 'FeatureView',
  data() {
    return {
      img: require('@/assets/img/home/OIP-C.jpg')
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.feature_view {
  a {
    display: block;
    width: 100vw;
    height: 11.5rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
