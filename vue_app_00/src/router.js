import Vue from 'vue'
import Router from 'vue-router'
import home from "./components/shop/home.vue"
import produ from "./components/shop/common/products.vue"
import shopcar from "./components/shop/common/shopcar.vue"
import orderlist from './components/shop/common/orderlist.vue'
import main from './components/shop/main'
import detail from './components/shop/common/detail.vue'
import sett from './components/shop/common/sett.vue'
import user from './components/shop/common/user.vue'
import search from './components/shop/common/search.vue'
import adress from './components/shop/common/adress.vue'
import classSearch from './components/shop/common/classSearch.vue'

Vue.use(Router)
export default new Router({
  routes: [
    //浏览器:http://127.0.0.1:5050/#exam01
    //配置自定义组件路径
    {path:'/classSearch/:cid',component:classSearch,props:true},
    {path:'/adress',component:adress},
    {path:'/search',component:search},
    {path:'/user',component:user},
    {path:'/sett',component:sett},
    {path:'/detail/:pid',component:detail,props:true},
    {path:'/main',component:main},
    {path:'/orderlist',component:orderlist},
    {path:"/shopcar",component:shopcar},
    {path:"/products",component:produ},
    {path:"/home",component:home},
  ]
})
