<template>
  <div class="params_info">
    <div class="explain">{{ paramsInfo.key1 }}</div>
    <table class="rule">
      <tr v-for="(item, index) in paramsInfo.info" :key="index">
        <td v-for="(item1, index1) in item" :key="index1">{{ item1 }}</td>
      </tr>
    </table>
    <div class="explain">{{ paramsInfo.key2 }}</div>
    <table class="info">
      <tr v-for="(item, index) in paramsInfo.rule" :key="index">
        <td class="left">{{ Object.keys(item)[0] }}</td>
        <dt class="right">{{ Object.values(item)[0] }}</dt>
      </tr>
    </table>
    <!-- <div>{{ paramsInfo }}</div> -->
  </div>
</template>

<script>
export default {
  name: 'DetailParamsInfo',
  props: {
    paramsInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.params_info {
  .explain {
    font-size: 0.36rem;
    margin: 0 0 0.3rem 0.3rem;
  }
  .rule {
    border-top: 0.06rem solid #ebebeb;
    padding: 0.3rem;
    width: 100vw;
    font-size: 0.32rem;
    tr {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #ebebeb;
      line-height: 0.88rem;
    }
  }
  .info {
    border-top: 0.06rem solid #ebebeb;
    font-size: 0.32rem;
    padding: 0 0.3rem;
    tr {
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ebebeb;
      padding: 0.3rem 0;
      .left {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        height: 20px;
        flex-grow: 3;
      }
      .right {
        font-size: 0.26rem;
        color: #f02430;
      }
    }
  }
}
</style>
