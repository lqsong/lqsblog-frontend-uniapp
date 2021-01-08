<template>
	<view v-if="scrollTop>400" class="backTop" :class="{'mescroll-fade-in':isShowToTop}" @click="toTopClick">
		<image :src="src" mode="widthFix" />
	</view>
</template>

<script>
	export default {
		name: "backTop",
		props: {
			src: {
				type: String,
				default: '/static/images/icons/top.png'
			},
			id: {
				type: String,
				default: ''
			},
			tab: {
				type: Boolean,
				default: false
			}
		},
		computed: {
			scrollTop() {
				return this.$store.state.scrollTop;
			}
		},
		data() {
			return {
				isShowToTop: true
			}
		},
		methods: {
			toTopClick() {
				this.isShowToTop = false; // 回到顶部按钮需要先隐藏,再执行回到顶部,避免闪动
				if (this.tab) {
					this.$emit('setScrollTop');
				} else {
					uni.pageScrollTo({
						scrollTop: 0,
						duration: 300
					});
				}
			}
		},

	}
</script>

<style scoped>
	.mescroll-lazy-in,
	.mescroll-fade-in {
		-webkit-animation: mescrollFadeIn .3s linear forwards;
		animation: mescrollFadeIn .3s linear forwards;
	}

	.backTop {
		z-index: 999;
		position: fixed;
		right: 20rpx;
		bottom: 120rpx;
		/* #ifdef H5 */
		bottom: 220rpx;
		/* #endif */
		width: 72rpx;
		height: 72rpx;
		border-radius: 50%;
		transform: translateZ(0);
		-webkit-transform: translateZ(0);
	}

	.backTop image {
		width: 100%;
		height: 100%;
	}
</style>
