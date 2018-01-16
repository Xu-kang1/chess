<template>
  <div class="agent-income-history" style="height:100%;">
    <x-header style="position:absolute; top:0; left:0; width:100%;z-index:100;">代理业务历史收入</x-header>
    <pull-to :bottom-load-method="loadmore" @bottom-state-change="stateChange" >
      <div class="tip">
        新增用户：指下挂馆长新增馆内用户数。
      </div>
      <div class="action-query">
        <flexbox>
          <flexbox-item :span="8" class="search-input">
            <input type="text"> <span>-</span> <input type="text">
          </flexbox-item>
          <flexbox-item :span="4" class="act-btns">
            <x-button mini class="ac-btn" @click="alert('ok')">查询</x-button>
            <x-button mini class="ac-btn">重置</x-button>
          </flexbox-item>
        </flexbox>
      </div>
      <div class="query">
        <div class="query-list-tab">
          <flexbox>
            <flexbox-item :span="2" style="text-align:center;">
              <strong>常用：</strong>
            </flexbox-item>
            <flexbox-item :span="10">
              <checker
                v-model="demo"
                default-item-class="demo5-item"
                selected-item-class="demo5-item-selected"
              >
                <checker-item value="1">汇总</checker-item>
                <checker-item value="2">本月</checker-item>
                <checker-item value="3">本年度</checker-item>
              </checker>
            </flexbox-item>
          </flexbox>
        </div>
      </div>
      <div class="query-list" v-for="item in dataList">
        <flexbox>
          <flexbox-item>
            <strong class="date">2017/12/21</strong>
            <span class="amount">0</span>
            <span class="unit">收入（元）</span>
          </flexbox-item>
          <flexbox-item>
            <div class="block">
              <strong class="count">123</strong>
              <span class="type">新增馆长</span>
            </div>
            <div class="block">
              <strong class="count">123</strong>
              <span class="type">新增馆长</span>
            </div>
          </flexbox-item>
          <flexbox-item>
            <div class="block">
              <strong class="count">123</strong>
              <span class="type">新增馆长</span>
            </div>
            <div class="block">
              <strong class="count">123</strong>
              <span class="type">新增馆长</span>
            </div>
          </flexbox-item>
        </flexbox>
      </div>
    </pull-to>
  </div>
</template>

<script type="text/babel">
  import { XHeader, Flexbox, FlexboxItem, XButton, Checker, CheckerItem } from 'vux'
  import PullTo from 'vue-pull-to'
  export default {
    components: {
      PullTo,
      XHeader,
      Flexbox,
      FlexboxItem,
      XButton,
      Checker,
      CheckerItem
    },
    data () {
      return {
        dataList: [
          '(ง •̀_•́)ง', '(´・ω・`) ', '（/TДT)/ ', '>ㅂ<',
          'o(*≧▽≦)ツ', '(≖ ‿ ≖)✧', '(o^∇^o)ﾉ', ' (´・ω・)ﾉ',
          '(´・ω・`)', 'ヽ(･ω･｡)ﾉ', '(｀･ω･´)', '╰(*°▽°*)╯',
          '╮(￣▽￣)╭', '(￣▽￣)~*', '(⊙ˍ⊙)', '(￣0 ￣)y'
        ],
        demo: 1
      }
    },
    methods: {
      loadmore (loaded) {
        setTimeout(() => {
          this.dataList = this.dataList.concat(this.dataList)
          loaded('done')
        }, 2000)
      },
      stateChange (state) {
        console.log(state)
        if (state === 'pull' || state === 'trigger') {
          this.iconLink = '#icon-arrow-bottom'
        } else if (state === 'loading') {
          this.iconLink = '#icon-loading'
        } else if (state === 'loaded-done') {
          this.iconLink = '#icon-finish'
        }
      }
    }
  }
</script>

<style rel="stylesheet/less" lang="less">
  html, body, #app {
    height:100%;
    width:100%;
    overflow:hidden;
  }

  .agent-income-history {
    .vue-pull-to-wrapper {
      box-sizing: border-box;
      padding-top:46px;
    }
  }
  .tip {
    color:red;
    font-size:12px;
    padding:5px;
    background-color:#ddd;
  }
  .query-list {
    span, strong {
      font-size:14px;
      height:25px;
      line-height:25px;
      display:block;
      text-align:center;
      &.date {
        height:50px;
        line-height:60px;
        color:#5e5e5e;
      }
    }
    .amount, .unit {
      color: #fd7651;
    }
    strong {
      font-size:16px;
    }
    >.vux-flexbox {
      background-color:#fff;
      padding-top:5px;
      padding-bottom:5px;
      &:first-child {
        border-top:1px solid #ddd;
      }
    }
  }

  .action-query {
    margin:10px;
    .ac-btn {
      position:relative;
      top:-7px;
      padding:5px 0;
      display:inline-block;
      width:45%;
    }
  }
  .search-input {
    input[type='text'] {
      display:inline-block;
      width:45%;
      box-sizing: border-box;
      border-radius:3px;
      border:1px solid #ccc;
      padding:7px 5px;
    }
    * {
      float:left;
    }
    > span {
      display: inline-block;
      margin-left:5px;
      margin-right:5px;
    }
  }
  .demo5-item {
    padding:0 5px;
    text-align: center;
    border-radius: 90px;
    margin-right: 6px;
    color: #fd7651;
  }
  .demo5-item-selected {
    background: #fd7651;
    border-color: #fff;
    color:#fff;
  }
  .query-list-tab {
    padding:10px;
    font-size:12px;
  }

</style>
