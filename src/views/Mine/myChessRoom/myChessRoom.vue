<template>
  <div class="contentlist">
    <x-header :left-options="{showBack: true}">我的棋牌室</x-header>
      <group id="list1">
        <cell title="棋牌室名称" value="审核中" is-link
         value-align="right"
         inline-desc='238958467棋牌室'
         v-on:click.native="gotoRoomName">
        </cell>
        <span class="colorText">（该信息将出现在游戏内）</span>
         <span class="icon"></span>
        <cell title="棋牌室公告" value="" is-link
         value-align="right"
         inline-desc='喊老乡一起来玩，玩的开心，玩的自在'
         v-on:click.native="gotoRoomNotice">
        </cell>
        <span class="colorText L2">（该信息将出现在游戏内）</span>
        <span class="icon1"></span>
      </group>
      <group>
          <cell title="棋牌室业绩" class="small">
             <span class="icon"></span>
          </cell>
        <cell title="我的收益" is-link>
           <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/icon/personal-icon.png">
        </cell>
        <cell title="我的用户" is-link>
          <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/icon/personal-icon.png">
        </cell>
    </group>
  </div>
</template>
<script>
import { Cell, Group, XHeader } from 'vux'
export default {
  name: 'index',
  components: {
    Cell,
    Group,
    XHeader
  },
  methods: {
    gotoRoomName: function () {
      this.$router.push({path: '/roomName'})
    },
    gotoRoomNotice: function () {
      this.$router.push({path: '/roomNotice'})
    }
  }
}
</script>
<style lang="css" scoped>
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
    .contentlist>>>.icon,.icon1{
        display: inline-block;
        width:3px;
        height:10px;
        background:red;
    }
    .colorText{
        position: absolute;
        font-size: 12px;
        top:11px;
        left:83px;
        color:#9DA5B4;
    }
    .L2{
      top:68px;
    }
    .icon{
        position: absolute;
        top:14px;
        left:12px;
    }
    .icon1{
        position: absolute;
        left:12px;
        top:71px;
    }

    #list1>>>.vux-cell-bd{
        position:relative;
        font-size: 14px;
    }
    .contentlist>>>.vux-cell-align-left{
        position: absolute;
        width:73%;
        top:8px;
        left:74px;
    }
    .small{
      font-size:14px;
    }

</style>
