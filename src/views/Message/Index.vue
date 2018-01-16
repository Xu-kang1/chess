<template>
  <div style="height:100%;">
    <div class="pull-container" style="height:100%;">
      <x-header style="position:absolute; top:0; left:0; width:100%;z-index:100;">消息中心</x-header>
      <pull-to
        :top-load-method="refresh"
        :bottom-load-method="loadmore"
        @top-state-change="stateChange">
        <!-- vue 2.5 use slot-scope -->
        <template slot="top-block" slot-scope="props">
          <div class="top-load-wrapper">
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
        <group>
          <template v-for="itme in dataList">
            <cell title="升级银牌代理" is-link inline-desc='升级银牌代理条件：馆长的房卡销售额累计达到1000元，即可申请升级为银牌代理，自动获得银牌' @click.native="toDetail">
              <span slot="after-title" class="message-date">2017/01/01</span>
            </cell>
          </template>
        </group>
      </pull-to>
    </div>
  </div>
</template>

<script>
  import { XHeader, Group, Cell } from 'vux'
  import PullTo from 'vue-pull-to'
  export default {
    name: 'index',
    components: {
      XHeader,
      PullTo,
      Group,
      Cell
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
      refresh (loaded) {
        setTimeout(() => {
          this.dataList.reverse()
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
      toDetail: function () {
        this.$router.push('/message/detail/1')
      }
    }
  }
</script>

<style lang="less">
  html, body, #app {
    height:100%;
    width:100%;
    overflow:hidden;
  }
  .pull-container {
    .vue-pull-to-wrapper {
      box-sizing: border-box;
      padding-top:46px;
    }
    .weui-cells, .vux-no-group-title {
      margin-top:0;
    }
  }
  .scroll-container {
    height:100%;
  }
  .top-load-wrapper {
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
  .message-date {
    font-size:12px;
    color:#999;
  }
</style>
