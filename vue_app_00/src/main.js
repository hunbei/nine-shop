import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入第三方组件库mint-ui
//完成引入所有组件
import MintUI from "mint-ui"

//但引入mint-ui样式文件
import "mint-ui/lib/style.css"
//将mint-ui注册vue
Vue.use(MintUI)
//导入swiper组件库
import swiper from 'vue-awesome-swiper'
//单引入swiper 样式文件
import 'swiper/dist/css/swiper.css'
//注册swiper
Vue.use(swiper, /* { default global options } */)

import './lib/mui/css/icons-extra.css'
import "./font/iconfont.css"

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
