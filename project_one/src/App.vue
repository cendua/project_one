<template>
  <div id="app">
    <router-view></router-view>
    <tab-footer v-if="isDetail"></tab-footer>
  </div>
</template>

<script>
import TabFooter from '@/components/common/TabFooter.vue'
export default {
  name: 'App',
  components: {
    TabFooter
  },
  data() {
    return {
      isDetail: true
    }
  },
  watch: {
    //?如果是detail则移除footer
    '$route.path': function (newval) {
      if (newval.split('/')[1] === 'detail') this.isDetail = false
      else this.isDetail = true
    }
  }
}
</script>

<style lang="less" scoped></style>
