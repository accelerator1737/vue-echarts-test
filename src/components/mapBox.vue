<template>
    <div class="main-map">
        <div class="entain-block1">
          <div class="block1">
            <div class="main-word1">
              企业总数
            </div>
            <div class="main-number1">
              {{numberFormat(mainTotal)}}
            </div>
          </div>
          <div class="float-div">
          </div>
        </div>
        <div class="entain-block2">
          <div class="block2">
            <div class="main-word1">
              已复工企业总数
            </div>
            <div class="main-number1">
              {{numberFormat(alreadyTotal)}}
            </div>
          </div>
          <div class="float-div">
          </div>
        </div>
        <div class="entain-block3">
          <div class="block3">
            <div class="main-word1">
              区内企业员工总数
            </div>
            <div class="main-number1">
              {{numberFormat(regionTotal)}}
            </div>
          </div>
          <div class="float-div">
          </div>
        </div>
        <div class="entain-block4">
          <div class="block4">
            <div class="main-word1">
              区内已开工员工总数
            </div>
            <div class="main-number1">
              {{numberFormat(beginTotal)}}
            </div>
          </div>
          <div class="float-div">
          </div>
        </div>
        
        <div class="center-map">
          <e-charts :option="mapData" autoresize></e-charts>
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

import {registerMap} from 'echarts';
import axios from 'axios'

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
      mainTotal: Math.floor(Math.random() * 100000),
      alreadyTotal: Math.floor(Math.random() * 100000),
      regionTotal: Math.floor(Math.random() * 100000),
      beginTotal: Math.floor(Math.random() * 100000),
      mapData:{},
    };
  },
  props: {},
  methods: {
    numberFormat(cellValue) {
      return cellValue ? cellValue.toLocaleString() : "";
    },
        async run(){
      const res = await axios.get('/mapdata/成都市.json');
      registerMap('chengdu', res.data);
      this.mapData = {
        geo: {
          show: true,
          map: 'chengdu',
          selected: 'single',
          label: {
            show: true,
            position: 'inside',
            color: '#FFF',
          },
          itemStyle: {
            color: '#000',
            borderType: 'solid',
            borderColor: '#FFF',
          },
          regions: [{
              name: '双流区',
              itemStyle: {
                  areaColor: '#F44C27',
              },
          },
          {
              name: '简阳市',
              itemStyle: {
                  areaColor: '#249CF1',
              },
          },
          {
              name: '新津县',
              itemStyle: {
                  areaColor: '#249CF1',
              },
          },
          {
              name: '龙泉驿区',
              itemStyle: {
                  areaColor: '#249CF1',
              },
          },
          {
              name: '大邑县',
              itemStyle: {
                  areaColor: '#249CF1',
              },
          }],
        },
      }
    },
  },
  // 页面初载
  mounted() {
    this.run();
  },
};
</script>
<style>
.main-map{
  width: 100%;
  height: 537px;
  background: url('https://img.alicdn.com/tfs/TB1LmKXXfvi21VjSZK9XXaAEpXa-1902-1282.png');
  background-color: rgb(0, 0, 0); 
  background-size: 100% 100%;
  position: relative;
  top: 82px;
  left: 5px; 
}
.float-div {
  position: relative;
  top: -90px;
  left: 0px;
  animation: ABC 1s infinite linear;
  background-color: rgba(255, 255, 255, .1);
  height: 90px;
}
@keyframes ABC {
  0% {
    width: 1%;
    border-right: 2px solid rgba(255, 255, 255, .2);
  }
  100% {
    width: 90%;
    border-right: 2px solid rgba(255, 255, 255, .6);
  }
}
.entain-block1{
  width: 26%;
  height: 90px;
  transform: scale(0.8);
  /* background: red; */
  position: relative;
  left: 40px;
  top: 40px;
}
.entain-block2{
  width: 26%;
  height: 90px;
  transform: scale(0.8);
  /* background: red; */
  position: relative;
  left: 40px;
  top: 80px;
}
.entain-block3{
  width: 26%;
  height: 90px;
  transform: scale(0.8);
  /* background: red; */
  position: relative;
  left: 40px;
  top: 120px;
}
.entain-block4{
  width: 26%;
  height: 90px;
  transform: scale(0.8);
  /* background: red; */
  position: relative;
  left: 40px;
  top: 160px;
}
.block1{
  display: inline-block;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/26a66bf2209065a78a54dcb84c08d29d.png');
  position: relative;
  background-size: 100%;
  width: 100%;
  height: 90px;
  /* transform: scale(0.8); */
  left: 0px;
  top: 0px;
}
.main-word1{
  color: rgb(255, 255, 255);
  font-weight: bold;
  font-family: "Microsoft Yahei", Arial, sans-serif;
  font-size: 16px;
  position: relative;
  left: 15px;
  top: 20px;
}
.main-number1{
  color: rgb(8, 142, 255);
  font-weight: bold;
  font-size: 26px;
  position: relative;
  left: 15px;
  top: 20px;
}
.block2{
  display: inline-block;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/26a66bf2209065a78a54dcb84c08d29d.png');
  position: relative;
  width: 100%;
  height: 90px;
  background-size: 100%;
  /* transform: scale(0.8); */
  left: 0px;
  top: 0px;
}
.block3{
  display: inline-block;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/26a66bf2209065a78a54dcb84c08d29d.png');
  position: relative;
  width: 100%;
  height: 90px;
  background-size: 100%;
  /* transform: scale(0.8); */
  left: 0px;
  top: 0px;
}
.block4{
  display: inline-block;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/26a66bf2209065a78a54dcb84c08d29d.png');
  position: relative;
  width: 100%;
  background-size: 100%;
  height: 90px;
  /* transform: scale(0.8); */
  left: 0px;
  top: 0px;
}
.center-map{
  height: 450px;
  width: 74%;
  background: transparent;
  position: relative;
  left: 20%;
  top: -300px;
}
</style>