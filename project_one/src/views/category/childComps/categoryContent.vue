<template>
  <div class="category_content">
    <div class="title">
      <div :class="{ active: index === countIndex }" v-for="(item, index) in categoryList" :key="index" @click="change(index, item)">{{ item.title }}</div>
    </div>
    <div class="content">
      <div v-for="(item, index) in cateContentList" :key="index">
        <img :src="'data:image/png;base64,' + item" alt="" />
        <p>接口不想写了</p>
      </div>
    </div>
  </div>
</template>

<script>
import { getSubCategory } from '@/network/cartgory.js'
export default {
  name: 'categoryContent',
  props: {
    categoryList: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      countIndex: 0,
      maitkey: 1,
      cateContentList: []
    }
  },

  methods: {
    change(index, item) {
      this.countIndex = index
      console.log(item)
      this.qingqiushuju(index)
    },

    qingqiushuju(maitkey) {
      getSubCategory(maitkey).then(res => {
        console.log('我是结果', res)
        this.cateContentList = res.data.list.list
      })
    }
  },
  created() {
    this.qingqiushuju(this.maitkey)
  }
}
</script>

<style lang="less" scoped>
.category_content {
  margin-top: 46px;
  overflow: hidden;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  .title {
    background-color: #f7f7f7;
    text-align: center;
    float: left;
    overflow: auto;
    width: 30%;
    height: 100%;
    div {
      line-height: 1.3rem;
      font-size: 0.8rem;
    }
    div:hover {
      cursor: pointer;
    }
    .active {
      background-color: #ffffff;
      border-left: 3px solid #ff8a9d;
    }
  }
  .content {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    float: left;
    overflow: auto;
    width: 70%;
    height: 100%;
    div {
      img {
        width: 6rem;
        height: 6rem;
      }
      p {
        font-size: 0.76rem;
      }
    }
  }
}
</style>
