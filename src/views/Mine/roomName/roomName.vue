<template>
    <div class="textarea">
        <x-header :left-options="{showBack: true}">棋牌室名称</x-header>
        <!-- <x-icon type="ios-plus" size="30"></x-icon> -->
        <group>
            <x-textarea :max="8" placeholder="这里是内容" plac title=""  v-model="value" autofocus></x-textarea>
          </group>
          <span class="bottomText">审核中，暂时无法编辑</span>
          <!-- <box gap="10px 10px" class="margin">
              <x-button type="primary" @click.native="">保存</x-button>
          </box> -->
    </div>
</template>

<script>
import { XTextarea, Group, Box, XHeader } from 'vux'
export default {
  components: {
    XTextarea,
    Group,
    Box,
    XHeader
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
.textarea >>> .weui-cells{
    margin:20px auto;
    width:95%;
}
.weui-btn{
    margin-top:88%;
    background: #00B5A6;
}
.bottomText{
    color:#FF8730;
    font-size:12px;
    margin-left:2.5%;
}
</style>
