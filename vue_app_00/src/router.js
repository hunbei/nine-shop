import Vue from 'vue'
import Router from 'vue-router'
import HelloContainer from "./components/HelloWorld.vue"
import home from "./components/shop/home.vue"
import test from "./components/shop/test.vue"
import produ from "./components/shop/common/products.vue"



Vue.use(Router)
export default new Router({
  routes: [
    //浏览器:http://127.0.0.1:5050/#exam01
    //配置自定义组件路径
    {path:"/products",component:produ},
    {path:"/test",component:test},
    {path:"/home",component:home},
    {path:'/',component:HelloContainer},
  ]
})
