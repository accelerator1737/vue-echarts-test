<template>
    <div class="table7">
        <div class="table7-necessary">
          <div class="table5-list2-title">
            企业复工物资需求总量
          </div>
          <div class="table5-list1-big-number">
            {{table7Data1}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
        </div>
        <div class="table7-list1-head">
          <div class="table7-list1-head1">
            {{table7Head[0]}}
          </div>
          <div class="table7-list1-head2">
            {{table7Head[1]}}
          </div>
        </div>
        <div class="table7-list1"  @mouseenter="stopTable5" @mouseleave="startTable5">
          <div class="table7-list1-row" 
          :style="`top:${-22 *nowIndex4}px;`" 
          v-for="(item,idx) in table7List" :key="idx">
            <div class="table7-list1-content1">
              {{item.index}}&#12288;{{item.region}}
            </div>
            <div class="table7-list1-content2">
              {{item.account}}
            </div>
          </div>
        </div>
        <div class="table7-pie">
          <e-charts :option="table7Pie"></e-charts>
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
      table7Head: ['物资', '数量'],
      table7List: [
        {
          index: 1,
          region: '物资一',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 2,
          region: '物资二',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 3,
          region: '物资三',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 4,
          region: '物资四',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 5,
          region: '物资五',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 6,
          region: '物资六',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 7,
          region: '物资七',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 8,
          region: '物资八',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 9,
          region: '物资九',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
      ],
      table7Data1: Math.floor(Math.random() * 200 - 100),
      table7Pie: {
              title: {
                      text: '物资需求类别及数量',
                      left:'center',
                      bottom :'-6',
                      textStyle:{
                          fontSize:9,
                          fontWeight:'1000',
                          color: 'rgb(144, 160, 174)',
                      }
                  },
              series: [{
                  type: "pie",
                  itemStyle:{},
                  radius: ["57%", "70%"],//圆环大小
                  center: ["50%", "42%"],//图表的位置
                  avoidLabelOverlap: false,//是否启用防止标签重叠策略
                  label: {
                      show: true,
                      position: 'center',
                      fontSize: 10,
                  },
                  emphasis: {
                      label: {
                          show: true,
                          fontSize: '10',
                          fontWeight: 'bold',
                          formatter:function(params){
                              return `${params.value}%\n ${params.name}`
                          }
                      }
                  },
                  // 不显示
                  labelLine: {
                      show: false,
                  },
                  data: [
                      { 
                          value: 22, 
                          name: "TY...",  
                          itemStyle: { color: '#57CDff' }
                      },
                      { 
                          value: 17, 
                          name: "TY...",  
                          itemStyle: { color: '#1073ff' }
                      },
                      { 
                          value: 30, 
                          name: "TY...",  
                          itemStyle: { color: '#1dc499' }
                      },
                      { 
                          value: 24, 
                          name: "TY...",  
                          itemStyle: { color: '#177bbb' }
                      },
                      { 
                          value: 7, 
                          name: "TY...",  
                          itemStyle: { color: '#3ddcde' }
                      },
                  ]
              }],
      },    
      timer5: null,
      nowIndex4: 0,
    };
  },
  props: {},
  methods: {
    stopTable5(){
      clearInterval(this.timer5);        
      this.timer5 = null;
    },
    startTable5(){
      this.timer5 = setInterval(async() => {
        let first = this.table7List[this.nowIndex4];
        this.nowIndex4++;
        this.table7List.push(first);
      },3000);
    },
  },
  // 页面初载
  mounted() {
    this.timer5 = setInterval(async() => {
      let first = this.table7List[this.nowIndex4];
      this.nowIndex4++;
      this.table7List.push(first);
    },3000);
  },
};
</script>
<style>
.table7{
  width: 312px;
  height: 178px;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/760a7c241fcbb3582b2ccfb5b809d8f0.png');
  background-color: rgb(0, 0, 0); 
  background-size: 100% 100%;
  position: relative;
  top: 37px;
  left: 5px; 
}
.table7-necessary{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
}
.table7-list1-head{
  position: relative;
  left: 160px;
  top: -38px;
  background: rgb(34, 34, 34);
  height: 20px;
  line-height: 20px;
  width: 150px;
}
.table7-list1-head1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
}
.table7-list1-head2{
  display: inline-block;
  margin-left: 60px;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
  vertical-align: center;
}
.table7-list1{
  position: relative;
  left: 150px;
  top: -38px;
  width: 160px;
  height: 132px;
  overflow: hidden;
}
.table7-list1-row{
  height: 22px;
  width: 160px;
  line-height: 20px;
  text-align: left;
  position: relative;
  transition: all 1s linear;
}
.table7-list1-content1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.5);
  color: rgb(255, 255, 255, 0.8);
  margin-left: -18px;
}
.table7-list1-content2{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.5);
  color: rgb(255, 255, 255, 0.8);
  margin-left: 33px;
}
.table7-list1 :nth-child(2n){
	background: rgb(26, 26, 26);
}
.table7-list1 :nth-child(2n+1){
	background: rgb(34, 34, 34);
}
.table7-pie{
  height: 80px;
  width: 80px;
  position: relative;
  left: 20px;
  top: -140px;
}
.table5-list2-title{
  color: white;
  font-size: 20px;
  transform: scale(0.48);
  position: relative;
  font-weight: 600;
  left: -70px;
  width: 280px;
  top: 0px;
}
.table5-list1-big-number{
  display: inline-block;
  color: rgb(25, 128, 214);
  font-size: 17px;
  position: relative;
  left: 2px;
  top: -10px;
}
.table5-list1-unit{
  display: inline-block;
  color: rgb(140, 140, 140);
  font-weight: bolder;
  vertical-align: super;
  font-family: Microsoft Yahei;
  font-size: 20px;
  transform: scale(0.48);
  vertical-align: bottom;
  position: relative;
  left: -8px;
  top: -7px;
}
</style>