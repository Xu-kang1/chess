<template>
    <div class="contentlist">
        <group>
          <cell title="馆长：4526112354" value="未认证" is-link v-on:click.native="gotoInformation">
             <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/icon/p-icon.png">
          </cell>
          <cell title="我的棋牌室" is-link v-on:click.native="gotoMyChessRoom">
             <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../assets/images/icon/k-icon.png">
          </cell>
      </group>
    </div>

</template>
<script>
import { Cell, Group } from 'vux'
export default {
  components: {
    Cell,
    Group
  },
  data () {
    return {

    }
  },
  methods: {
    gotoInformation: function () {
      this.$router.push({path: '/PersonalInformation'})
    },
    gotoMyChessRoom: function () {
      this.$router.push({path: '/myChessRoom'})
    }
  }
}
</script>

<style lang="css" scoped>

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
    #app /deep/.weui-cells{
        margin-top:0 !important;
    }

</style>
