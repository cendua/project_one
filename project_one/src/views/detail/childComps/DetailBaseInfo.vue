<template>
  <div>
    <h5 class="title">{{ goodsInfo.title }}</h5>
    <div class="price">
      <span class="new_price">{{ '￥' + goodsInfo.price }}</span>
      <span class="old_price">{{ '￥' + goodsInfo.lowNowPrice }}</span>
      <span class="discount">{{ goodsInfo.discountDesc }}</span>
    </div>
    <div class="columns">
      <span>销量{{ columns.sell_num }}</span>
      <span>收藏{{ columns.fav }}</span>
      <span>{{ columns.type }}</span>
    </div>
    <div class="services">
      <div class="services_item" v-for="(item, index) in services.name" :key="index">
        <img :src="'data:png/image;base64,' + services.img" alt="" />
        <span>{{ item }}</span>
      </div>
    </div>
    <!-- <div>{{ services }}</div> -->
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {}
      }
    },
    columns: {
      type: Object,
      default() {
        return {}
      }
    },
    services: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped>
.title {
  font-size: 0.8rem;
  margin: 0.2rem 0;
}
.price {
  display: flex;
  align-items: 1rem 0;
  margin: 0.3rem 0;
  .new_price {
    font-size: 1.6rem;
    color: #f02430;
  }
  .old_price {
    font-size: 1.3rem;
    color: gray;
    margin: 0 10px;
    align-self: flex-end;
    text-decoration: line-through;
  }
  .discount {
    line-height: 300%;
    font-size: 0.1rem;
    color: white;
    padding: 0.1rem;
    background-image: linear-gradient(to right, #f02430, #f9615e);
    border-radius: 0.5rem;
    height: 1.5rem;
    // margin-top: ;
  }
}
.columns {
  display: flex;
  justify-content: space-between;
  span {
    line-height: 2.6rem;
    color: gray;
    font-size: 0.8rem;
  }
}
.services {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f3f5f4;
  height: 1rem;
  .services_item {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 1rem;
    img {
      width: 1rem;
    }
    span {
      font-size: 0.72rem;
    }
  }
}
</style>
