<template>
  <div class="recommend">
    <div class="recommend_item" v-for="(item, index) in recommend" :key="index">
      <a :href="item.link" target="blank">
        <img :src="'data:png/image;base64,' + item.img" alt="" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: ['recommend'],
  methods: {}
}
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  justify-content: space-around;
  margin-top: 0.2rem;
  img {
    width: 20vw;
    height: 20vw;
  }
}
</style>
