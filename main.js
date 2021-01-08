import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


// 引入公共 mixin
import mixin from '@/store/mixin.js';
Vue.mixin(mixin);

// 引入 store
import store from '@/store';
Vue.prototype.$store = store;

const app = new Vue({
	store,
    ...App
})

app.$mount()
