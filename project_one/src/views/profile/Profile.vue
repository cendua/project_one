<template>
  <div class="my">
    <div class="header">
      <div class="title">我的信息</div>
      <div class="info">
        <img src="@/assets/img/profile/avatar.svg" alt="" />
        <div class="center">
          <p class="login">登录/注册</p>
          <p class="iphone"><van-icon name="=graphic"></van-icon>暂无绑定手机号</p>
        </div>
        <div class="i">
          <van-icon name="arrow"></van-icon>
        </div>
      </div>
    </div>
    <div class="detail">
      <div>
        <p><span>0.00</span>&nbsp;元</p>
        <p>我的余额</p>
      </div>
      <div class="cneter">
        <p><span>0</span>&nbsp;个</p>
        <p>我的优惠</p>
      </div>
      <div>
        <p><span>0</span>&nbsp;分</p>
        <p>我的积分</p>
      </div>
    </div>
    <div class="news">
      <div>
        <img src="@/assets/img/profile/message.svg" alt="" />
        <span>我的消息</span>
      </div>
      <div class="shop">
        <img src="@/assets/img/profile/pointer.svg" alt="" />
        <p>我的商城</p>
      </div>
      <div>
        <img src="@/assets/img/profile/vip.svg" alt="" />
        <p>会员卡</p>
      </div>
    </div>
    <div class="cart">
      <div>
        <img src="@/assets/img/profile/cart.svg" alt="" />
        <p>我的购物车</p>
      </div>
      <div>
        <img src="@/assets/img/profile/shopping.svg" alt="" />
        <p>下载购物APP</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scpoed>
.my {
  .header {
    padding: 0.2rem 0.2rem 0.4rem 0.2rem;
    height: 6rem;
    width: 100%;
    background-color: #ff8e96;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    .title {
      color: white;
      font-size: 1rem;
      margin: 0.5rem auto;
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: white;
      margin-top: 0.1rem;
      height: 4rem;
      img {
        width: 3rem;
        height: 3rem;
      }
      .center {
        display: block;
        margin-left: 1rem;
        width: 120vw;
        .login {
          font-size: 0.8rem;
          line-height: 0.5rem;
        }
        .iphone {
          line-height: 0.5rem;
          display: flex;
          align-items: center;
          font-size: 0.82rem;
        }
      }
      .i {
        font-size: 1rem;
      }
    }
  }
  .detail {
    display: flex;
    height: 4rem;
    border-bottom: 0.12rem solid #f2f2f2;
    .center {
      border-left: 1px solid #fafafa;
      border-right: 1px solid #fafafa;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex: 1;
      font-size: 0.8rem;
      p {
        span {
          color: #e67962;
          font-weight: bold;
        }
      }
    }
  }
  .news {
    font-size: 0.8rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 8rem;
    border-bottom: 0.6rem solid #f2f2f2;
    border-top: 0.6rem solid #f2f2f2;
    .shop {
      p {
        display: flex;
        align-items: center;
        width: calc(100% - 0.6rem);
        height: 100%;
        font-size: 0.8rem;
        border-top: 1px solid #f2f2f2;
        border-bottom: 1px solid #f2f2f2;
      }
    }
    div {
      flex: 1;
      display: flex;
      font-size: 0.8rem;
      img {
        margin-right: 0.2rem;
        width: 1rem;
        height: 1rem;
      }
    }
  }
  .cart {
    padding: 0 0.2rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    height: 2.1rem;
  }
  div {
    flex: 1;
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    img {
      width: 1rem;
      height: 1rem;
    }
    .app {
      display: flex;
      align-items: center;
      width: calc(100% - 0.6rem);
      height: 100%;
      border-top: 1px solid #f2f2f2;
    }
  }
}
</style>
