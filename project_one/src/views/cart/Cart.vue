<template>
  <div class="cart">
    <van-nav-bar title="购物车" left-arrow @click-left="back" fixed></van-nav-bar>
    <div v-if="$store.state.cartList.length > 0">
      <div class="cart_list" v-for="(item, index) in cartList" :key="index">
        <van-checkbox v-model="item.isCheck"></van-checkbox>
        <van-card :price="item.price" :num="item.count" :desc="item.desc" :title="item.title" :thumb="item.img"></van-card>
      </div>
    </div>
    <div class="img">
      <img :src="img" alt="" v-if="cartList.length === 0" />
    </div>
    <cart-pay></cart-pay>
  </div>
</template>

<script>
import cartPay from './childComps/cartPay.vue'
export default {
  components: { cartPay },
  name: 'cart',
  data() {
    return {
      img: require('@/assets/img/gouwuc.jpg'),
      cartList: this.$store.state.cartList
    }
  },
  methods: {
    back() {
      this.$router.push('home')
    }
  }
}
</script>

<style lang="less" scoped>
.cart {
  // height: calc(100vh - 200px);
  height: 100vh;
  background-color: #f2f2f2;
  padding: 50px 0;
}
.van-nav-bar {
  background-color: #ff8e97;
}
.van-nav-bar__title {
  color: white;
  font-size: 16px;
}
.van-icon-arrow-left::before {
  color: white;
  font-size: 16px;
}
.van-card__title {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  line-height: 32px;
  font-size: 16px;
  font-weight: bold;
  margin: -8px 0 6px 0px;
}
.van-card__price {
  color: #f30600;
  font-weight: bold;
}
.cart_list {
  display: flex;
  justify-content: space-between;
  justify-items: center;
  width: 100vw;
  background-color: #fafafa;
  margin-top: 0.16rem;
  .van-checkbox {
    margin-left: 0.32rem;
  }
  .van-card {
    width: 90vw;
    right: 0;
    padding: 0.16rem 0.32rem 0.16rem 0.06rem;
    margin: 0px;
  }
}
.img {
  height: calc(100% - 96px);
  background-color: #f2f2f2;
  img {
    width: 100%;
  }
  div {
    width: 100%;
    height: 3rem;
    background-color: #f2f2f2;
  }
}
</style>
