import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
	// 集中管理数据
	state:{
		selected:'home',
	},
	getters:{
		//集中获取数据
		getSelected(state){
			return state.selected;
		}
	},
	mutations:{
		//集中 修改函数
		updateSelected(state,value) {
			return state.selected=value;
		},
	}
})