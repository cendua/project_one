<template>
  <div class="title">
    <!-- <span v-for="(item, index) in title" :key="index" :class="0 === this.controlIndex ? 'active' : ''" @click="controlChange(0)">lala</span> -->
    <span v-for="(item, index) in title" :key="index" @click="controlChange(index)" :class="controlIndex === index ? 'active' : ''">{{ item }}</span>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      controlIndex: 0
    }
  },
  methods: {
    controlChange(index) {
      this.controlIndex = index
      // 给home.vue传数据，表示商品种类
      this.$emit('titleChange', index)
    }
  }
}
</script>

<style lang="less" scoped>
.title {
  height: 3rem;
  font-size: 1.2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  .active {
    color: #ef232f;
    border-bottom: 3px solid #ef232f;
    line-height: 32px;
  }
}
</style>
