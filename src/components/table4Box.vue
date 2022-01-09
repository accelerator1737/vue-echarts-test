<template>
    <div>
        <div class="title4">
        <div class="chinese-title2">
          员工关怀
        </div>
        <div class="english-title2">
          Employee care
        </div>
      </div>
      <div class="table4">
        <div class="table4-suspicious">
          <div class="table4-des1">
            疑似职工人群总数
          </div>
          <div class="table4-num1">
            {{suspectTotal}}
          </div>
          <div class="table4-unit1">
            人
          </div>
        </div>
        <div class="table4-call">
          <div class="table4-des2">
            疑似职工每日智能电话回访次数
          </div>
          <div class="table4-num2">
            {{suspectCall}}
          </div>
          <div class="table4-unit2">
            次
          </div>
        </div>
        <div class="table4-serve">
          <div class="table4-des3">
            每日咨询服务次数
          </div>
          <div class="table4-num3">
            {{suspectServe}}
          </div>
          <div class="table4-unit3">
            次
          </div>
          
        </div>
        <div class="table4-svg-title">
            复工职工每日打卡数量
        </div>
        <div class="con-svg3">
          <e-charts class="echarts-line" :option="LineOpt"  autoresize></e-charts>
        </div>
      </div>
    </div>
</template>
<script>
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'
use([
  CanvasRenderer,
  BarChart,
  GridComponent,
  TooltipComponent
]);

export default {
  components: {
    ECharts,
  },
  data() {
    return {
      suspectServe: Math.floor(Math.random() * 100),
      suspectCall: Math.floor(Math.random() * 100),
      suspectTotal: Math.floor(Math.random() * 100),
      LineOpt :{
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: false,
                    data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06'],
                    axisTick:{
                        show:false,
                    },
                    symbolSize: 4
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    splitLine:{
                        show:false
                    },
                    axisLine:{
                        show:true
                    },
                    axisTick:{
                        show:false,
                    },
                    max:function (value) {
                        return value.max;
                    },
                    min:function (value) {
                        return value.min-21;
                    },
                }
            ],
            grid:{
                x:25,
                x2:15,
                borderWidth:5
            },
            series: [
                {
                    type: 'line',
                    smooth: true,
                    lineStyle: {
                        width: 1,
                        color:'#005eff',
                    },
                    showSymbol: false,
                    areaStyle: {
                        opacity: 0.8,
                        color: {
                            type: 'linear',
                            x: 0,
                            y: 1,
                            x2: 0,
                            y2: 0.5,
                            colorStops: [{
                                offset: 0, color: 'transparent', // 0% 处的颜色
                            }, {
                                offset: 1, color: 'rgb(17,79,102)' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [84, 40, 80, 20, 30, 130]
                },
       
            ]
        },
    };
  },
  props: {},
  methods: {
    
  },
  // 页面初载
  mounted() {
    // let map5 = this.echarts.init(document.getElementById('map5'));
    // map5.setOption(this.LineOpt);
    // window.onresize = map5.resize;
  },
};
</script>
<style>
.title4{
  position: relative;
  top: 105px;
  left: 5px;
  height: 30px;
}
.table4{
  width: 100%;
  height: 177px;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/34b4b2bd9877031ae7bd1a55f7787655.png');
  /* background-color: rgb(0, 0, 0);  */
  background-size: 100% 100%;
  position: relative;
  top: 104px;
  left: 5px; 
}
.chinese-title2{
  color: rgb(25, 128, 214);
  font-size: 14px;
  font-weight: bold;
  float: left;
}
.english-title2{
  color: rgb(255, 255, 255);
  font-size: 20px;
  width: 420px;
  color: rgb(144, 160, 174);
  transform: scale(0.48);
  font-family: "Microsoft Yahei", Arial, sans-serif;
  font-weight: normal;
  position: absolute;
  left: -45px;
}
.con-svg3{
  transform: scale(0.8);
  position: relative;
  left: -30%px;
  top: -10px;
  width: 90%;
  height: 100%;
}
.table4-suspicious{
  display: inline-block;
  position: relative;
  left: -10px;
  top: 20px;
  width: 15%;
  line-height:18px
}
.table4-des1{
  font-size: 20px;
  width: 160px;
  color: white;
  transform: scale(0.48);
  font-weight: 600;
}
.table4-num1{
  font-size: 17px;
  color: rgb(25, 128, 214);
  font-weight: 600;
  display: inline-block;
  margin-left: 40px;
}
.table4-unit1{
  font-size: 20px;
  color: rgb(140, 140, 140);
  font-weight: 600;
  transform: scale(0.48);
  display: inline-block;
  position: relative;
  left: -5px;
  top: 3px;
}
.table4-call{
  display: inline-block;
  position: relative;
  left: -20px;
  top: 20px;
  width: 20%;
  line-height:18px
}
.table4-des2{
  font-size: 20px;
  width: 300px;
  color: white;
  transform: scale(0.48);
  font-weight: 600;
}
.table4-num2{
  font-size: 17px;
  color: rgb(25, 128, 214);
  font-weight: 600;
  display: inline-block;
  margin-left: 76px;
}
.table4-unit2{
  font-size: 20px;
  color: rgb(140, 140, 140);
  font-weight: 600;
  transform: scale(0.48);
  display: inline-block;
  position: relative;
  left: -5px;
  top: 3px;
}
.table4-serve{
  display: inline-block;
  position: relative;
  left: 40px;
  top: 20px;
  width: 20%;
  line-height:18px
}
.table4-des3{
  font-size: 20px;
  width: 300px;
  color: white;
  transform: scale(0.48);
  font-weight: 600;
}
.table4-num3{
  font-size: 17px;
  color: rgb(25, 128, 214);
  font-weight: 600;
  display: inline-block;
  margin-left: 76px;
}
.table4-unit3{
  font-size: 20px;
  color: rgb(140, 140, 140);
  font-weight: 600;
  transform: scale(0.48);
  display: inline-block;
  position: relative;
  left: -5px;
  top: 3px;
}
.table4-svg-title{
  color: rgb(144, 160, 174);
  font-weight: normal;
  font-family: "Microsoft Yahei", Arial, sans-serif;
  font-size: 20px;
  transform: scale(0.5);
  position: relative;
  left: 0px;
  top: 30px;
}
.echarts-line{
  width:120%;
  position:relative;
  left: -40px;
  top:-15px
}
</style>