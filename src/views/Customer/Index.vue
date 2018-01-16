<template xmlns="http://www.w3.org/1999/html">
    <div style="height:100%;">
      <pull-to
        :bottom-load-method="loadmore"
        @bottom-state-change="stateChange">

        <section class="action-query">
          <flexbox>
            <flexbox-item :span="8" class="search-input">
              <input type="text">
            </flexbox-item>
            <flexbox-item :span="4" class="act-btns">
              <x-button mini class="ac-btn" @click="alert('ok')">查询</x-button>
              <x-button mini class="ac-btn">重置</x-button>
            </flexbox-item>
          </flexbox>
        </section>

        <section class="container">
          <div class="customer-item customer-me">
            <div class="customer-item-title">
              <strong>小李飞刀</strong> <span class="customer-item-id">ID:123456789</span>
            </div>
            <div class="customer-item-info">
              <span class="customer-item-info-num">牌局数：369999</span>
              <span class="customer-item-info-num">桌卡数：369999</span>
              <span class="customer-item-info-num">消费额：369999</span>
            </div>
            <div class="customer-item-label">
              <x-button mini type="primary" @click.native="turnCard(1)" style="float:right;">转卡</x-button>
              <x-button mini type="warn" style="float:right;">删除</x-button>
              <badge text="麻将"></badge>
              <badge text="三张"></badge>
            </div>
            <div class="customer-item-logintime">
              <span>最近登录：2017/09/23 12:23</span>
            </div>
          </div>

          <div class="customer-stat">
            <span>馆内用户数：600</span> <span>有效用户数：36789</span>
          </div>

          <template v-for="item in dataList">
            <div class="customer-item customer-me">
              <div class="customer-item-title">
                <strong>小李飞刀</strong> <span class="customer-item-id">ID:123456789</span>
              </div>
              <div class="customer-item-info">
                <span class="customer-item-info-num">牌局数：369999</span>
                <span class="customer-item-info-num">桌卡数：369999</span>
                <span class="customer-item-info-num">消费额：369999</span>
              </div>
              <div class="customer-item-label">
                <x-button mini type="primary" style="float:right;">转卡</x-button>
                <x-button mini type="warn" style="float:right;">删除</x-button>
                <badge text="麻将"></badge>
                <badge text="三张"></badge>
              </div>
              <div class="customer-item-logintime">
                <span>最近登录：2017/09/23 12:23</span>
              </div>
            </div>
          </template>
        </section>
        <!-- vue 2.5 use slot-scope -->
        <template slot="bottom-block" slot-scope="props">
          <div class="bottom-load-wrapper">
            <svg class="icon"
                 :class="{
                'icon-arrow': props.state === 'trigger',
                'icon-loading': props.state === 'loading'
             }"
                 aria-hidden="true">
              <use :xlink:href="iconLink"></use>
            </svg>
            {{ props.stateText }}
          </div>
        </template>
      </pull-to>
    </div>
</template>

<script>
  import { XHeader, Flexbox, FlexboxItem, XButton, Badge } from 'vux'
  import PullTo from 'vue-pull-to'
  console.log('ok')
  export default {
    name: 'index',
    components: {
      XHeader,
      Flexbox,
      FlexboxItem,
      XButton,
      PullTo,
      Badge
    },
    data () {
      return {
        dataList: [
          '(ง •̀_•́)ง', '(´・ω・`) ', '（/TДT)/ ', '>ㅂ<',
          'o(*≧▽≦)ツ', '(≖ ‿ ≖)✧', '(o^∇^o)ﾉ', ' (´・ω・)ﾉ',
          '(´・ω・`)', 'ヽ(･ω･｡)ﾉ', '(｀･ω･´)', '╰(*°▽°*)╯',
          '╮(￣▽￣)╭', '(￣▽￣)~*', '(⊙ˍ⊙)', '(￣0 ￣)y'
        ],
        iconLink: ''
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
        if (state === 'pull' || state === 'trigger') {
          this.iconLink = '#icon-arrow-bottom'
        } else if (state === 'loading') {
          this.iconLink = '#icon-loading'
        } else if (state === 'loaded-done') {
          this.iconLink = '#icon-finish'
        }
      },
      turnCard (a) {
        this.$router.push({
          path: '/turn_the_card/1'
        })
      }
    }
  }
</script>

<style scoped lang="less">
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
      width:100%;
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

  .icon {
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }

  .list {
    font-size: 16px;

    li:nth-child(even) {
      background: #eee;
    }

    li {
      padding-left: 15px;
      height: 50px;
      line-height: 50px;
      background: #fff;

      a {
        display: block;
        height: 100%;
      }

      .icon-arrow {
        display: inline-block;
        float: right;
        margin-right: 15px;
        height: 100%;
        width: 20px;
        color: #444;
      }
    }
  }

  .view-wrapper {
    box-sizing: border-box;
    padding-top: 50px;
    height: 100%;
    background: #f6f6f6;
  }

  .bottom-load-wrapper {
    line-height: 50px;
    text-align: center;
  }
  .icon-arrow {
    transition: .2s;
    transform: rotate(180deg);
  }
  .icon-loading {
    transform: rotate(0deg);
    animation-name: loading;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @keyframes loading
  {
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
  }

  .customer-item {
    border-bottom:1px solid #eee;
    padding:10px;
    color:#5e5e5e;
    background-color:#fff;
    &:last-of-type {
      border-bottom:none;
    }
    &:nth-of-type(2) {
      border-top:1px solid #eee;
    }
    .customer-item-title {
      strong {
        font-size:16px;
        color:#FDBA61;
      }
      span {
        font-size:12px;
        display:inline-block;
        margin-left:10px;
      }
    }
    .customer-item-info {
      font-size:12px;
      span {
        display:inline-block;
        margin-right:5px;
      }
    }
    .customer-item-label {
      margin-top:10px;
      margin-bottom:10px;
      span {
        display:inline-block;
        font-size:12px;
        padding:5px 10px;
        border-radius:90px;
      }
      .vux-badge {
        padding-top:2px;
        padding-bottom:2px;
        font-size:12px;
        margin-right:5px;
      }
      .weui-btn {
        +.weui-btn {
          margin-top: 0;
          margin-right:10px;
        }
      }
    }
    .customer-item-logintime {
      font-size:12px;
      color:#999;
    }
  }

  .customer-stat {
    padding:10px;
    background-color:#fff;
    text-align: center;
    font-size:12px;
    margin-top:10px;
    margin-bottom:10px;
    color:#5e5e5e;
  }
</style>
