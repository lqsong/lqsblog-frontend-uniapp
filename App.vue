<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	.plate-blank {
		height: 80rpx;
		background-color: #F8F8F8;
	}
	.plate-blank-FFF {
		height: 80rpx;
		background-color: #FFFFFF;
	}
	.plate-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32rpx;
		color: #464e52;
		padding: 30rpx 30rpx 30rpx 50rpx;
		margin-top: 20rpx;
		position: relative;
		background-color: #F8F8F8;
		border-bottom: 1px #f5f5f5 solid
	}
	
	.plate-title__after {
		position: relative;
		color: #031e3c
	}
	
	.plate-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 8rpx;
		height: 32rpx;
		background-color: #ccc
	}
	.plate-body {
		padding: 30rpx;
	}
	
	.detail-title {
		padding: 15px;
		line-height: 1.5;
		font-weight: 700!important;
	}
</style>
