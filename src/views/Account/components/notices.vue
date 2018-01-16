<template>
  <div>
    <div class="notice">
      <cell title="公告">
        <marquee :item-height="22">
          <marquee-item>升级银牌代理，更多收益，更多权限。</marquee-item>
          <marquee-item>升级银牌代理，更多收益，更多权限。</marquee-item>
        </marquee>
      </cell>
    </div>
  </div>
</template>

<script>
  import { Group, Cell, Marquee, MarqueeItem } from 'vux'
  export default {
    name: 'notices',
    components: {
      Group,
      Cell,
      Marquee,
      MarqueeItem
    }
  }
</script>

<style scoped>

</style>
