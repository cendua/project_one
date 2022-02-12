<template>
  <div class="goods">
    <goods-list-item :goodsItem="goods[index]" v-for="(item, index) in goods" :key="index"> </goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodListItem.vue'
export default {
  name: 'GooodsList',
  props: {
    goods: {
      type: Array,
      default() {
        return []
      }
    }
  },
  updated() {
    // console.log(this.goods instanceof Object)
    // console.log(this.goods)
  },
  components: {
    GoodsListItem
  }
}
</script>

<style lang="less" scoped>
.goods {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 3rem;
}
</style>
