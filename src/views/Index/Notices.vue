<template>
  <section class="notice">
    <flexbox>
      <flexbox-item :span="2" class="notice-tip">
        <x-icon type="ios-volume-high"></x-icon> 公告
      </flexbox-item>
      <flexbox-item class="notice-content">
        <marquee>
          <marquee-item>升级代理</marquee-item>
          <marquee-item>升级代理</marquee-item>
          <marquee-item>升级代理</marquee-item>
        </marquee>
      </flexbox-item>
    </flexbox>
  </section>
</template>

<script>
  import { Marquee, MarqueeItem, Flexbox, FlexboxItem } from 'vux'

  export default {
    components: {
      Marquee,
      MarqueeItem,
      Flexbox,
      FlexboxItem
    },
    data () {
      return {}
    }
  }
</script>

<style scoped lang="less">
  .notice {
    padding:5px;
    font-size:14px;
    .vux-x-icon {
      float:left;
    }
    .notice-tip {
      color:#595757;
    }
    .notice-content {
      color:#fd6060;
    }
  }
</style>
