<template>
  <div class="comment_info">
    <div class="user">
      <img :src="'data:image/png;base64,' + commentInfo.img" alt="" />
      <div class="name">{{ commentInfo.username }}</div>
    </div>
    <div class="comment">
      <p>{{ commentInfo.content }}</p>
      <div class="center">
        <span class="data">{{ commentInfo.date }}</span>
        <span>我是stayle</span>
      </div>
      <div class="img">
        <img :src="'data:image/png;base64,' + item" alt="" v-for="(item, index) in commentInfo.list" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'commentInfo',
  props: {
    commentInfo: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style lang="less" scoped>
.comment_info {
  margin-top: 0.4rem;
  border-top: 0.06rem solid #ececec;
  padding: 3rem 0.3rem;
  .user {
    display: flex;
    align-items: center;
    img {
      width: 3rem;
      height: 3rem;
      border: 1px solid #f5f4f7;
      border-radius: 0.3rem 0.3rem 0 0;
    }
    .name {
      font-size: 0.8rem;
      font-weight: bold;
    }
  }
  .comment {
    p {
      margin-top: 0.6rem;
      font-size: 0.6rem;
      line-height: 0.8rem;
    }
    .center {
      font-size: 0.5rem;
      color: gray;
      line-height: 0.64rem;
      .data {
        margin-right: 0.3rem;
      }
    }
    .img {
      img {
        width: 5rem;
        height: 5rem;
      }
    }
  }
}
</style>
