<template>
  <div class="home">
    <view-box ref="viewBox" body-padding-top="46px" body-padding-bottom="55px">
      <x-header
        :left-options="{showBack: false}"
        :title="'棋牌室 管理系统'"
        class="index-header"
      >
        <span slot="right" class="user-message" v-on:click="toMessage">
          <x-icon type="ios-email-outline" size="30"></x-icon>
          <badge></badge>
        </span>
        <span slot="left" class="change-identity">
          <button-tab>
            <button-tab-item selected>馆长</button-tab-item>
            <button-tab-item>代理</button-tab-item>
          </button-tab>
        </span>
      </x-header>
      <tabbar>
        <tabbar-item link="/account" selected>
          <span slot="icon"></span>
          <span slot="label">收益</span>
        </tabbar-item>
        <tabbar-item  link="/customer">
          <span slot="icon"></span>
          <span slot="label">用户</span>
        </tabbar-item>
        <tabbar-item link="/invitation">
          <span slot="icon"></span>
          <span slot="label">邀请</span>
        </tabbar-item>
        <tabbar-item link="/mine">
          <span slot="icon"></span>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
      <transition :name="'vux-pop-in'">
        <keep-alive>
          <router-view style="width:100%;"></router-view>
        </keep-alive>
      </transition>

    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, Tabbar, TabbarItem, Badge, ButtonTab, ButtonTabItem } from 'vux'
export default {
  components: {
    ViewBox,
    XHeader,
    Tabbar,
    TabbarItem,
    Badge,
    ButtonTab,
    ButtonTabItem
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  methods: {
    toMessage: function () {
      this.$router.push('/message')
    }
  }
}
</script>

<style lang="less">
  #app, html, body {
    width:100%;
    height:100%;
    overflow-x:hidden;
    font-size:14px;
  }
  .home {
    height:100%;
    .vux-header {
      position:absolute;
      top:0;
      left:0;
      z-index:100;
      width:100%;
    }
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    transition: all 500ms;
    height: 100%;
    top: 46px;
    position: absolute;
    backface-visibility: hidden;
    perspective: 1000;
  }
  .vux-pop-out-enter {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .vux-pop-out-leave-active {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-enter {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
  .vux-pop-in-leave-active {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
  .user-message {
    position:relative;
    top:-6px;
    .vux-x-icon {
      fill: #fff;
    }
    .vux-badge {
      position:absolute;
      top:-12px;
    }
  }
  .vux-header.index-header .vux-header-left {
    top:8px !important;
  }
  .vux-header-left {
    .change-identity {
      .vux-button-tab-item {
        margin-right:0;
        padding-left:5px;
        padding-right:5px;
        background-color:#3b424b;
        color:white;
        font-size:12px;
        &.vux-button-group-current {
          background-color:#282c32;
          font-weight:bold;
        }
      }
    }
    .vux-button-group > a.vux-button-tab-item-first:after,
    .vux-button-group > a.vux-button-tab-item-last:after{
      border:1px solid #222;
    }

  }

</style>
