import http from './request';
import { ajaxBaseUrl } from '../config/index.js';

// 全局配置
http.setConfig({
	baseUrl: ajaxBaseUrl,
	// 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
	// 设置为true后，就需要在this.$u.http.interceptor.response进行多一次的判断，请打印查看具体值
	// originalData: true, 
	// 设置自定义头部content-type
	// header: {
	// 	'content-type': 'xxx'
	// }
});

// 请求拦截，配置Token等参数
http.interceptor.request = (config) => {
	// config.header.Token = 'xxxxxx';	
		
	// 如果token放在了globalData，通过getApp().globalData获取
	// config.header.token = getApp().globalData.username;
	
	// 如果token放在了Storage本地存储中，拦截是每次请求都执行的，所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
	// const token = uni.getStorageSync('token');
	// config.header.token = token;
	
	return config; 
}

// 响应拦截，判断状态码是否通过
http.interceptor.response = (res) => {
	// 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
	// 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
	if(res.code == 0) {
		// 如果把originalData设置为了true，这里return回什么，this.$u.post的then回调中就会得到什么
		return res.data;  
	} else {
		return false;
	}
}

export default http;