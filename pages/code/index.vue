<template>
	<view>
		<uni-list>
			
			<!-- 1 -->
			<uni-list-item direction="column" to="/pages/detail/detail?id=1">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>	
					<view class="uni-title">决定了列表是否显示左图/顶图</view>
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>
					<!-- body 决定了列表是否显示多图/大图，以及自定义列表内容 -->
					<view class="content uni-content" >
						<!-- 显示大图 -->
						<view class="uni-thumb uni-content list-picture">
							<image class="thumb-image" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						</view>
						<!-- 显示自定义内容 -->
						<view class="uni-content">
							<view  class="uni-note">分類名稱 2010-12-12 12:12:12</view>
						</view>
					</view>					
				</template>
				
				<!-- 自定义 footer 内容 -->
				<template v-slot:footer>					
				</template>				
			</uni-list-item>
			
			<!-- 2 -->
			<uni-list-item direction="column" to="/pages/detail/detail?id=1">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>
					<view class="uni-title">决定了列表是否显示左图/顶图</view>
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>					
					
					<view class="content uni-list-box" >
						<!-- 显示大图 -->
						<view  class="uni-thumb">
							<image class="thumb-image" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						</view>
						<!-- 显示自定义内容 -->
						<view class="uni-content">
							<view  class="uni-title-sub uni-ellipsis-2">这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介</view>
							<view  class="uni-note">分類名稱 2010-12-12 12:12:12</view>
						</view>
					</view>					

					
				</template>
				
				<!-- 自定义 footer 内容 -->
				<template v-slot:footer>
					<!-- footer 决定了列表底部的内容，通常会放一些按钮，比如点赞，评论 -->
					<view class="uni-footer"><!-- 2 -->
						<view>
							<uni-icons type="chat" size="14" color="#999"></uni-icons>
							<text class="uni-footer-text">评论</text>
						</view>
						<view>
							<uni-icons type="hand-thumbsup" size="14" color="#999"></uni-icons>
							<text class="uni-footer-text">点赞</text>
						</view>
						<view>
							<uni-icons type="redo" size="14" color="#999"></uni-icons>
							<text class="uni-footer-text">分享</text>
						</view>
					</view>					
				</template>		
				
				
				
			</uni-list-item>
						
						
			<!-- 3 -->
			<uni-list-item direction="column" to="/pages/detail/detail?id=1">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>					
					<view class="uni-title">决定了列表是否显示左图/顶图</view>
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>					
					<view class="content uni-media-box" >
						<!-- 显示多图 -->
						<image class="uni-thumb" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						<image class="uni-thumb" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						<image class="uni-thumb" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						<image class="uni-thumb" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						<!-- 显示自定义内容 -->
						<view class="uni-content">
						</view>
					</view>

					
				</template>
				
				<!-- 自定义 footer 内容 -->
				<template v-slot:footer>					
					<view slot="footer" class="uni-note">分類名稱 2010-12-12 12:12:12</view>					
				</template>
				
			</uni-list-item>
			
			
			<!-- 4 -->
			<uni-list-item direction="row" to="/pages/detail/detail?id=1">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>
					<view  class="uni-thumb">
						<image src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
					</view>
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>	
					<view class="content" >						
						<!-- 显示自定义内容 -->
						<view class="uni-content">
							<view  class="uni-title-sub uni-ellipsis-2">这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介</view>
							<view  class="uni-note">分類名稱 2010-12-12 12:12:12</view>
						</view>
					</view>
				</template>
				
				<!-- 自定义 footer 内容 -->
				<template v-slot:footer>					
				</template>
				
			</uni-list-item>
			
			
			<!-- 5 -->
			<uni-list-item direction="row" to="/pages/detail/detail?id=1">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>					
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>
					
					
					<view class="content " >						
						<!-- 显示自定义内容 -->
						<view class="uni-content">
							<view  class="uni-title-sub uni-ellipsis-2">这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介</view>
							<view  class="uni-note">分類名稱 2010-12-12 12:12:12</view>
						</view>
					</view>
					
				</template>
				
				<!-- 自定义 footer 内容 -->
				<template v-slot:footer>					
					<view slot="footer" class="uni-thumb" style="margin: 0;">
						<image src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
					</view>
				</template>
				
				
				
				
			</uni-list-item>
			
			
			<!-- 6 -->
			<uni-list-item direction="column" to="/pages/detail/detail?id=1">
				<!-- 自定义 header 内容 -->
				<template v-slot:header>					
					<view class="uni-title">决定了列表是否显示左图/顶图</view>
				</template>
				<!-- 自定义 body 内容 -->
				<template v-slot:body>
					
					
					<view class="content" >						
						<!-- 显示自定义内容 -->
						<view class="uni-content">
							<view  class="uni-title-sub uni-ellipsis-2">这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介</view>
							<view  class="uni-note">分類名稱 2010-12-12 12:12:12</view>
						</view>
					</view>
					
				</template>
				
				<!-- 自定义 footer 内容 -->
				<template v-slot:footer>					
				</template>
				
			</uni-list-item>
			
			
			
			
			
			
<!-- 			
            <uni-list-item direction="column" to="/pages/detail/detail?id=1">
				<!-- 自定义 header 内容 
				<template v-slot:header>
					<!-- header 决定了列表是否显示左图/顶图，或者是否显示顶部 title 
					<view  class="uni-thumb">
						<image src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
					</view>
					<!-- <view class="uni-title">决定了列表是否显示左图/顶图</view>
				</template>
				<!-- 自定义 body 内容 
				<template v-slot:body>
					<!-- body 决定了列表是否显示多图/大图，以及自定义列表内容
					<view class="content uni-content" >
						<!-- 显示大图 
						<view class="uni-thumb uni-content list-picture">
							<image class="thumb-image" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						</view>
						<!-- 显示自定义内容 
						<view class="uni-content">
							<view  class="uni-note">{ user_name } { last_modify_date }</view>
						</view>
					</view>
					
					<view class="content uni-list-box" >
						<!-- 显示大图 
						<view  class="uni-thumb">
							<image class="thumb-image" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						</view>
						<!-- 显示自定义内容 
						<view class="uni-content">
							<view  class="uni-title-sub uni-ellipsis-2">{ excerpt }</view>
							<view  class="uni-note">{ user_name } { last_modify_date }</view>
						</view>
					</view>

					<view class="content uni-media-box" >
						<!-- 显示多图 
						<image class="uni-thumb" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						<image class="uni-thumb" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						<image class="uni-thumb" src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
						<!-- 显示自定义内容 
						<view class="uni-content">
						</view>
					</view>

					
				</template>
				
				<!-- 自定义 footer 内容 
				<template v-slot:footer>
					<!-- footer 决定了列表底部的内容，通常会放一些按钮，比如点赞，评论 
					<view class="uni-footer"><!-- 2 
						<view>
							<uni-icons type="chat" size="14" color="#999"></uni-icons>
							<text class="uni-footer-text">评论</text>
						</view>
						<view>
							<uni-icons type="hand-thumbsup" size="14" color="#999"></uni-icons>
							<text class="uni-footer-text">点赞</text>
						</view>
						<view>
							<uni-icons type="redo" size="14" color="#999"></uni-icons>
							<text class="uni-footer-text">分享</text>
						</view>
					</view>
					<view slot="footer" class="uni-note">{ user_name } { last_modify_date }</view> <!-- 3
					<view slot="footer" class="uni-thumb" style="margin: 0;"> <!-- 5
						<image src="http://uploads.liqingsong.cc/20201224/d81d08a6-1067-472a-9c41-6e1ab63ff0c9.png" mode="aspectFill"></image>
					</view>
				</template>
				
				
				
				
			</uni-list-item>
 -->						
						
			
			
			
		
		</uni-list>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				status: 'loadmore'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
@import '@/common/css/uni-ui.scss';	
page {
	display: flex;
	flex-direction: column;
	box-sizing: border-box;
	background-color: #efeff4;
	min-height: 100%;
	height: auto;
}

.tips {
	color: #67c23a;
	font-size: 14px;
	line-height: 40px;
	text-align: center;
	background-color: #f0f9eb;
	height: 0;
	opacity: 0;
	transform: translateY(-100%);
	transition: all 0.3s;
}

.tips-ani {
	transform: translateY(0);
	height: 40px;
	opacity: 1;
}

.content {
	width: 100%;
	display: flex;
}

.list-picture {
	width: 100%;
	height: 145px;
}

.thumb-image {
	width: 100%;
	height: 100%;
}

.ellipsis {
	display: flex;
	overflow: hidden;
}

.uni-ellipsis-1 {
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

.uni-ellipsis-2 {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}

</style>
