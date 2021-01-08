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
				   :title="categoryAddtime"  
				/>	
			</uni-list>						
			
			<view class="plate-body" >
				<mark-view v-bind:markdown="content"></mark-view>
			</view>
			
			<template v-if="list.length > 0">
				<view class="plate-title">您可能感兴趣的</view>
				<uni-list>
					<lqsblog-list-item 
						v-for="item in list" :key="item.id" 
						:title="item.title"
						:category="item.category"
						:thumb="item.thumb"
						:description="item.description"
						:addtime="item.addtime"
						:to="'/pages/articles/detail/index?id=' + item.id"
						>			
					</lqsblog-list-item>	
				</uni-list>	
				<uni-load-more status="noMore" :content-text="{contentnomore: '我是有底线的...'}"></uni-load-more>
			</template>
		
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
				categoryAddtime: '',
				list: []
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
					const ret = await request.get('/article/detail', {id: id});
					this.title = ret.title || '';
					this.content = ret.content || '';
					this.hit = (ret.hit  || 0) + '';
					const category = ret.category || {name: ''};
					const addtime = ret.addtime || '';
					this.categoryAddtime = category.name + '  ' + addtime;
					const interestIds = ret.interestIds || '';
					if(interestIds!=='') {
						await this.getInterest(interestIds);
					}
				}catch(e){
					uni.showToast({
						title: e.msg || '请求出错',
						icon: 'none'
					})
				}
			},			
			async getInterest(ids) {
				try{
					const ret = await request.get('/article/interest', {ids: ids});
					this.list = ret || [];					
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
