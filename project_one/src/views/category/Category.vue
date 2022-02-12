<template>
  <div class="category">
    <category-tab></category-tab>
    <category-content :categoryList="categoryList"></category-content>
  </div>
</template>

<script>
//引入组件
import categoryTab from './childComps/categoryTab.vue'
import categoryContent from './childComps/categoryContent.vue'
//引入请求
import { getCategory } from '@/network/cartgory.js'
export default {
  name: 'Category',
  components: { categoryTab, categoryContent },
  props: {},
  data() {
    return {
      categoryList: []
    }
  },
  created() {},
  mounted() {
    const result = getCategory()
    result.then(res => {
      // console.log(res)
      this.categoryList = res.data.category.list
    })
  },
  methods: {}
}
</script>

<style></style>
