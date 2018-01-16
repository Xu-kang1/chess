<template>
    <div class="textarea">
        <x-header :left-options="{showBack: true}">棋牌室公告</x-header>
        <group>
            <x-textarea :max="40" placeholder="这里是内容" plac title=""  v-model="value" autofocus></x-textarea>
          </group>
          <box gap="10px 10px" class="margin">
              <x-button type="primary" @click.native="">保存</x-button>
          </box>
    </div>
</template>

<script>
import { XTextarea, Group, XButton, Box, XHeader } from 'vux'
export default {
  components: {
    XTextarea,
    Group,
    XButton,
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
</style>
