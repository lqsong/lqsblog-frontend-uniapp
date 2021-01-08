export default {
	onPageScroll(e) {
		this.$store.commit('setScrollTop', e.scrollTop)
	}
}