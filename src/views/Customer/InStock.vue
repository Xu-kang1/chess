<template>
  <div>
    <x-header>进货</x-header>
    <section class="container">
      <div class="unit-panel">
        <router-link class="history" to="">进货历史</router-link>
        <div class="unit-panel-wrap">
          <h3>进货价：</h3>
          <div class="stock-note">
            200元1份=300张房卡
          </div>
        </div>
      </div>

      <div class="choice">
        <div style="text-align:center;">
          <p style="font-size:16px; margin:10px;">请输入购买分数：</p>
          <inline-x-number width="100px" button-style="round" :min="0"></inline-x-number>
        </div>
        <x-button type="primary" style="margin-top:15px;">确定</x-button>
      </div>
    </section>
  </div>
</template>

<script>
  import { XHeader, Masker, InlineXNumber, XButton } from 'vux'
  export default {
    name: 'in-stock',
    components: {
      XHeader,
      Masker,
      InlineXNumber,
      XButton
    }
  }
</script>

<style scoped lang="less">
  .container {
    padding:10px;
    .unit-panel {
      position:relative;
      padding:30px 10px;
      color:#fff;
      border-radius:5px;
      background-color:#fd7651;
      .history {
        position:absolute;
        top:10px;
        right:15px;
        color:white;
        font-size:14px;
      }
      .unit-panel-wrap {
        width: 80%;
        margin: 0 auto;
        h3 {
          font-weight:normal;
        }
        .stock-note {
          text-align:center;
          font-size:26px;
          border-bottom:1px solid #fff;
        }
      }
    }
  }

  .choice {
    .vux-number-round .vux-number-selector-sub,
    .vux-number-round .vux-number-selector-plus {
      border:1px solid #fd7651;
      color:#fd7651;
    }
    backgournd-color:#fff;
  }

</style>
