<template>
  <div>
    <section class="statistical">
      <p class="acc-title">累计收益：￥69999999</p>
      <p class="acc-price">待提现金额：￥9999</p>
    </section>

    <section class="today-st">


      <div class="today-st-box">
        <div class="today-title" style="margin-top:10px;">截至目前，我的棋牌室收入中，不同游戏的收益占比</div>
        <div class="chart">
          <pie
            :the-data="[{num:100, name: '麻将', color: '#ffc000'}, {num:900, name: '三张', color: '#ed7d31'}]"
            :width="80"
            :height="80"></pie>
        </div>
        <div class="today-date">
          <flexbox>
            <flexbox-item>
              <x-icon type="ios-time-outline" style="float:left; fill:#fd7651;"></x-icon>（2017年8月2日）
            </flexbox-item>
            <flexbox-item>
              今日收入（元）：300
            </flexbox-item>
          </flexbox>
        </div>

        <flexbox class="today-data">
          <flexbox-item>
            <strong class="num-data">555</strong>
            <p class="str-des">新增馆长（人）</p>
          </flexbox-item>
          <flexbox-item>
            <strong class="num-data">555</strong>
            <p class="str-des">馆内用户（人）</p>
          </flexbox-item>
          <flexbox-item>
            <strong class="num-data">555</strong>
            <p class="str-des">当前在线（人）</p>
          </flexbox-item>
        </flexbox>
        <flexbox class="today-data">
          <flexbox-item>
            <strong class="num-data">555</strong>
            <p class="str-des">进货额（元）</p>
          </flexbox-item>
          <flexbox-item>
            <strong class="num-data">555</strong>
            <p class="str-des">销售额（元）</p>
          </flexbox-item>
          <flexbox-item>
            <strong class="num-data">555</strong>
            <p class="str-des">桌卡消费（张）</p>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="today-st-box">
        <div class="today-title">下挂馆长的累计数据</div>
        <flexbox class="today-data">
          <flexbox-item>
            <strong class="num-data">555</strong>
            <p class="str-des">当前馆长总数（人）</p>
          </flexbox-item>
          <flexbox-item>
            <strong class="num-data">555</strong>
            <p class="str-des">馆内用户总数（人）</p>
          </flexbox-item>
        </flexbox>
        <flexbox class="today-data">
          <flexbox-item>
            <strong class="num-data">￥2345.00</strong>
            <p class="str-des">本月代理业务收益</p>
          </flexbox-item>
          <flexbox-item>
            <strong class="num-data">￥2345.00</strong>
            <p class="str-des">馆内用户总数（人）</p>
          </flexbox-item>
        </flexbox>
        <div class="viewPro">
          <router-link to="agent_income_history">查看代理业务历史收入</router-link>
        </div>
      </div>

      <div class="today-st-box">
        <div class="today-title">今日馆内用户消费榜单</div>
        <div class="xtable" style="padding-left:5px; padding-right:5px;">
          <x-table full-bordered style="margin-bottom:10px;">
            <thead>
            <tr style="background-color: #F7F7F7">
              <th>下挂馆长</th>
              <th>创收</th>
              <th>销售额</th>
              <th>馆内用户</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>
                <span class="dirctor-title">小李飞刀</span>
                <small>ID:123456789</small>
              </td>
              <td>9000</td>
              <td>600</td>
              <td>60</td>
            </tr>
            <tr>
              <td>
                <span class="dirctor-title">小李飞刀</span>
                <small>ID:123456789</small>
              </td>
              <td>9000</td>
              <td>600</td>
              <td>60</td>
            </tr>
            <tr>
              <td>
                <span class="dirctor-title">小李飞刀</span>
                <small>ID:123456789</small>
              </td>
              <td>9000</td>
              <td>600</td>
              <td>60</td>
            </tr>
            </tbody>
          </x-table>
        </div>

        <div class="viewPro">
          <router-link to="consumer_list">查看更多</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import { Masker, Flexbox, FlexboxItem, Divider, XTable } from 'vux'
  import Pie from '@/components/Pie'
  export default {
    name: 'statistical',
    components: {
      Masker,
      Flexbox,
      FlexboxItem,
      Divider,
      XTable,
      Pie
    }
  }
</script>

<style scoped lang="less">
  .statistical {
    padding:10px;
    margin-top:10px;
    background-color: #fd7651;
    color:#fff;
  }
  .today-date {
    padding:10px 5px;
    font-weight:bold;
    color:#fd7651;
  }
  .today-st {
    .today-title {
      padding:5px;
      margin-left:5px;
      margin-bottom:5px;
      font-weight:bold;
      border-left:3px solid #fd7651;
    }
    .today-data {
      text-align:center;
      font-size:12px;
      p {
        width:100%;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;
        color:#999;
      }
      strong {
        font-size:18px;
      }
      .vux-flexbox-item {
        margin-bottom:10px;
      }
      .vux-flexbox-item {
        height:60px;
      }
    }
    .viewPro {
      text-align:center;
      margin-bottom:10px;
      a {
        font-size:14px;
        color:#fd7651;
      }
    }
  }
  .chart {
    margin-left:15px;
    margin-right:15px;
  }
</style>
