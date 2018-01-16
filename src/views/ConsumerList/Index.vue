<template>
  <div>
    <x-header>
      馆内用户消费榜单
    </x-header>
    <div class="container">
      <div class="tab">
        <button-tab>
          <button-tab-item>日榜</button-tab-item>
          <button-tab-item selected>月榜</button-tab-item>
          <button-tab-item>总榜</button-tab-item>
        </button-tab>

        <div class="screen">
          <flexbox>
            <flexbox-item>
              <group>
                <calendar v-model="demo2" title="日期" disable-past></calendar>
              </group>
            </flexbox-item>
            <flexbox-item>2</flexbox-item>
          </flexbox>
        </div>
      </div>
    </div>

    <div class="item-list">
      <x-table :cell-bordered="false" style="background-color:#fff; color:#333;">
        <thead>
          <tr style="background-color:#fff;">
            <th>馆内用户</th>
            <th>总消费</th>
            <th>类型</th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td style="line-height:21px; padding-top:5px; padding-bottom:5px;">
            <badge text="1"></badge> 高陌陌<br>
            <span style="font-size:12px; color:#999;">ID：123456789</span>
          </td>
          <td>99999</td>
          <td>60600</td>
        </tr>
        <tr>
          <td style="line-height:21px; padding-top:5px; padding-bottom:5px;">
            <badge text="2"></badge> 高陌陌<br>
            <span style="font-size:12px; color:#999;">ID：123456789</span>
          </td>
          <td>99999</td>
          <td>60600</td>
        </tr>
        <tr>
          <td style="line-height:21px; padding-top:5px; padding-bottom:5px;">
            <badge text="3"></badge> 高陌陌<br>
            <span style="font-size:12px; color:#999;">ID：123456789</span>
          </td>
          <td>99999</td>
          <td>60600</td>
        </tr>
        </tbody>
      </x-table>
    </div>
  </div>
</template>

<script>
  import { XHeader, ButtonTab, ButtonTabItem, Flexbox, FlexboxItem, Calendar, Group, XTable, Badge } from 'vux'
  export default {
    name: 'index',
    components: {
      XHeader,
      ButtonTab,
      ButtonTabItem,
      Flexbox,
      FlexboxItem,
      Calendar,
      Group,
      XTable,
      Badge
    },
    data () {
      return {
        demo2: 'TODAY'
      }
    }
  }
</script>

<style scoped lang="less">
  .tab {
    padding: 10px;
    background-color:#fff;
    .vux-button-group {
      > a.vux-button-group-current {
        background-color:#fc7651;
      }
      > a.vux-button-tab-item-last:after,
        a.vux-button-tab-item-middle:after,
        a.vux-button-tab-item-first:after{
        border:1px solid #fc7651;
      }
    }
  }
  .screen {
    .weui-cells {
      &.vux-no-group-title {
        margin-top:0!important;
        font-size:12px;
      }
    }
  }
</style>
