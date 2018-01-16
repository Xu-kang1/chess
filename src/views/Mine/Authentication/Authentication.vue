<template>
  <div class="main">
    <x-header :left-options="{showBack: true}">实名认证信息</x-header>
    <div class="topDetial">
      <div class="topList">
        <p>
          <span>*以下信息，请如实填写，已经填写的不可修改</span><br/>
          <span>若因虚假信息造成的提现失败，由用户自行承担责任</span>
        </p>
        <div class="information">
          <span class="bigsize">身份证：</span><br/>
          <span class="absolute">申瑜 <span class="X-number">1404*********8888</span></span>
        </div>
      </div>
      <group>
        <cell title="银行卡" value="更换银行卡" is-link @click.native="alert"></cell>
      </group>
    </div>

      <div class="information info">
        <span class="left">持卡人姓名：</span> <span class="right">申瑜</span><br/>
        <span class="left">开户行：</span><span class="right">北京建行银行</span><br/>
        <span class="left">卡号：</span><span class="right">989865532323265</span>
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
import { XHeader, Group, Cell, XDialog } from 'vux'
export default {
  components: {
    XHeader,
    Group,
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

<style lang="less" scoped>
// @import '~vux/src/styles/close';
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
  font-size:14px;
}
.information{
  margin:0 auto;
  width:88%;
  color:#898989;
  .bigsize{
    font-size:18px;
  }
  span{
    margin-left:40px;
  }
}
.info{
  padding:30px 0;
  width:100%;
  background: #fff;
  .left,.right{
    display: inline-block;
    width:30%;
    text-align: right;
  }
  .right{
    width:40%;
    text-align: left;
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
