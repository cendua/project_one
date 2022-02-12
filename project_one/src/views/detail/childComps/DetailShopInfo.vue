<template>
  <div class="detail_shop_info">
    <div class="shop">
      <!-- <img src="" alt="" /> -->
      <img :src="'data:png/image;base64,' + shopInfo.img" alt="" />
      <div class="name">{{ shopInfo.name }}</div>
    </div>
    <div class="describe">
      <div class="left">
        <div class="num">
          <div class="top">{{ shopInfo.sells }}</div>
          <p>总数量</p>
        </div>
        <div class="baby">
          <div class="top">{{ shopInfo.fans }}</div>
          <p>全部宝贝</p>
        </div>
      </div>
      <div class="right">
        <div class="item_info" v-for="(item, index) in shopInfo.score" :key="index">
          <span>{{ item.name }}</span>
          <span class="better_color,branch">{{ item.score }}</span>
          <span class="evaluate" :class="{ better_bg: item.isBetter }">{{ item.isBetter ? '高' : '低' }}</span>
        </div>
      </div>
    </div>
    <div class="btn">
      <button>进店逛逛</button>
    </div>
    <!-- <div>{{ shopInfo }}</div> -->
  </div>
</template>

<script>
export default {
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.detail_shop_info {
  margin-top: 1rem;
  // background-color: yellow;
  display: flex;
  flex-direction: column;
  border-top: 0.06rem solid #f5f4f7;
  .shop {
    display: flex;
    align-items: center;
    padding-top: 0.24rem;
    img {
      width: 3rem;
      height: 3rem;
      margin: 0 1rem;
      border-radius: 100%;
      border: 1px solid red;
    }
    .name {
      font-size: 1.02rem;
      color: #989898;
    }
  }
  .describe {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    margin-left: 0.8rem;
    margin-top: 0.8rem;
    .left {
      display: flex;
      justify-content: space-between;
      .top {
        font-weight: bold;
        font-size: 1.22rem;
      }
      p {
        font-size: 1rem;
        margin-top: 0.1rem;
      }
      .baby {
        padding: 0 0.4rem;
        border-right: 2px solid #f4f4f4;
      }
    }
    .right {
      // background-color: yellow;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 7.2rem;
      height: 4.5rem;
      font-size: 0.8rem;
      margin-right: 0.3rem;
      .item_info {
        display: flex;
        justify-content: space-between;
        .branch {
          color: #67914b;
        }
        .better_color {
          color: #67914b;
        }
        .better_bg {
          background-color: #67914b !important;
        }
        .evaluate {
          background-color: red;
          color: white;
          padding: 0 3px;
        }
      }
    }
  }
  .btn {
    width: 100vw;
    height: 2rem;
    text-align: center;
    border-bottom: 00.06rem solid #f8f8f8;
    // color: red;
    button {
      align-self: center;
      width: 4rem;
      height: 1rem;
      font-size: 0.8rem;
      border: none;
      border-radius: 10px;
      color: #85868b;
      background-color: #f1f8fb;
      margin: 00.4rem 0;
    }
  }
}
</style>
