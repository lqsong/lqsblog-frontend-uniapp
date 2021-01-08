<template>
	<view>		
	    <view class="plate-title">{{title}}</view>
		<uni-list>
			<lqsblog-list-item 
				v-for="item in list" :key="item.key" 
				:title="item.title"
				:category="item.category"
				:thumb="item.thumb"
				:description="item.description"
				:addtime="item.addtime"
				:to="getDetailUrl(item.type,item.id)"
				>			
			</lqsblog-list-item>	
		</uni-list>	
		<uni-load-more status="noMore" :content-text="{contentnomore: '我是有底线的...'}"></uni-load-more>
		<back-top></back-top>

	</view>
</template>

<script>
	import { empty } from '@/common/utils/test.js';
	import request from '@/common/request';
	export default {
		data() {
			return {
				alias: '',
				title: '',
				list: [], // 列表数据	
			}
		},
		computed: {
		},
		onLoad(event) {
			if(event.alias){
				this.alias = event.alias				
			}	
		},
		onReady() {
			if(this.alias === ''){
				uni.showToast({
					icon:'none',
					title:'出错了，alias不能为空'
				})
				return false;
			}
			this.getData(this.alias);
		},
		methods: {
			getDetailUrl(type, id) {
				return type === 2 ? ('/pages/works/detail/index?id=' + id) : ('/pages/articles/detail/index?id=' + id);
			},
			async getData(alias) {
				try{
					const ret = await request.get('/topics/detail', {
						alias:alias
					});
					this.title = ret.title || '';
					const list = ret.list || [];
					this.list = list.map(item=> {
						item.key = item.id + '-' + item.type;
						item.thumb = item.thumb.split('|');
						return item;
					});					
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

<style scoped lang="scss">
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #efeff4;
	min-height: 100%;
	height: auto;
}
</style>
