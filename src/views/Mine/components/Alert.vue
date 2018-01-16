<template>
  <div>
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
import { XDialog } from 'vux'
export default {
  components: {
    XDialog
  },
  data () {
    return {
    }
  }

}
</script>

<style lang="less" scoped>
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
