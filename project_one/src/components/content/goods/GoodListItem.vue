<template>
  <div class="goods_item_list" @click="itemDetail">
    <img :src="'data:image/png;base64,' + this.goodsItem.img" />
    <p>{{ goodsItem.title }}</p>
    <div class="price">
      <p class="price_goods">{{ goodsItem.price }}</p>
      <p><van-icon name="star" />{{ goodsItem.cfav }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  methods: {
    itemDetail() {
      // console.log('diannji')
      // 编程式导航
      this.$router.push(`/detail/${this.goodsItem.id}`)
    }
    // imgLoad() {
    //   this.$bus.$emit('itemImgLoad')
    // }
  },
  computed: {
    showImg() {
      return this.goodsItem.img
    }
  }
}
</script>

<style lang="less" scoped>
.goods_item_list {
  display: flex;
  width: 46vw;
  flex-direction: column;
  padding: 0 2vw;
  img {
    width: 100%;
    border-radius: 0.1rem;
  }
  p {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    font-size: 0.2rem;
    padding: 0 0.08rem;
    margin-top: 0.1rem;
  }
  .price {
    display: flex;
    justify-content: center;
    margin: -0.1rem 0rem 0.1rem 0rem;
    .price_goods {
      color: #ef232f;
    }
  }
}
</style>
