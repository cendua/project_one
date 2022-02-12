<template>
  <div class="bt" @click="backTotop">
    <img src="@/assets/img/common/top.png" alt="" />
  </div>
</template>

<script>
export default {
  name: 'backTotop',
  methods: {
    backTotop() {
      // document.documentElement.scrollTop = 0
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }
  }
}
</script>

<style scoped lang="less">
.bt {
  position: fixed;
  bottom: 2.5rem;
  right: 0.1rem;
  // width: 50%;
  img {
    width: 70%;
  }
}
</style>
