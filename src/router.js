import VueRouter from 'vue-router';
// import PageA from './pages/page-a.vue';
// import PageB from './pages/page-b.vue';
// import homePage from './pages/homepage.vue'
import Vue from 'vue';
const routes = [
  // {path: './page-a', component: PageA},
  // {path: './page-b', component: PageB},
  // {path: './homepage', component: homePage},
];

Vue.use(VueRouter);
//导出文件
export default new VueRouter({routes})