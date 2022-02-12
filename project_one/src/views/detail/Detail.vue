<template>
  <div class="detail">
    <!-- 导航栏 -->
    <van-nav-bar class="detail_nav" left-text="返回" title="标题" left-arrow @click-left="onClickLeft" fixed>
      <div slot="title" class="title">
        <span :class="{ active: index === myindex }" v-for="(item, index) in title" :key="index" @click="changeIndex(index)">{{ item }}</span>
      </div>
    </van-nav-bar>
    <scroll @pulldown="pulldown">
      <!-- 轮播图 -->
      <detail-swiper :detailSwiper="detailSwiper"></detail-swiper>
      <!-- 基本信息 -->
      <base-info :goodsInfo="detailBaseInfo[0]" :columns="columns[0]" :services="services[0]"></base-info>
      <!-- 店铺信息 -->
      <detail-shop-info :shopInfo="shopInfo[0]"></detail-shop-info>
      <!-- 商品图片 -->
      <detail-image-info :detaiInfo="detailInfo[0]"></detail-image-info>
      <!-- 商品参数 -->
      <detail-params-info :paramsInfo="paramsInfo" ref="paramsInfo"></detail-params-info>
      <!-- 商品评论 -->
      <detail-comment-info :commentInfo="commentInfo" ref="commentInfo"></detail-comment-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <detail-comment-info :commentInfo="commentInfo"></detail-comment-info>
      <!-- 商品推荐 -->
      <goods-list :goods="recommend" ref="recommend"></goods-list>
    </scroll>
    <!-- 底部商品导航 -->
    <detail-footer-bar @addCart="addCart"></detail-footer-bar>
  </div>
</template>

<script>
//?引入组件
import Scroll from '@/components/common/Scroll.vue'
import DetailSwiper from './childComps/DetailSwiper.vue'
import BaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailImageInfo from './childComps/DetailImageInfo.vue'
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import GoodsList from '../../components/content/goods/GoodsList.vue'
import DetailFooterBar from './childComps/DetailFooterBar.vue'

//?引入请求方法
import { getDetail, getRecommend } from '@/network/detail.js'

export default {
  components: { DetailSwiper, BaseInfo, DetailShopInfo, DetailImageInfo, DetailParamsInfo, Scroll, DetailCommentInfo, GoodsList, DetailFooterBar },
  name: 'Detail',
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      myindex: 0,
      detailSwiper: [],
      detailBaseInfo: {},
      columns: {},
      services: {},
      shopInfo: {},
      detailInfo: {},
      paramsInfo: {},
      commentInfo: {},
      recommend: [],
      refs_offsetTop: [0] //各个部分距顶距离，用于指定滚动位置
    }
  },
  created() {
    this.fasongqingqiu()
  },
  mounted() {
    setTimeout(() => {
      this.refs_offsetTop.push(this.$refs.paramsInfo.$el.offsetTop)
      this.refs_offsetTop.push(this.$refs.commentInfo.$el.offsetTop)
      this.refs_offsetTop.push(this.$refs.recommend.$el.offsetTop)
    }, 40)
  },
  methods: {
    //?回退
    onClickLeft() {
      this.$router.go(-1)
    },
    //?切换
    changeIndex(index) {
      this.myindex = index
      console.log(this.$refs)
      window.scrollTo({
        top: this.refs_offsetTop[index],
        behavior: 'smooth'
      })
      console.log(this.refs_offsetTop)
    },
    //?发送请求
    fasongqingqiu() {
      const result = getDetail(this.$route.params.id)
      result.then(res => {
        //?轮播图
        this.detailSwiper = res.data.result.ItemInfo
        //?基本信息
        console.log(res.data.result)
        this.detailBaseInfo = res.data.result.baseInfo
        //?销售额，收藏数,默认快递
        this.columns = res.data.result.columns
        //?服务
        this.services = res.data.result.services
        //?商店信息
        this.shopInfo = res.data.result.shopInfo
        //?图片详情
        this.detailInfo = res.data.result.imgInfo
        //?详细参数
        this.paramsInfo = res.data.result.paramsInfo[0]
        //?评论
        this.commentInfo = res.data.result.commentInfo[0]
      })
      const recommend = getRecommend()
      recommend.then(res => {
        console.log(res)
        this.recommend = res.data.data.recommend
      })
    },
    //?下拉刷新
    pulldown() {
      console.log('下拉一次，我就发一次')
      this.fasongqingqiu()
    },
    //?加入购物车
    addCart() {
      console.log('加入购物车')
      // const
      const product = {}
      console.log(this.detailInfo)
      product.img = 'data:image/png;base64,' + this.detailSwiper[0].img
      product.title = this.detailBaseInfo[0].title
      product.price = this.detailBaseInfo[0].price
      product.desc = this.detailInfo[0].des
      product.id = this.$route.params.id
      this.$store.dispatch('addProduct', product)
      console.log(this.$store)
    }
  }
}
</script>

<style lang="less" scoped>
.detail {
  padding-bottom: 2rem;
}

.van-icon::before {
  color: gray;
}

.title {
  width: 11rem;
  display: flex;
  justify-content: space-around;
  color: gray;
  font-size: 0.8rem;
}

.active {
  color: #ef232f;
}
</style>
