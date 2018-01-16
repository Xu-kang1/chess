<template>
    <div>
      <x-header
        :left-options="{showBack: true}"
        :title="'设置'">
      </x-header>
      <group>
        <x-input  placeholder="请输入旧密码" ></x-input>
        <x-input  placeholder="请输入新密码" ></x-input>
        <x-input  placeholder="请输入新密码" ></x-input>
      </group>
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

<style lang="css" scoped>
/* @import '~vux/src/styles/close'; */
.btn{
  background-color: #FD9251;
  margin-top:40px;
}

</style>
