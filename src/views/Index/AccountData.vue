<template>
  <div>
    <section class="data">
      <button-tab>
        <button-tab-item selected>
          <span>我的棋牌室数据</span>
        </button-tab-item>
        <button-tab-item><span class="vux-reddot-s">代理数据</span></button-tab-item>
      </button-tab>
      <div class="my-qipai-data">
        <flexbox>
          <flexbox-item>
            <div class="today-date">今日（2017年8月2日）</div>
            <div class="today-income">
              <strong>50</strong>
              <p>新增用户数</p>
            </div>
            <div class="today-income">
              <strong>50</strong>
              <p>新增用户数</p>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="month-income">
              本月收入：￥200
            </div>
            <div class="today-income">
              <strong>50</strong>
              <p>新增用户数</p>
            </div>
            <div class="today-income">
              <strong>50</strong>
              <p>新增用户数</p>
            </div>
          </flexbox-item>
        </flexbox>
      </div>

      <div class="acc-history">
        <flexbox>
          <flexbox-item>
            <x-button plain mini type="primary">管内用户消费榜单</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button plain mini type="primary">棋牌室历史收入</x-button>
          </flexbox-item>
        </flexbox>
      </div>
    </section>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, XButton, ButtonTab, ButtonTabItem } from 'vux'
  export default {
    components: {
      Flexbox,
      FlexboxItem,
      XButton,
      ButtonTab,
      ButtonTabItem
    }
  }
</script>

<style scoped lang="less">
  .data {
    margin-top:10px;
    padding:10px;
    .vux-button-group {
      > a.vux-button-group-current {
        background-color:#a67759;
        &:after {
          border-color:#a67759;
        }
      }
      > a.vux-button-tab-item-last:after, > a.vux-button-tab-item-first:after {
        border-color:#a67759;
      }
    }
  }
</style>
