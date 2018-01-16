<template>
  <div>
    <x-header>
      转卡
    </x-header>
    <div class="container">
      <group>
        <cell title="转卡给：" value="田克州"></cell>
        <x-input title="房卡数量：" :max="186" placeholder="最多186张房卡"></x-input>
      </group>

      <div class="act-btn">
        <x-button type="warn" @click.native="trunCard">确定</x-button>
      </div>
    </div>
    <alert v-model="show" title="温馨提示"> 转卡成功！ </alert>
  </div>
</template>

<script>
  import { XHeader, XInput, Cell, Group, XButton, AlertModule, Alert } from 'vux'
  export default {
    name: 'turn-the-card',
    components: {
      XHeader,
      XInput,
      Cell,
      Group,
      XButton,
      AlertModule,
      Alert
    },
    methods: {
      trunCard () {
        this.show = !this.show
      }
    },
    data () {
      return {
        show: false
      }
    }
  }
</script>

<style scoped>
  .act-btn {
    padding:10px;
  }
</style>
