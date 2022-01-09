<template>
    <div class="table6">
        <div class="table6-home1">
          <div class="table5-list2-title">
            xx籍员工数
          </div>
          <div class="table5-list1-big-number">
            {{table6Data1}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table6Data1>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table6Data1}}%
          </div>
        </div>
        <div class="table6-home2">
          <div class="table5-list2-title">
            xx籍员工数
          </div>
          <div class="table5-list1-big-number">
            {{table6Data2}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table6Data2>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table6Data2}}%
          </div>
        </div>
        <div class="table6-return">
          <div class="table5-list2-title">
            从xx返穗员工数
          </div>
          <div class="table5-list1-big-number">
            {{table6Data3}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table6Data3>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table6Data3}}%
          </div>
        </div>
        <div class="table6-touch">
          <div class="table5-list2-title">
            接触xx籍人员数
          </div>
          <div class="table5-list1-big-number">
            {{table6Data4}}
          </div>
          <div class="table5-list1-unit">
            万元
          </div>
          <div class="table5-list1-icon" v-if="table6Data4>=0">
          </div>
          <div class="table5-list1-icon-rotate" v-else>
          </div>
          <div class="table5-list1-small-number">
            {{table6Data4}}%
          </div>
        </div>
        <div class="table6-list1-title">
          全国返工来源TOP
        </div>
        <div class="table6-list1-head">
          <div class="table6-list1-head1">
            {{table6Head[0]}}
          </div>
          <div class="table6-list1-head2">
            {{table6Head[1]}}
          </div>
        </div>
        <div class="table6-list1"  @mouseenter="stopTable4" @mouseleave="startTable4">
          <div class="table6-list1-row"
          :style="`top:${-18 *nowIndex3}px;`" 
          v-for="(item,idx) in table6List" :key="idx">
            <div class="table6-list1-content1">
              {{item.index}}&#12288;{{item.region}}
            </div>
            <div class="table6-list1-content2">
              {{item.account}}
            </div>
          </div>
        </div>
      </div>
</template>
<script>
export default {
  data() {
    return {
      table6Head: ['区域', '企业数量'],
      table6Data1: Math.floor(Math.random() * 200 - 100),
      table6Data2: Math.floor(Math.random() * 200 - 100),
      table6Data3: Math.floor(Math.random() * 200 - 100),
      table6Data4: Math.floor(Math.random() * 200 - 100),
      table6List: [
        {
          index: 1,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 2,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 3,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 4,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 5,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 6,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 7,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 8,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          index: 9,
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
      ],
      timer4: null,
      nowIndex3: 0,
    };
  },
  props: {},
  methods: {
    stopTable4(){
      clearInterval(this.timer4);        
      this.timer4 = null;
    },
    startTable4(){
      this.timer4 = setInterval(async() => {
        let first = this.table6List[this.nowIndex3];
        this.nowIndex3++;
        this.table6List.push(first);
      },3000);
    },
  },
  // 页面初载
  mounted() {
     this.timer4 = setInterval(async() => {
      let first = this.table6List[this.nowIndex3];
      this.nowIndex3++;
      this.table6List.push(first);
    },3000);
  },
};
</script>
<style>
.table6{
  width: 312px;
  height: 307px;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/88a55c242f0276eed3d7a742ee42acc4.png');
  background-color: rgb(0, 0, 0); 
  background-size: 100% 100%;
  position: relative;
  top: 15px;
  left: 5px;
  overflow: hidden; 
}
.table6-home1{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  border-bottom: 1px solid rgb(104, 104, 104);
  border-right: 1px solid rgb(104, 104, 104);
}
.table6-home2{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  border-bottom: 1px solid rgb(104, 104, 104);
  padding-left: 10px;
}
.table6-return{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  border-bottom: 1px solid rgb(104, 104, 104);
  border-right: 1px solid rgb(104, 104, 104);
}
.table6-touch{
  display: inline-block;
  width: 140px;
  height: 50px;
  position: relative;
  left: 17px;
  top: 10px;
  border-bottom: 1px solid rgb(104, 104, 104);
  padding-left: 10px;
}
.table6-list1-head{
  position: relative;
  left: 20px;
  top: 12px;
  background: rgb(34, 34, 34);
  height: 20px;
  width: 278px;
  line-height: 20px;
}
.table6-list1-head1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
}
.table6-list1-head2{
  display: inline-block;
  margin-left: 140px;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
  vertical-align: center;
}
.table6-list1{
  position: relative;
  left: -3px;
  top: 12px;
  width: 278px;
  height: 144px;
  overflow: hidden;
}
.table6-list1-row{
  height: 18px;
  width: 278px;
  line-height: 18px;
  text-align: left;
  position: relative;
  transition: all 1s linear;
}
.table6-list1-content1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.5);
  color: rgb(255, 255, 255, 0.8);
  margin-left: -25px;
}
.table6-list1-content2{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.5);
  color: rgb(255, 255, 255, 0.8);
  margin-left: 65px;
}
.table6-list1 :nth-child(2n){
	background: rgb(26, 26, 26);
}
.table6-list1 :nth-child(2n+1){
	background: rgb(34, 34, 34);
}
.table6-list1-title{
  color: white;
  font-size: 20px;
  display: inline-block;
  transform: scale(0.58);
  position: relative;
  left: -20px;
  top: 15px;
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
</style>