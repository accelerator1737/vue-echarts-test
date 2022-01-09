<template>
    <div>
      <div class="title5">
        <div class="chinese-title1">
          职工健康状况
        </div>
        <div class="english-title1">
          Health status of employees
        </div>
      </div>
      <div class="table5">
        <div class="table5-cast">
          <div class="table5-list1-title">
            全区复工职工总数
          </div>
          <div class="table5-list1-big-number">
            {{table5Data1}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table5Data1>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table5Data1}}%
          </div>
        </div>
        <div class="table5-exist">
          <div class="table5-list2-title">
            全区上报存在发热职工数量
          </div>
          <div class="table5-list1-big-number">
            {{table5Data2}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table5Data2>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table5Data2}}%
          </div>
        </div>
        <div class="table5-touch">
          <div class="table5-list2-title">
            全区有接触疫情区域职工数量
          </div>
          <div class="table5-list1-big-number">
            {{table5Data3}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table5Data3>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table5Data3}}%
          </div>
        </div>
        <div class="table5-rework">
          <div class="table5-list2-title">
            各街道复工职工数量
          </div>
          <div class="table5-list1-big-number">
            {{table5Data4}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table5Data4>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table5Data4}}%
          </div>
        </div>
        <div class="table5-health">
          <div class="table5-list2-title">
            各街道职工健康情况
          </div>
          <div class="table5-list1-big-number">
            {{table5Data5}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table5Data5>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table5Data5}}%
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      table5Data1: Math.floor(Math.random() * 200 - 100),
      table5Data2: Math.floor(Math.random() * 200 - 100),
      table5Data3: Math.floor(Math.random() * 200 - 100),
      table5Data4: Math.floor(Math.random() * 200 - 100),
      table5Data5: Math.floor(Math.random() * 200 - 100),
    };
  },
  props: {},
  methods: {
    
  },
  // 页面初载
  mounted() {
  },
};
</script>
<style>
.title5{
  position: relative;
  top: 10px;
  left: 5px;
  height: 30px;
}
.table5{
  width: 312px;
  height: 165px;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/61f13416a5bb4769febd2059f50d19c8.png');
  background-color: rgb(0, 0, 0); 
  background-size: 100% 100%;
  position: relative;
  top: 3px;
  left: 5px; 
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
.table5-cast{
  width: 280px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  border-bottom: 1px solid rgb(104, 104, 104);
}
.table5-list1-title{
  color: white;
  font-size: 20px;
  transform: scale(0.48);
  position: relative;
  font-weight: 600;
  left: -70px;
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
.table5-list1-icon{
  display: inline-block;
  width: 12px;
  height: 9px;
  pointer-events: auto;
  background-image: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/481446f91f1902ee4c0f787bd383a280.png');
  border-radius: 0px;
  image-rendering: -webkit-optimize-contrast;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  left: -15px;
  top: -8px;
}
.table5-list1-icon-rotate{
  display: inline-block;
  width: 12px;
  height: 9px;
  pointer-events: auto;
  background-image: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/481446f91f1902ee4c0f787bd383a280.png');
  border-radius: 0px;
  image-rendering: -webkit-optimize-contrast;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  left: -15px;
  top: -8px;
  transform: rotate(180deg);
}
.table5-list1-small-number{
  display: inline-block; 
  color: rgb(25, 128, 214);
  font-size: 20px;
  transform: scale(0.44);
  position: relative;
  left: -26px;
  top: -6px;
}
.table5-exist{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  border-bottom: 1px solid rgb(104, 104, 104);
  border-right: 1px solid rgb(104, 104, 104);
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
.table5-touch{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  border-bottom: 1px solid rgb(104, 104, 104);
  padding-left: 10px;
}
.table5-rework{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  border-right: 1px solid rgb(104, 104, 104);
}
.table5-health{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  padding-left: 10px;
}
</style>