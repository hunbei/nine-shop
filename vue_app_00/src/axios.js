import axios from 'axios';
import qs from 'qs';

const Axios=axios.create({
	baseURL:'http://127.0.0.1:8080/',
	withCredentials:true
});
Axios.interceptors.request.use(config=>{
	// 进入拦截器
	if (config.method==='post') {
		config.data=qs.stringify(config.config.data)
	}
	if (localStorage.getItem('token')) {
		config.headers.token=localStorage.getItem('token')
	}
	if(sessionStorage.getItem('token')){
		config.headers.token=sessionStorage.getItem('token')
	}
	return config;
},
	error=>{
		console.log('发送请求器错误',error);
		Promise.reject(error);
	}
);
	// Axios.interceptors.response.use(
	// 		res=>{
	// 			if(res.data.status==403){
	// 				localStorage.removeItem('token');
	// 				sessionStorage.removeItem('token');
					
	// 			}
	// 		}
	// )