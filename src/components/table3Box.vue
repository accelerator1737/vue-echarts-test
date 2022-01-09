<template>
    <div class="table3">
        <div class="table3-list1-title">
          三家病毒筛查机构情况
        </div>
        <div class="table3-list1-head">
          <div class="table3-list1-head1">
            {{table3Head[0]}}
          </div>
          <div class="table3-list1-head2">
            {{table3Head[1]}}
          </div>
        </div>
        <div class="table3-list1"  @mouseenter="stopTable3" @mouseleave="startTable3">
          <div class="table3-list1-row"
          :style="`top:${-18 *nowIndex2}px;`" 
          v-for="(item,idx) in table3List" :key="idx">
            <div class="table3-list1-content1">
              {{item.region}}
            </div>
            <div class="table3-list1-content2">
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
      table3Head: ['街道', '企业数量'],
      table3List: [
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
      timer3: null,
      nowIndex2: 0,
    };
  },
  props: {},
  methods: {
    stopTable3(){
      clearInterval(this.timer3);        
      this.timer3 = null;
    },
    startTable3(){
      this.timer3 = setInterval(async() => {
        let first = this.table3List[this.nowIndex2];
        this.nowIndex2++;
        this.table3List.push(first);
      },3000);
    },
  },
  // 页面初载
  mounted() {
     this.timer3 = setInterval(async() => {
      let first = this.table3List[this.nowIndex2];
      this.nowIndex2++;
      this.table3List.push(first);
    },3000);
  },
};
</script>
<style>
.table3{
  width: 312px;
  height: 177px;
  background: url('//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/723b2b242f58c76c0568cf2b13286811.png');
  background-color: rgb(0, 0, 0); 
  background-size: 100% 100%;
  position: absolute;
  top: 671px;
  left: 35px; 
}
.table3-list1-title{
  color: white;
  font-size: 20px;
  display: inline-block;
  transform: scale(0.54);
  position: relative;
  font-weight: 500;
  left: -30px;
  top: 6px;
}
.table3-list1-head{
  position: relative;
  left: 20px;
  top: 10px;
  background: rgb(34, 34, 34);
  height: 20px;
  width: 278px;
  line-height: 20px;
}
.table3-list1-head1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
}
.table3-list1-head2{
  display: inline-block;
  margin-left: 140px;
  font-size: 20px;
  transform: scale(0.48);
  color: white;
  vertical-align: center;
}
.table3-list1{
  position: relative;
  left: 20px;
  top: 10px;
  width: 278px;
  height: 108px;
  overflow: hidden;
}
.table3-list1-row{
  height: 18px;
  width: 278px;
  line-height: 18px;
  text-align: left;
  position: relative;
  transition: all 1s linear;
}
.table3-list1-content1{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.5);
  color: rgb(255, 255, 255, 0.8);
  margin-left: -25px;
}
.table3-list1-content2{
  display: inline-block;
  font-size: 20px;
  transform: scale(0.5);
  color: rgb(255, 255, 255, 0.8);
  margin-left: 73px;
}
.table3-list1 :nth-child(2n){
	background: rgb(26, 26, 26);
}
.table3-list1 :nth-child(2n+1){
	background: rgb(34, 34, 34);
}
</style>