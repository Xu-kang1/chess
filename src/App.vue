<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

  body {
    background-color: #fbf9fe;
    font-family: -apple-system-font, "Microsoft YaHei UI", "Helvetica Neue", sans-serif;
  }
  html {
    .vux-header {
      background-color:#3b424b;
    }
  }
 input, textarea, keygen, select, button {
   font-family: -apple-system-font, "Microsoft YaHei UI", "Helvetica Neue", sans-serif;
 }
</style>
