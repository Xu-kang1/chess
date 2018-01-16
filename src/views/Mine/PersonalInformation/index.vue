<template>
    <div class="contentlist">
      <x-header
        :left-options="{showBack: true}"
        :title="'馆长信息'"
      >
        <!-- <span slot="right" class="user-message">
          <x-icon type="ios-email-outline" size="30"></x-icon>
          <badge></badge>
        </span> -->
      </x-header>
        <group>
          <cell title="加入时间：2017/09/08" value="" ></cell>
          <cell title="馆长ID：363987452" value="" ></cell>
          <cell title="用户ID：34340922" value="更换" is-link>
          </cell>
          <cell title="地区："></cell>
          <cell title="已实名认证" value="查看" is-link
              link="/Authentication" inline-desc='(身份证、银行卡账户信息)'
          ></cell>
          <cell :title="title" value="编辑" is-link class="style" @click.native="alert"></cell>
      </group>
      <!-- 弹窗 -->
      <x-dialog v-model="showScrollBox" class="dialog-demo">
          <h4 class="dialog-title">请输入微信号</h4>
          <div class="text-box">
            <p>*微信号将出现在您的名片邀请上</p>
            <div class="input">
                <input type="text" name="" value="" v-model="weID">
            </div>
          </div>
          <div class="bottom_">
            <span class="cancel" @click="showScrollBox=false">取消</span>
            <span class="continue" @click="changeWeId">确定</span>
          </div>
      </x-dialog>
    </div>

</template>
<script>
import { Cell, Group, XHeader, Badge, XDialog } from 'vux'
export default {
  name: 'index',
  components: {
    Cell,
    Group,
    XHeader,
    Badge,
    XDialog
  },
  data () {
    return {
      showScrollBox: false,
      weID: '369Hiuu900y',
      title: '369Hiuu900y'
    }
  },
  methods: {
    alert: function () {
      this.showScrollBox = true
    },
    changeWeId: function () {
      this.title = this.weID
      this.showScrollBox = false
    }
  }
}
</script>

<style lang="css" scoped>
/* @import '~vux/src/styles/close'; */
    .contentlist>>> .weui-cell__ft{
        font-size:14px;
    }
    .contentlist img{
        width:10px;height:10px;
    }
    #app /deep/.weui-cells{
        margin-top:0 !important;
    }
    .weui-cell_access>>>.weui-cell__ft{
        color:#FFD145;
    }
    .style>>>.weui-cell__ft{
        color:#FF8730;
    }
   /* 弹窗样式 */
    .dialog-title{
      margin:0 auto;
      margin-top:8px;
      width:80%;
      border-bottom:1px solid #666;
    }
    .text-box>p{
      width:80%;
      margin:10px auto;
      color:red;
      font-size:12px;
      text-align:left;
    }
    .text-box input{
      border:0;
      display: inline-block;
      width:90%;
      height:25px;
      outline-style: none;
    }
    .text-box .input{
      margin:15px auto;
      border:1px solid #898989;
      width:80%;
      border-radius: 3px;
    }
    .bottom_{
      min-height: 30px;
    }
    .bottom_ span{
      display: inline-block;
      width:100px;
      height:30px;
      color:#fff;
      margin-bottom:10px;
      line-height: 30px;
      border-radius: 8px;
      background: #FD7651;
    }

</style>
