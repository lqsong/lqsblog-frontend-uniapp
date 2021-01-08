<template>
	<view>
		<uni-list>
			<lqsblog-list-item 
			    v-for="item in list" :key="item.id" 
				:title="item.title"
				:thumb="item.thumb"
				:description="item.description"
				:addtime="item.addtime"
				:to="'/pages/works/detail/index?id=' + item.id"
				>			
			</lqsblog-list-item>	
		</uni-list>	
		<uni-load-more v-if="loadMoreShow" :status="status"></uni-load-more>
		<back-top></back-top>
	</view>
</template>

<script>
	import { getTotalPage } from '@/common/utils/pagination.js';
	import request from '@/common/request';
	export default {
		data() {
			return {
				// more（loading前）、loading（loading中）、noMore（没有更多了） 
				status: 'more', 
				loadMoreShow: false,
				totalPage: 0, // 总页数
				per: 10, // 每页多少条
				currentPage: 1, // 当前页码
				list: [], // 列表数据	
				total: 0 // 总记录数
			}
		},
		computed: {
		},
		onLoad() {
			this.getList(1);
		},
		onReachBottom() {
			if(this.status === 'loading' || this.status === 'noMore') {
				return false;
			}			
			this.status = 'loading';
			this.getList(this.currentPage + 1);
		},
		methods: {
			getTotalPageNum() {
				if(this.totalPage > 0) {
					return this.totalPage;
				}else {
					this.totalPage = getTotalPage(this.total, this.per);
					return this.totalPage;
				}
			},
			async getList(page) {
				try{
					const ret = await request.get('/works/list', {
						per: this.per,
						page: page
					});
					const list = ret.list || [];
					const datalist = this.list;					
					this.list = [...datalist, ...list];
					this.total = ret.total;
					this.currentPage = page;
					if(this.currentPage >= this.getTotalPageNum()) {
						this.status = 'noMore';
					}else {
						this.status = 'more';
					}
					this.loadMoreShow = true;
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

<style lang="scss">
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #efeff4;
	min-height: 100%;
	height: auto;
}
</style>
