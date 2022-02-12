<template>
  <div class="pay">
    <van-submit-bar :price="totalPay * 100" :button-text="goodsTotal" @submit="onSubmit">
      <van-checkbox v-model="isCheckAll" @click="checkChangeAll">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  name: 'cartPay',
  computed: {
    totalPay() {
      return this.$store.state.cartList
        .filter(item => {
          return item.isCheck
        })
        .reduce((total, item2) => {
          return total + item2.price * item2.count
        }, 0)
    },
    goodsTotal() {
      return '提交订单' + '(' + this.$store.state.cartList.length + ')'
    },
    isCheckAll() {
      if (this.$store.state.cartList.length === 0) {
        return false
      } else {
        return this.$store.state.cartList.every(item => {
          return item.isCheck === true
        })
      }
    }
  },
  methods: {
    onSubmit() {},
    checkChangeAll() {
      if (this.isCheckAll) {
        this.$store.state.cartList.forEach(item => {
          return (item.isCheck = false)
        })
      } else {
        this.$store.state.cartList.forEach(item => {
          return (item.isCheck = true)
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-submit-bar {
  margin-bottom: 2.5rem;
  // position: absolute;
  // bottom: 0rem;
  .van-submit__bar {
    border-top: 1px solid #f9f9f9;
  }
}
</style>
