<template>
  <div class="">
    <div class="contentlist">
        <group>
          <cell title="我的库存" value="186张房卡" is-link>
             <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/icon/d-icon.png">
          </cell>
          <cell title="设置" is-link @click.native="goSetting">
             <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/icon/s-icon.png">
          </cell>
          <cell title="客服" is-link class="goKf" @click.native="alert">
            <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/icon/t-icon.png">
          </cell>
      </group>
    </div>
    <!-- 弹窗 -->
    <x-dialog v-model="showScrollBox" class="dialog-demo">
        <h4 class="dialog-title">客服</h4>
        <div class="text-box">
          <span class="text">客服电话：<a href="tel:400-0348-369">400-0348-369</a>
          </span><br/>
          <span>微信号
            <span class="kf">sljmj888、sljmj369、sljmj333</span>
          </span>
        </div>
        <div class="bottom_">
          <span class="continue" @click="showScrollBox=false">确定</span>
        </div>
    </x-dialog>
  </div>
</template>
<script>
import { Cell, Group, XDialog } from 'vux'
export default {
  components: {
    Cell,
    Group,
    XDialog
  },
  data () {
    return {
      showScrollBox: false
    }
  },
  methods: {
    goSetting: function () {
      this.$router.push({path: '/setting'})
    },
    alert: function () {
      this.showScrollBox = true
    }
  }
}
</script>

<style lang="less" scoped>
  .contentlist .weui-cell__ft:after{
      content: " ";
      display: inline-block;
      height: 10px;
      width: 10px;
      border-width: 2px 2px 0 0;
      border-color: #C8C8CD;
      border-style: solid;
      transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
      position: absolute;
      top: 50%;
      margin-top: -4px;
      right: 2px;
  }
  .contentlist img{
      width:35px;
  }
  /* 弹窗样式 */
  .dialog-title{
    margin:0 auto;
    margin-top:8px;
    width:80%;
    border-bottom:1px solid #666;
  }
  .text{
    display: inline-block;
    text-align: left;
    width:80%;
    margin: 10px 0;
  }
  .text a {
    color:#FD7651;
  }
  .text-box/deep/ .kf{
    color:#FD7651;
    display: inline-block;
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
