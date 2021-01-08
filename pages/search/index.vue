<template>
	<view>
		<view class="search">
			<uni-search-bar @confirm="search" cancelButton="none" :maxlength="15"></uni-search-bar>
		</view>
		<uni-search-bar cancelButton="none"></uni-search-bar>
		
		<view v-if="listLen < 1" class="no-data">
			<uni-load-more v-if="isSearch" status="loading" :content-text="{contentrefresh: '搜索中...'}"></uni-load-more>
			<template v-else>
				<view>
					<uni-icons type="info" size="40"></uni-icons>
				</view>
				<view v-if="keywords !== ''">
					抱歉，没有你要找的内容...
				</view>
				<view v-else>
					这里可以搜索所有的随笔和作品...
				</view>
			</template>
		</view>
		<template v-else>
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
			<uni-load-more v-if="loadMoreShow" :status="status"></uni-load-more>
			<back-top></back-top>
		</template>
	</view>
</template>

<script>
	import { getTotalPage } from '@/common/utils/pagination.js';
	import { empty } from '@/common/utils/test.js';
	import request from '@/common/request';
	export default {
		data() {
			return {
				// more（loading前）、loading（loading中）、noMore（没有更多了） 
				status: 'more', 
				loadMoreShow: false,
				isSearch: false, // 是否请求搜索中
				totalPage: 0, // 总页数
				per: 10, // 每页多少条
				currentPage: 1, // 当前页码
				keywords: '',
				list: [], // 列表数据	
				total: 0 // 总记录数
			}
		},
		computed: {
			listLen: function() {
				return this.list.length;
			}
		},
		onLoad() {
		},
		onReachBottom() {
			if(this.status === 'loading' || this.status === 'noMore') {
				return false;
			}			
			this.status = 'loading';
			this.getList(this.currentPage + 1);
		},
		methods: {
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
				this.isSearch = true;
				try{
					const ret = await request.get('/search', {
						per: this.per,
						page: page,
						keywords: this.keywords
					});
					let list = ret.list || [];
					list = list.map(item=> {
						item.key = item.id + '-' + item.type;
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
					uni.showToast({
						title: e.msg || '请求出错',
						icon: 'none'
					})
				}
				this.isSearch = false;
			},
			search(e) {
				const keywords = e.value || '';
				if(empty(keywords)) {
					uni.showToast({
						title: '请输入搜索内容',
						icon: 'none'
					})
					return false;
				}
				
				uni.setNavigationBarTitle({
				    title: '搜索：' + keywords
				});
				
				
				this.status ='more';
				this.loadMoreShow = false;
				this.totalPage = 0;				
				this.keywords = keywords;
				this.list = [];
				this.total = 0;
				this.getList(1);				
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
.search {	
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
	background-color: #efeff4;
}
	
.no-data {
	padding-top: 50rpx;
	text-align: center;
	line-height: 2.5em;
}
</style>
