<template>
  <div>
    <div class="user-actions">
      <flexbox>
        <flexbox-item>
          <x-button plain type="primary" class="custom-primary-red" v-on:click.native="aaa">转卡</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button plain type="primary" class="custom-primary-red" v-on:click.native="toInStock">进货</x-button>
        </flexbox-item>
        <flexbox-item>
          <x-button plain type="primary" class="custom-primary-red" link="/reflect">提现</x-button>
        </flexbox-item>
      </flexbox>
    </div>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, XButton } from 'vux'

  export default {
    components: {
      Flexbox,
      FlexboxItem,
      XButton
    },
    methods: {
      aaa () {
        alert('ok')
      },
      toInStock () {
        this.$router.push('/in_stock')
      }
    }
  }
</script>

<style scoped lang="less">
  .user-actions {
    padding:10px;
    background-color:white;
  }
  .custom-primary-red {
    border-radius: 99px!important;
    border-color: #fd7651!important;
    color: #fd7651!important;
    &:active {
      border-color: rgba(206, 60, 57, 0.6)!important;
      color: rgba(206, 60, 57, 0.6)!important;
      background-color: transparent;
    }
  }
</style>
