<template>
  <div>
    <tabbar>
      <tabbar-item>
        <span slot="icon" class="tabbar-icon tabbar-icon-a"></span>
        <span slot="label">收益</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="@/assets/images/yh-icon.png" alt="">
        <span slot="label">下挂馆长</span>
      </tabbar-item>
      <tabbar-item selected link="">
        <img slot="icon" src="@/assets/images/yh-icon.png" alt="">
        <span slot="label">馆内用户</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="@/assets/images/yh-icon.png" alt="">
        <span slot="label">邀请</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="@/assets/images/yh-icon.png" alt="">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>

    <x-header :left-options="{showBack: false}">
      <span class="left-title" slot="overwrite-left">银牌代理 <small>管理系统</small></span>
      <span href="#" slot="right"><x-icon type="ios-email"></x-icon></span>
    </x-header>

    <cell title="公告" class="notice">
      <marquee>
        <marquee-item>1111111111</marquee-item>
        <marquee-item>222</marquee-item>
        <marquee-item>33333</marquee-item>
      </marquee>
    </cell>

    <div class="user-action">

    </div>

    <section class="total-price">
      <div class="acc-note">累计收入（我的棋牌室收入+代理收入）</div>
      <div class="acc-money">￥79888</div>
      <div class="acc-stock">库存房卡数：9999</div>
    </section>

  </div>
</template>

<script>
import { Group, Cell, XHeader, Tabbar, TabbarItem, Marquee, MarqueeItem, Grid, GridItem } from 'vux'

export default {
  components: {
    Group,
    Cell,
    XHeader,
    Tabbar,
    TabbarItem,
    Marquee,
    MarqueeItem,
    Grid,
    GridItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style lang="less">
  .vux-header-right {
    a{
      color:white;
    }

  }
  .tabbar-icon {
    display:inline-block;
    width:27px;
    height:27px;
    background-image:url("../assets/images/icon/icon.png");
  }
  .tabbar-icon-a {
    //background-position:
  }
  .left-title {
    font-size:20px;
    color:white;
    small {
      color:#ddd;
      font-size:14px;
    }
  }

  .notice {
    .weui-cell__ft {
      color:#fd6060;
    }
  }
  .total-price {

  }
</style>
