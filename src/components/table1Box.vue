<template>
  <div class="table1">
        <div class="table1-draw">
          <div class="pie">
            <e-charts :option="PieOpt"></e-charts>
          </div>
          <div class="bar">
            <e-charts  :option="BarOpt"></e-charts>
          </div>
        </div>
        <div class="table1-list1-title">
          各街道复工企业数
        </div>
        <div class="table1-list1-head">
          <div class="table1-list1-head1">
            {{table1Head[0]}}
          </div>
          <div class="table1-list1-head2">
            {{table1Head[1]}}
          </div>
        </div>
        <div class="table1-list1" @mouseenter="stopTable1" @mouseleave="startTable1">
          <div class="table1-list1-row"
          :style="`top:${-15 *nowIndex}px;`" 
          v-for="(item, idx) in table1List" :key="idx">
            <div class="table1-list1-content1">
              {{item.region}}
            </div>
            <div class="table1-list1-content2">
              {{item.account}}
            </div>
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
      PieOpt:{
            title: {
                text: '全区复工企业',
                left:'10%',
                bottom :'10%',
                textStyle:{
                    fontSize:10,
                    fontWeight:'1000',
                    align:'center',
                    color: 'rgb(144, 160, 174)',
                }
            },
            color:["#005eff","#222222"],
            series: [{
                type: "pie",
                itemSty:{
                },
                radius: ["70%", "80%"],//圆环大小
                center: ["45%", "40%"],//图表的位置
                avoidLabelOverlap: false,//是否启用防止标签重叠策略
                emphasis:false,//动画效果
                label: {
                    show: true,
                    position:'center',
                    fontSize:'15',
                    fontWeight:'bolder',
                    color: '#005eff',
                    formatter:function(params){
                        if (params.dataIndex === 0) {
                            return `${params.value}.0%`
                        } else {
                            return ''
                        }
                    }, 
                },
                // 不显示
                labelLine: {
                    show: false,
                },
                itemStyle: {
                    borderRadius: 5
                },
                data: [
                    { 
                        value: 54, 
                        name: "复工企业",  
                        // itemStyle: { color: '#005eff' }
                    },
                    { 
                        value: 46, 
                        name: "未复工企业" ,
                    },
                ]
            }]
        },
        BarOpt : {
          // barGap:'0%',/*多个并排柱子设置柱子之间的间距*/
          barMaxHeight: 2000, 
            xAxis: {
                type: 'category',
                data: ['上海', '深圳', '合肥', '成都', '安徽', '北京', '杭州','长沙'],
                color: 'rgb(144, 160, 174)',
                axisLabel: {
                    interval:0,//显示所有名字
                    inside: false,
                    fontSize:'10',
                    margin:'2',
                },
                axisTick:{
                    show:false
                }
            },
            yAxis: {
                type: 'value',
                max: 101,
                splitLine:{
                    show:false,
                },
                axisLine:{
                    show:true
                },
                axisLabel:{
                    interval:0,//显示所有名字
                    inside: false,
                    margin:'2'
                }
            },
            series: [{
                data: [],
                type: 'bar',
                barWidth:10,
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)',
                },
                itemStyle:{
                  color: 'rgb(25, 128, 214)',
                },
                label:{

                }
            }]
        },
      table1List: [
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某街道',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
      ],
      table1Head: ['街道', '企业数量'],
      nowIndex: 0,
      timer1: null,
    };
  },
  props: {},
  methods: {
    stopTable1(){
      clearInterval(this.timer1);        
      this.timer1 = null;
    },
    startTable1(){
      this.timer1 = setInterval(async() => {
        let first = this.table1List[this.nowIndex];
        this.nowIndex++;
        
        this.table1List.push(first);
      },3000);
    },
  },
  // 页面初载
  mounted() {
    this.timer1 = setInterval(async() => {
      let first = this.table1List[this.nowIndex];
      this.nowIndex++;
      
      this.table1List.push(first);
    },3000);
    setInterval(()=>{
      this.BarOpt.series[0].data = [
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
        Math.random() * 100,
      ]
    },1000);
  },
};
</script>
<style>
.table1{
  width: 312px;
  height: 300px;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/d39cf4d0e85b9dce804f83d604da19a5.png');
  background-color: rgb(0, 0, 0); 
  background-size: 100% 100%;
  position: absolute;
  top: 106px;
  left: 35px;
  overflow: hidden;
}
.table1-draw{
  height: 120px;
}
.pie{
  display: inline-block;
  width:80px;
  height: 100px;
  position: relative;
  left: 30px;
  top: -100px;
}
.bar{
  display: inline-block;
  width:200px;
  height: 200px;
  position: relative;
  left: 40px;
  top: -50px;
}
.table1-list1-title{
  color: white;
  font-size: 20px;
  display: inline-block;
  transform: scale(0.57);
  position: relative;
  left: -20px;
  top: -5px;
}
.table1-list1-head{
  position: relative;
  left: 20px;
  top: -5px;
  background: rgb(34, 34, 34);
  height: 20px;
  width: 278px;
  line-height: 20px;
}
.table1-list1-head1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
}
.table1-list1-head2{
  display: inline-block;
  margin-left: 140px;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
  vertical-align: center;
}
.table1-list1{
  position: relative;
  left: 20px;
  top: -5px;
  width: 278px;
  height: 120px;
  overflow: hidden;
  
}
.table1-list1-row{
  height: 15px;
  width: 278px;
  line-height: 17px;
  text-align: left;
  position: relative;
  transition: all 1s linear;
}
.table1-list1-content1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.48);
  color: rgb(255, 255, 255, 0.8);
  margin-left: -25px;
}
.table1-list1-content2{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.48);
  color: rgb(255, 255, 255, 0.8);
  margin-left: 73px;
}
.table1-list1 :nth-child(2n){
	background: rgb(26, 26, 26);
}
.table1-list1 :nth-child(2n+1){
	background: rgb(34, 34, 34);
}
</style>