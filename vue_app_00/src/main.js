import Vue from 'vue'
import App from './App.vue'
import router from './router'
//引入第三方组件库mint-ui
//完成引入所有组件
import MintUI from "mint-ui"
import store from './store'

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
// 使用vant商品导航组件
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);


import './lib/mui/css/icons-extra.css'
import "./font/iconfont.css"
// Vue.config.productionTip = false;
// 引入axios
import axios from 'axios'
// 配置请求时保存session,发送自动携带
axios.defaults.withCredentials=true;
// 基础路径
axios.defaults.baseURL="http://127.0.0.1:8080/"
// 注册组件
Vue.prototype.axios=axios;
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
