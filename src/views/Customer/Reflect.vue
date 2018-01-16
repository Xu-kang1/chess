<template>
  <div>
    <x-header>提现</x-header>
    <section class="card-wrap">
      <div class="card-content">
        <router-link to="/withdrawal_history">提现历史</router-link>
        <div class="card-content-title"><x-icon type="ios-home" size="40" style="float:left; margin-right:5px; fill:#fff;"></x-icon>北京建设银行</div>
        <div class="card-content-number">
          4637************3384
        </div>
        <div class="card-content-info">
          <span to="" style="float:right; color:#fff;" @click="alert">更换银行卡</span>
          持卡人：**鱼
        </div>
      </div>
    </section>
    <div class="card-action">
      <div class="note-tip">
        由于需要人工审核，当天收益在1-2后转为可提现金额
      </div>
      <group>
        <x-input title="提现金额：" placeholder="可提现0元" required></x-input>
        <x-input title="手机号：" placeholder="13XXXXXXXXXX" required></x-input>
        <x-input title="发送验证码" class="weui-vcode">
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
      </group>
      <x-button style="margin-top:10px;" type="primary">确定</x-button>
    </div>

    <!-- 弹窗 -->
    <x-dialog v-model="showScrollBox" class="dialog-demo">
        <h4 class="dialog-title">提示</h4>
        <div class="text-box">
          <span class="text">若更换银行卡，那么，之前的银行卡信息将被删除，是否继续？</span>
        </div>
        <div class="bottom_">
          <span class="cancel" @click="showScrollBox=false">取消</span>
          <span class="continue" @click="gotoChangeCard">继续</span>
        </div>
    </x-dialog>

  </div>
</template>

<script>
  import { XHeader, XInput, Group, XButton, Cell, XDialog } from 'vux'
  export default {
    name: 'reflect',
    components: {
      XHeader,
      XInput,
      Group,
      XButton,
      Cell,
      XDialog
    },
    data () {
      return {
        showScrollBox: false
      }
    },
    methods: {
      alert: function () {
        this.showScrollBox = true
      },
      gotoChangeCard: function () {
        this.$router.push({path: '/changeIdCard'})
      }
    }
  }
</script>

<style scoped lang="less">
  .card-wrap {
    padding:10px;
    background-color:white;
    color:#fff;
    .card-content {
      position:relative;
      padding:15px;
      border-radius: 8px;
      background-color:#0072BB;
      > a {
        position:absolute;
        right:15px;
        top:10px;
        font-size:14px;
        color:#fff;
      }
      .card-content-title {
        font-size:26px;
        margin-top:15px;
      }
      .card-content-number {
        font:30px/45px Arial, "Helvetica Neue", Helvetica, sans-serif;
      }
      .card-content-info {
        margin-top:20px;
        font-size:14px;
      }
    }
  }

  .card-action {
    margin-top:5px;
    padding:10px;
    background-color:#fff;
    .note-tip {
      font-size:14px;
      color:#db2929;
    }
  }


  // 弹窗样式
  .dialog-title{
    margin:0 auto;
    margin-top:8px;
    width:80%;
    border-bottom:1px solid #666;
  }
  .text{
    display: inline-block;
    width:80%;
    margin: 10px 0;
  }
  .bottom_{
    min-height: 30px;
    span{
      display: inline-block;
      width:100px;
      height:30px;
      color:#fff;
      margin-bottom:10px;
      line-height: 30px;
      border-radius: 8px;
      background: #FD7651;
    }
  }
</style>
