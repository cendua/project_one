<template>
  <div>
    <van-nav-bar title="购物街" :fixed="true" :border="false"></van-nav-bar>
    <div class="scroll">
      <!-- 轮播图 -->
      <home-swiper :banner="banner"></home-swiper>
      <!-- 推荐 -->
      <recommend :recommend="recommend"></recommend>
      <!-- 本周流行 -->
      <feature-view></feature-view>
      <!-- 吸顶导航 -->
      <van-sticky :offset-top="45">
        <tab-control :title="['流行', '新款', '精选']" @titleChange="titleChange"></tab-control>
      </van-sticky>
      <!-- 商品栏 -->
      <goods-list :goods="goods[currentType].list"></goods-list>
      <!-- 返回顶部 -->
      <backTotop></backTotop>
    </div>
  </div>
</template>

<script>
//? 网络请求
import { getHomeMultidata, getHomeGoods } from '@/network/home.js'
//? 主页组件
import HomeSwiper from './Childcomps/HomeSwiper.vue'
import Recommend from './Childcomps/Recommend.vue'
import FeatureView from './Childcomps/FeatureView.vue'
//?通用组件
import TabControl from '@/components/content/TabControl.vue'
import GoodsList from '@/components/content/goods/GoodsList.vue'
import backTotop from '@/components/content/backTotop.vue'

export default {
  data() {
    return {
      banner: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currentType: 'pop' //默认当前渲染类型
    }
  },
  components: {
    HomeSwiper,
    Recommend,
    FeatureView,
    TabControl,
    GoodsList,
    backTotop
  },

  mounted() {
    //?获取后端传来的图片,渲染banner和recommend
    const resOfmutidata = getHomeMultidata()
    resOfmutidata.then(result => {
      this.banner = result.data.banner
      this.recommend = result.data.recommend
    })
    //?主动调用封装好的商品请求函数
    this.getGoods('pop')
    this.getGoods('new')
    this.getGoods('sell')
    //?添加滚动到底发送请求
    document.addEventListener('scroll', this.scrollMoreData, false)
  },
  methods: {
    //?切换商品列表
    titleChange(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
      }
    },
    //?请求商品数据
    getGoods(type) {
      var page = this.goods[type].page + 1
      getHomeGoods(type, page).then(reason => {
        console.log(reason)
        this.goods[type].list.push(...reason.data.list)
        this.goods[type].page++
        // console.log(this.goods[type].list)
      })
    },
    //?加载新的页的商品
    scrollMoreData() {
      const scrollTopHeight = document.documentElement.scrollTop
      const clienHeight = document.documentElement.clientHeight
      const offsetHeight = document.querySelector('.scroll').offsetHeight
      if (scrollTopHeight + clienHeight - 46 + 50 >= offsetHeight) {
        this.getGoods(this.currentType)
        // console.log('触底了')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.van-nav-bar {
  background-color: #ff8a9d;
}
.van-nav-bar__title {
  color: #fff;
}
</style>
