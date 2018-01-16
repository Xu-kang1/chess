<template>
  <div>
    <flexbox>
      <flexbox-item style="text-align:center;">
        <span v-for="item in nData" style="display:inline-block; margin-right:8px; font-size:12px; padding-left:3px;" :style="{'border-left': '18px solid ' + item.color}">{{ item.name }}</span>
      </flexbox-item>
      <flexbox-item style="text-align:center;">
        <canvas id="canvas" :width="width" :height="height"></canvas>
      </flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'pie',
    components: {
      Flexbox,
      FlexboxItem
    },
    props: {
      theData: {
        type: Array,
        default () {
          return [
            {num: 1, name: 'a', color: '#ffc000'},
            {num: 2, name: 'b', color: '#ed7d31'}
          ]
        }
      },
      width: {
        type: Number,
        default: 100
      },
      height: {
        type: Number,
        default: 100
      }
    },
    data () {
      return {
        nData: this.theData
      }
    },
    methods: {
      createCircle () {
        let numTotal = 0
        let data = this.nData
        let canvas = document.getElementById('canvas')
        let ctx = canvas.getContext('2d')
        let startPoint = 1.5 * Math.PI
        let widthHalf = this.width / 2
        let heightHalf = this.height / 2
        let theRadius = widthHalf > heightHalf ? heightHalf : widthHalf
        for (var i = 0; i < data.length; i++) {
          numTotal += data[i].num
        }
        for (var j = 0; j < data.length; j++) {
          data[j]['scale'] = Math.ceil((data[j].num / numTotal) * 100)
        }

        for (var l = 0; l < data.length; l++) {
          ctx.fillStyle = data[l].color
          ctx.strokeStyle = data[l].color
          ctx.beginPath()
          ctx.moveTo(widthHalf, widthHalf)
          ctx.arc(heightHalf, heightHalf, theRadius, startPoint, startPoint - Math.PI * 2 * (data[l]['scale'] / 100), true)
          ctx.fill()
          ctx.stroke()
          startPoint -= Math.PI * 2 * (data[l]['scale'] / 100)
        }
      }
    },
    mounted () {
      this.createCircle()
    }
  }
</script>

<style scoped lang="less">

</style>
