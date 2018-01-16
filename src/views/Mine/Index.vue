<template>
    <div class="main">
        <!-- <x-header
          style="position:absolute; top:0; left:0; width:100%;z-index:100;"
          :title="'个人中心'"
        > -->
        <newtoplist></newtoplist>
        <contentlist></contentlist>
        <div class="bottom">
            <span class="eqCode">
                <img src="../../assets/images/ercode.png" alt="">
            </span>
            <span class="dlText">
                <span style="font-size:16px;">369互娱麻将下载方式：</span><br/>
                关注微信公众号【369官方麻将】（或搜索微信号：slj-qipai）<br/>
                <span>get 馆长教程，获知福利资讯</span>
            </span>
        </div>
        <!-- 弹窗 -->
        <x-dialog v-model="showScrollBox" class="dialog-demo">
            <h4 class="dialog-title">客服</h4>
            <div class="text-box">
              <span class="text">客服电话：
                <a href="tel:400-0348-69"></a>
              </span><br/>
              <span>微信号
                <span class="kf">sljmj888、sljmj369、sljmj333</span>
              </span>
            </div>
            <div class="bottom_">
              <span class="continue" @click="showScrollBox=false">确定</span>
            </div>
        </x-dialog>

    </div>
</template>

<script>
 import { XDialog } from 'vux'
 import Newtoplist from './components/newtopList'
 import Contentlist from './components/contentList'
 export default {
   name: 'index',
   components: {
     XDialog,
     Newtoplist,
     Contentlist
   },
   data () {
     return {
       showScrollBox: false
     }
   },
   methods: {}
 }
</script>

<style lang="less" scoped>
.main{
    width:100%;
}
    .bottom{
        width:100%;
        height:150px;

        margin-top:100px;
        // border:1px solid red;
        text-align: center;
        .eqCode{
            float:left;
            display:inline-block;

            width:30%;
            // height:100px;
            img{
                width:100px;
                height:100px;
                display: inline-block;
                margin:10% 10%;
            }
        }
        .dlText{
            display:inline-block;
            text-align: left;
            border:1px solid #DDDDDD;
            padding:5% 3px;
            width:56%;
            margin-left:6px;
            span{
                width:100%;
            }
        }
    }
    .main/deep/ .weui-cell__ft{
      color:#FF8730;
      font-size:14px;
    }
    /* 弹窗样式 */
    .dialog-title{
      margin:0 auto;
      margin-top:8px;
      width:80%;
      border-bottom:1px solid #666;
    }
    .text{
      display: inline-block;
      width:80%;
      margin: 30px 0;
    }
    .text a {
      color:#FD7651;
    }
    .text .kf{
      color:#FD7651;
    }
    .bottom_{
      min-height: 30px;
      span{
        display: inline-block;
        width:100px;
        height:30px;
        color:#fff;
        margin-bottom:10px;
        line-height: 30px;
        border-radius: 8px;
        background: #FD7651;
      }
    }
</style>
