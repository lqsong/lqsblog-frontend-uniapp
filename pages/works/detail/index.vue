<template>
	<view>
		
			<view class="detail-title">
				{{title}}
			</view>
			<uni-list :border="false">
				<uni-list-item
				   :show-badge="true"
				   badge-type="warning"
				   :badge-text="hit" 
				   :title="addtime"  
				/>	
			</uni-list>						
			
			<view class="plate-body" >
				<mark-view v-bind:markdown="content"></mark-view>
			</view>			
		
		    <back-top></back-top>
		
	</view>
</template>

<script>
	import request from '@/common/request';
	export default {
		data() {
			return {
				id: 0,
				title: '',
				content: '',
				hit: '0',
				addtime: ''
			}
		},
		onLoad(event) {
			if(event.id){
				this.id = event.id				
			}	
		},
		onReady() {
			if(this.id<1){
				uni.showToast({
					icon:'none',
					title:'出错了，ID不能为空'
				})
				return false;
			}
			this.getData(this.id);
		},
		methods: {
			async getData(id) {
				try{
					const ret = await request.get('/works/detail', {id: id});
					this.title = ret.title || '';
					this.content = ret.content || '';
					this.hit = (ret.hit  || 0) + '';
					this.addtime =  ret.addtime || '';
									
				}catch(e){
					uni.showToast({
						title: e.msg || '请求出错',
						icon: 'none'
					})
				}
			}		
			
		}
	}
</script>

<style>

</style>
