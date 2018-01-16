<template>
    <div>
      <x-header
        :left-options="{showBack: true}"
        :title="'设置'">
      </x-header>
        <group>
          <cell title="修改密码" value="" is-link link="/rePassword"></cell>
          <cell title="退出" value="" is-link @click.native="alert"></cell>
      </group>

      <!-- 弹窗 -->
      <x-dialog v-model="showScrollBox" class="dialog-demo">
          <h4 class="dialog-title">注意</h4>
          <div class="text-box">
            <span class="text">你确定要退出吗？</span>
          </div>
          <div class="bottom_">
            <span class="cancel" @click="gologin">朕要退朝</span>
            <span class="continue" @click="showScrollBox=false">暂时不退了</span>
          </div>
      </x-dialog>
    </div>

</template>
<script>
import { Cell, Group, XHeader, XDialog } from 'vux'
export default {
  components: {
    Cell,
    Group,
    XHeader,
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
    gologin: function () {
      this.$router.push({path: '/'})
    }
  }
}
</script>
<style lang="less" scoped>
/* @import '~vux/src/styles/close'; */
/* 弹窗样式 */
.dialog-title{
  margin:0 auto;
  margin-top:8px;
  width:80%;
  border-bottom:1px solid #666;
}
.text{
  display: inline-block;
  width:80%;
  margin: 30px 0;
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
