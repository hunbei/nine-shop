import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import Home from "./components/weixin/Home.vue"
//引入自定义组件 exam01.ve
import exam01 from "./components/exam/exam01.vue"

import exam02 from "./components/exam/exam02.vue"
import exam03 from "./components/exam/exam03.vue"





Vue.use(Router)
export default new Router({
  routes: [
    //浏览器:http://127.0.0.1:5050/#exam01
    //配置自定义组件路径
    {path:"/exam01",component:exam01},
    {path:"/exam02",component:exam02},
    {path:"/exam03",component:exam03},
    {path:'/Home',component:Home},
    {path:'/',component:HelloContainer},
  ]
})
