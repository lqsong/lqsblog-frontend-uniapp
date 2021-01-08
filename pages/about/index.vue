<template>
	<view>	
	    <view class="plate-title">About Me</view>
		<view class="plate-body" >
			<mark-view v-bind:markdown="about"></mark-view>
		</view>
		
		<template v-if="links.length > 0">
			<view class="plate-title">Open source</view>
			<view class="plate-body" >
				<uni-link href="http://docs.liqingsong.cc/" text="http://docs.liqingsong.cc/"></uni-link>
			</view>
			
			<view class="plate-title">Links</view>
			<uni-list>
				<uni-list-item  
					v-for="(item,index) in links" 
					:key="index" 
					:title="item.title" 
					:note="item.description" 
					:thumb="item.logo || nopicUrl" 
					thumb-size="lg" 
				>
					<template slot="footer">
						<uni-link :href="item.href" text="Open &gt;" showUnderLine="false" color="#3691D6"></uni-link>
					</template>
				</uni-list-item>
			</uni-list>	
		</template>
		
		<uni-load-more status="noMore" :content-text="{contentnomore: '我是有底线的...'}"></uni-load-more>
			
		<back-top></back-top>
	</view>
</template>

<script>
	import { nopicUrl } from '@/common/config/index.js';
	import request from '@/common/request';
	export default {
		data() {
			return {
				nopicUrl: nopicUrl,
				about: '',
				links: [],
			}
		},
		onLoad() {
			this.getData();
			this.getLinks();
		},
		methods: {
			async getData() {
				try{
					const ret = await request.get('/about');
					this.about = ret.content || '';
					/* request.get('/about').then((ret)=> {
						this.about = ret.content || '';
					}).catch(e=> {
						uni.showToast({
							title: e.msg || '请求出错',
							icon: 'none'
						})
					}) */					
				}catch(e){
					uni.showToast({
						title: e.msg || '请求出错',
						icon: 'none'
					})
				}
			},
			async getLinks() {
				try{
					const ret = await request.get('/links/recommend',{ids:1});
					this.links = ret || [];
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
