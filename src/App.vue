<template>
  <div class="page">
    <div class="page-left">
      <div class="all-title">
        省市区县企业复工情况大屏
      </div>
      <div class="title1">
        <div class="chinese-title1">
          企业复工现状
        </div>
        <div class="english-title1">
          Status quo of resumption of work
        </div>
      </div>
      <table-1-box></table-1-box>
      <div class="title2">
        <div class="chinese-title2">
          经济状况
        </div>
        <div class="english-title2">
          Economic situation
        </div>
      </div>
      <table-2-box></table-2-box>
      <div class="title3">
        <div class="chinese-title2">
          防疫情况
        </div>
        <div class="english-title2">
          Epidemic prevention situation
        </div>
      </div>
      <table-3-box></table-3-box>
    </div>
    <div class="page-main">
      <map-box></map-box>
      <table-4-box></table-4-box>
      <clock class="clock-position"></clock>
    </div>
    <div class="page-right">
      <div class="hang-time">
        <div class="now-time">
          {{date}}
        </div>
      </div>
      <table-5-box></table-5-box>
      
      <div class="title6">
        <div class="chinese-title2">
          返工来源
        </div>
        <div class="english-title2">
          Rework source
        </div>
      </div>
      <table-6-box></table-6-box>
      

      <div class="title7">
        <div class="chinese-title2">
          物资需求
        </div>
        <div class="english-title2">
          Material demand
        </div>
      </div>
      <table-7-box></table-7-box>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import Clock from './components/box.vue'
import table5Box from './components/table5Box.vue'
import table4Box from './components/table4Box.vue'
import table1Box from './components/table1Box.vue'
import table2Box from './components/table2Box.vue'
import table3Box from './components/table3Box.vue'
import table6Box from './components/table6Box.vue'
import table7Box from './components/table7Box.vue'
import mapBox from './components/mapBox.vue'


export default {
  components: {
    Clock,
    table5Box,
    table4Box,
    table1Box,
    table2Box,
    table3Box,
    table6Box,
    table7Box,
    mapBox,
  },
  data () {
    return {
      date: '',
    };
  } ,
  methods: {
    onCreate(){
      this.CREATE(this.searchValue);
    },
    currentTime(){
        setInterval(() => {
           this.date=moment(new Date()).format("YYYY-MM-DD HH:mm:ss");
        }, 1000);
    },


    setTime() {
      const clock = document.querySelector(".clock");
      const center = {
        x: 100,
        y: 100,
      };
      const radius = 100 - 20;
      for (let i = 0; i < 12; i++) {
        // 创建元素
        const scale = document.createElement("div");
        if (i === 0) {
          scale.innerText = 12;
        } else {
          scale.innerText = i;
        }
        // 添加class属性
        scale.setAttribute("class", "scale");
        // 计算角度
        const alpha = (i * 30 * Math.PI) / 180;
        const x = center.x + radius * Math.sin(alpha);
        const y = center.y - radius * Math.cos(alpha);
        // es2015(es6)字符串模板 反引号+${}
        scale.style = `position: absolute; top: ${y}px; left: ${x}px;`;
        // 将创建好的元素追加至父元素
        clock.appendChild(scale);
      }
    },
  },
  mounted(){
    this.setTime();
    this.currentTime();
  }
}
</script>

<style>
body {
  margin: 0;
}
.page{
  width: 100%;
  height: 121%;
  background: url('F:/VSCode/file/my-vue-app/public/alimap/backward.png');
  background-color: rgb(0, 0, 0); 
  transform-origin: left top; 
  background-size: 100% 100%;
  display: grid;
  grid-template-columns: 355px 1fr 355px;
}
.page-left{
  height: 100%;
}
.page-main{
  height: 100%;
  overflow: hidden;
}
.page-right{
  height: 100%;
}
.all-title{
  color: rgb(25, 128, 214);
  font-size: 26px;
  font-weight: bold;
  position: relative;
  top: 31px;
  left: 29px;
}
.chinese-title1{
  color: rgb(25, 128, 214);
  font-size: 14px;
  font-weight: bold;
  float: left;
}
.english-title1{
  color: rgb(255, 255, 255);
  font-size: 20px;
  width: 420px;
  color: rgb(144, 160, 174);
  transform: scale(0.48);
  font-family: "Microsoft Yahei", Arial, sans-serif;
  font-weight: normal;
  position: absolute;
  left: -20px;
}
.title1{
  position: relative;
  top: 46px;
  left: 40px;
  height: 30px;
}
.title2{
  position: relative;
  top: 356px;
  left: 40px;
  height: 30px;
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
.title3{
  position: relative;
  top: 546px;
  left: 40px;
  height: 30px;
}
.clock-position{
  position: relative;
  top: -750px;
  left: 550px;
}
.hang-time{
  height: 70px;
  /* background: red; */
}
.now-time{
  display: inline-block;
  position: relative;
  color: white;
  font-size: 13px;
  left: 210px;
  top: 50px;
}
.title6{
  position: relative;
  top: 20px;
  left: 5px;
  height: 30px;
}
.title7{
  position: relative;
  top: 36px;
  left: 5px;
  height: 30px;
}
</style>
