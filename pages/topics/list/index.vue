<template>
	<view>
		
		<uni-card 
		    v-for="item in list" :key="item.alias" 
			:is-shadow="true"
			mode="title"
			:title="item.title"
			:subTitle="item.quantity + ' 篇文章'"			
			thumbnail="/static/images/icons/edit.png"
			extra="详情"
			@click="clickCard(item.alias)"
			>
			<uni-list :border="false" >
				<uni-list-item 
					v-for="item2 in item.conlist" :key="item2.key"
					:title="item2.title"
					:thumb="getThumb(item2.thumb)" 
					thumb-size="lg"
					:to="getDetailUrl(item2.type,item2.id)"
					>				
				</uni-list-item>
			</uni-list>			
		</uni-card>
		
		<uni-load-more v-if="loadMoreShow" :status="status"></uni-load-more>
		<back-top></back-top>
		
	</view>
</template>

<script>
	import { nopicUrl } from '@/common/config/index.js';
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
			clickCard(alias) {
				uni.navigateTo({
				    url: '/pages/topics/detail/index?alias=' + alias
				});
			},
			getThumb(val) {
				return !val || val === '' ? nopicUrl : val;
			},
			getDetailUrl(type, id) {
				return type === 2 ? ('/pages/works/detail/index?id=' + id) : ('/pages/articles/detail/index?id=' + id);
			},
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
					const ret = await request.get('/topics/list', {
						per: this.per,
						page: page
					});
					let list = ret.list || [];
					list  = list.map(item=> {
						item.conlist = item.conlist.map(item2=> {
							item2.key = item2.id + '-' + item2.type;
							return item2;
						})
						return item;
					})
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
					console.log(e);
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
