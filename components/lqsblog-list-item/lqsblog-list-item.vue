<template>
	<view>
		
			<uni-list-item v-if="thumbLen === 0" direction="column" :to="to">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>					
					<view class="uni-title">{{title}}</view>
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>
					
					
					<view class="content" >						
						<!-- 显示自定义内容 -->
						<view class="uni-content">
							<view  class="uni-title-sub uni-ellipsis-2">{{description}}</view>
							<view  class="uni-note">{{category.name || ''}} {{addtime}}</view>
						</view>
					</view>
					
				</template>				
				
			</uni-list-item>
			
			<uni-list-item v-else-if="thumbLen === 4" direction="column" :to="to">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>					
					<view class="uni-title">{{title}}</view>
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>					
					<view class="content uni-media-box" >
						<image v-for="(item ,index) in thumb" :key="index" class="uni-thumb" :src="getThumb(item)" mode="aspectFill"></image>
					</view>

					
				</template>
				
				<!-- 自定义 footer 内容 -->
				<template v-slot:footer>					
					<view slot="footer" class="uni-note">{{category.name || ''}} {{addtime}}</view>					
				</template>
				
			</uni-list-item>
		
		
			<uni-list-item v-else direction="column" :to="to">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>
					<view class="uni-title">{{title}}</view>
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>					
					
					<view class="content uni-list-box" >
						<!-- 显示大图 -->
						<view  class="uni-thumb">
							<image class="thumb-image" :src="getThumb(thumb[0])" mode="aspectFill"></image>
						</view>
						<!-- 显示自定义内容 -->
						<view class="uni-content">
							<view  class="uni-title-sub uni-ellipsis-2">{{description}}</view>
							<view  class="uni-note">{{category.name || ''}} {{addtime}}</view>
						</view>
					</view>					

					
				</template>
				
			</uni-list-item>
	
	
			

			
	</view>
</template>

<script>
	import { nopicUrl } from '@/common/config/index.js';
	export default {
		props:{
			title: {
				type: String,
				default: ''
			},
			thumb: {
				type: Array,
				default:  function () {
					return []
				 }
			},
			description: {
				type: String,
				default: ''
			},
			category: {
				type: Object,
				default: function() {
					return {}
				}
			},
			addtime: {
				type: String,
				default: ''
			},
			to: {
				type: String,
			}
		},
		computed:{
			thumbLen: function() {
				return this.thumb.length;
			}
		},
		data() {
			return {
			};
		},
		methods:{
			getThumb(val) {
				return !val || val === '' ? nopicUrl : val;
			}
		}
	}
</script>

<style lang="scss" scoped>
@import '@/common/css/uni-ui.scss';
	
/* 标题 */
.uni-title {
	display: flex;
	margin-bottom: $uni-spacing-col-base;
	font-size: $uni-font-size-lg;
	font-weight: bold;
	color: #3b4144;
}
.uni-title-sub {
	display: flex;
	// margin-bottom: $uni-spacing-col-base;
	font-size: $uni-font-size-base;
	font-weight: 500;
	color: #3b4144;
}
/* 描述 额外文本 */
.uni-note {
	margin-top: 10px;
	color: #999;
	font-size: $uni-font-size-sm;
}
/* 列表内容 */
.uni-list-box {
	@extend .uni-flex-row;
	flex: 1;
	margin-top: 10px;
}
/* 略缩图 */
.uni-thumb {
	flex-shrink: 0;
	margin-right: $uni-spacing-row-base;
	width: 75px;
	height: 75px;
	border-radius: $uni-border-radius-lg;
	overflow: hidden;
	border: 1px #f5f5f5 solid;
	image {
		width: 100%;
		height: 100%;
	}
}
.uni-media-box {
	@extend .uni-flex-row;
	// margin-bottom: $uni-spacing-col-base;
	border-radius: $uni-border-radius-lg;
	overflow: hidden;
	.uni-thumb {
		margin: 0;
		margin-left: 4px;
		flex-shrink: 1;
		width: 33%;
		border-radius:0;
		&:first-child {
			margin: 0;
		}
	}
}
/* 内容 */
.uni-content {
	@extend .uni-flex-column;
	justify-content: space-between;
}

.content {
	width: 100%;
	display: flex;
}
.thumb-image {
	width: 100%;
	height: 100%;
}
.uni-ellipsis-2 {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
</style>
