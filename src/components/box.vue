<template>
  <div class="clock">
    <div class="second"></div>
    <div class="minute"></div>
    <div class="hour"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  methods: {
    
    update() {
      const second = document.querySelector(".second");
      const minute = document.querySelector(".minute");
      const hour = document.querySelector(".hour");
      const now = new Date();
      const s = now.getSeconds();
      const m = now.getMinutes();
      const h = now.getHours() % 12;

      second.style = `transform: rotate(${s * 6}deg`;
      minute.style = `transform: rotate(${(m + s / 60) * 6}deg`;
      hour.style = `transform: rotate(${h + ((m + s / 60) / 60) * 30}deg`;
    },
  },
  // 页面初载
  mounted() {
    this.update();
    setInterval(this.update, 1000);
    // this.callback(this.msgFromChild);
  },
};
</script>
<style>
.clock {
  left: 43%;
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border: 1px solid yellow;
  color: yellow;
  font-size: 7px;
  position: absolute;
  display: inline-block;
}

.scale {
  /* transform变换， translate平移*/
  transform: translate(-50%, -50%);
}

.second {
  width: 2px;
  height: 70px;
  background-color: yellow;
  position: absolute;
  top: 40px;
  left: 99px;
  transform-origin: center 60px;
}

.minute {
  width: 3px;
  height: 55px;
  background-color: yellow;
  position: absolute;
  top: 55px;
  left: 98px;
  transform-origin: center 45px;
}

.hour {
  width: 4px;
  height: 40px;
  background-color: yellow;
  position: absolute;
  top: 70px;
  left: 97px;
  transform-origin: center 30px;
}
</style>