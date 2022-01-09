<template>
    <div class="table2">
        <div class="table2-list1-title">
          全区企业一季度预计产值
        </div>
        <div class="table2-number">
          <div class="table2-big-number">
            {{table2Big}}
          </div>
          <div class="table2-unit">
            万元
          </div>
          <div class="table2-icon" v-if="table2Big>=0">
          </div>
          <div class="table2-icon-rotate" v-else>
          </div>
          <div class="table2-small-number">
            {{table2Big}}%
          </div>
        </div>
        <div class="table2-list1-head">
          <div class="table2-list1-head1">
            {{table2Head[0]}}
          </div>
          <div class="table2-list1-head2">
            {{table2Head[1]}}
          </div>
        </div>
        <div class="table2-list1"  @mouseenter="stopTable2" @mouseleave="startTable2">
          <div class="table2-list1-row"
          :style="`top:${-18 *nowIndex1}px;`" 
          v-for="(item,idx) in table2List" :key="idx">
            <div class="table2-list1-content1">
              {{item.region}}
            </div>
            <div class="table2-list1-content2">
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
      table2Head: ['区域', '企业数量'],
      table2Big: Math.floor(Math.random() * 200 - 100),
      table2List: [
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
        {
          region: 'xx省市某某区域',
          account: Math.floor(Math.random() * 8000 + 1000),
        },
      ],
      timer2: null,
      nowIndex1: 0,
    };
  },
  props: {},
  methods: {
    stopTable2(){
      clearInterval(this.timer2);        
      this.timer2 = null;
    },
    startTable2(){
      this.timer2 = setInterval(async() => {
        let first = this.table2List[this.nowIndex1];
        this.nowIndex1++;
        this.table2List.push(first);
      },3000);
    },
  },
  // 页面初载
  mounted() {
      this.timer2 = setInterval(async() => {
      let first = this.table2List[this.nowIndex1];
      this.nowIndex1++;
      
      this.table2List.push(first);
    },3000);
  },
};
</script>
<style>
.table2{
  width: 312px;
  height: 179px;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/54b40cc9e52849a5f0c271df1d066d22.png');
  background-color: rgb(0, 0, 0); 
  background-size: 100% 100%;
  position: absolute;
  top: 446px;
  left: 35px; 
}
.table2-list1-title{
  color: white;
  font-size: 20px;
  display: inline-block;
  transform: scale(0.5);
  position: relative;
  font-weight: 600;
  left: -40px;
  top: 6px;
}
.table2-number{
  position: relative;
  left: 15px;
  top: -4px;
  position: relative;
  left: 0px;
  top: -5px;
}
.table2-big-number{
  display: inline-block;
  color: rgb(25, 128, 214);
  font-size: 17px;
  position: relative;
  left: 15px;
  top: 0px;
}
.table2-unit{
  display: inline-block;
  color: rgb(140, 140, 140);
  font-weight: bolder;
  vertical-align: super;
  font-family: Microsoft Yahei;
  font-size: 20px;
  transform: scale(0.48);
  vertical-align: bottom;
  position: relative;
  left: 5px;
  top: 3px;
}
.table2-icon{
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
  left: -2px;
  top: 2px;
}
.table2-icon-rotate{
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
  left: -2px;
  top: 2px;
  transform: rotate(180deg);
}
.table2-small-number{
  display: inline-block; 
  color: rgb(25, 128, 214);
  font-size: 20px;
  transform: scale(0.44);
  position: relative;
  left: -13px;
  top: 4px;
}
.table2-list1-head{
  position: relative;
  left: 20px;
  top: 0px;
  background: rgb(34, 34, 34);
  height: 20px;
  width: 278px;
  line-height: 20px;
}
.table2-list1-head1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
}
.table2-list1-head2{
  display: inline-block;
  margin-left: 140px;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
  vertical-align: center;
}
.table2-list1{
  position: relative;
  left: 20px;
  top: 0px;
  width: 278px;
  height: 90px;
  overflow: hidden;
}
.table2-list1-row{
  height: 18px;
  width: 278px;
  line-height: 18px;
  text-align: left;
  position: relative;
  transition: all 1s linear;
}
.table2-list1-content1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.5);
  color: rgb(255, 255, 255, 0.8);
  margin-left: -25px;
}
.table2-list1-content2{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.5);
  color: rgb(255, 255, 255, 0.8);
  margin-left: 73px;
}
.table2-list1 :nth-child(2n){
	background: rgb(26, 26, 26);
}
.table2-list1 :nth-child(2n+1){
	background: rgb(34, 34, 34);
}
</style>