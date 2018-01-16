<template>
        <div class="weui-panel__bd">
            <div class="list">
                <div class="weui-media-box__hd" @click="gotoInformation">
                    <span class="icon_"></span>
                    <div class="left-text">
                        <h4 class="weui-media-box__title">馆长：申瑜</h4>
                        <p class="idNumber">ID:909663247</p>
                        <span class="see-detial">查看</span>
                        <div class="weui-cell__ft"></div>
                    </div>
                </div>

            </div>
            <div class="list">
                <div class="weui-media-box__hd">
                    <span class="icon_"></span>
                    <div class="left-text">
                        <h4 class="weui-media-box__title">快乐啦啦啦……</h4>
                        <p class="idNumber">哈哈哈，大家玩的开心</p>
                        <span class="see-detial">编辑</span>
                            <div class="weui-cell__ft"></div>
                    </div>
                </div>
            </div>
          </div>
</template>
<script>
// import { Panel } from 'vux'
export default {
    components:{
        // Panel
    },
    data(){

    },
    methods:{
        gotoInformation:function(){
            alert('ok')
             this.$router.push({
                 path:'PersonalInformation/information'
             })
        }
    }

}
</script>

<style lang="less" scoped>
.list{
    // float:left;
}
    .weui-panel__bd{
    background: #fff;
    }
    .weui-media-box__hd{

        position: relative;
        width:96%;
        margin:2px auto;
        border-top:1px solid #666;
        // padding:5px 10px;
        .icon_{
            display: inline-block;
            width:34px;
            height:34px;
            margin:5px;
            overflow: hidden;
            background: url(../../../assets/images/icon/personal-icon.png) no-repeat;
            background-size: 100%;
        }
    }

    .weui-cell__ft:after{
        content: " ";
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #C8C8CD;
        border-style: solid;
        transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
        position: absolute;
        top: 50%;
        margin-top: -4px;
        right: 2px;
    }
    .left-text{
        display: inline-block;
        width:80%;
        p{
            color:#DFDFDF;
        }
        h4{

        }
        .see-detial{
            position: absolute;
            top: 50%;
            margin-top: -11px;
            right:20px;
            color:#FD985B;
        }
    }
</style>
