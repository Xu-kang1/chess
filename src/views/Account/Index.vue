<template>
    <div>
      <div class="notice">
        <notices></notices>
        <actions></actions>
        <statistical></statistical>
      </div>
    </div>
</template>

<script>
  import Notices from './components/notices'
  import Actions from './components/actions'
  import Statistical from './components/statistical'
  export default {
    name: 'index',
    components: {
      Notices, Actions, Statistical
    }
  }
</script>

<style scoped>

</style>
