import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		scrollTop: 0
	},
	mutations: {
		setScrollTop(state, payload) {
			state.scrollTop = payload
		}
	}
})

export default store