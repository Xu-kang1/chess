<template>
  <div class="main">
    <x-header :left-options="{showBack: false}">修改银行卡</x-header>
    <div class="topDetial">
      <div class="topList">
        <p>
          <span>*以下信息，请如实填写，已经填写的不可修改</span><br/>
          <span>若因虚假信息造成的提现失败，由用户自行承担责任</span>
        </p>
        <div class="information">
          <span class="bigsize">银行卡：</span><br/>
          </div>
          <!-- <span class="absolute">持卡人姓名： <span class="X-number">申瑜</span></span> -->
      </div>
      <group>
        <x-input title="持卡人姓名：" placeholder="申瑜" ></x-input>
        <x-input title="开户行：" placeholder="北京建设银行" ></x-input>
        <x-input title="卡号：" type="number" placeholder="939865532323265" ></x-input>
        <x-input title="手机：" type="number" placeholder="13426080884" ></x-input>
        <x-input title="验证码：" placeholder="请输入验证码" class="weui-vcode">
          <x-button slot="right"  type="primary" mini>验证码</x-button>
        </x-input>
      </group>
    </div>
    <box gap="10px 10px" class="btn_">
        <x-button type="primary btn">确定</x-button>
    </box>
  </div>
</template>

<script>
import { XHeader, Group, XInput, XButton, Box } from 'vux'
export default {
  components: {
    XHeader,
    Group,
    XInput,
    XButton,
    Box
  }
}
</script>

<style lang="less" scoped>
.topDetial{
  margin-top:6px;
}
.topList{
  background: #fff;
  p{
    color:#FD6060;
    font-size: 12px;
    margin:8px 6px;
  }
}
.information>.absolute{
  position: relative;
  left:30px;
}
.weui-cell_access/deep/.weui-cell__ft{
  color:#FD9251;
}
.information{
  margin:0 auto;
  padding-bottom: 10px;
  width:88%;
  color:#898989;
  .bigsize{
    font-size:18px;
  }
  span{
    // margin-left:40px;
  }
}
.main /deep/.weui-cells{
  margin-top:0;
}
.main /deep/.vux-no-group-title{
  margin-top:0;
}
.topDetial /deep/.weui-cell__hd{
  display: inline-block;
  text-align: right;
  font-size:16px;
  width:112px;
}
.topDetial /deep/ .weui-label{
  display: inline-block;
}
.weui-cell__ft{
  background:#2EA087;
}
.btn{
  background-color: #FD9251;
}

</style>
