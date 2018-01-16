<template>
    <div>
      <tab v-model="index01" prevent-default @on-before-index-change="switchTabItem">
        <tab-item selected>邀请好友加入我的棋牌室</tab-item>
        <tab-item>邀请好友做馆长</tab-item>
      </tab>
      <swiper v-model="index01" height="100px" :show-dots="false">
        <swiper-item key="0">
          <div class="tab-swiper vux-center">Container1</div>
        </swiper-item>
        <swiper-item key="1">
          <div class="tab-swiper vux-center">Container2</div>
        </swiper-item>
      </swiper>
    </div>
</template>

<script>
  import { XHeader, ButtonTab, ButtonTabItem, Tab, TabItem, Sticky, Swiper, SwiperItem } from 'vux'
  export default {
    name: 'index',
    components: {
      XHeader,
      ButtonTab,
      ButtonTabItem,
      Tab,
      TabItem,
      Sticky,
      Swiper,
      SwiperItem
    },
    methods: {
      switchTabItem (index) {
        this.index01 = index
      }
    },
    data () {
      return {
        index01: 0
      }
    }
  }
</script>

<style scoped>

</style>
