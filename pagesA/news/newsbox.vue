<template>
	<view class="newsbox">
		<view class="pic">
			<image :src = "item.img" :mode="aspectFill" ></image>
		</view>
		<view class="text">
			<view class="title"><text>{{item.title}}</text></view>
			<view class="info">
				<text>{{item.writer}}</text>
			</view>
		</view>
		
	</view>
</template>

<script>
	export default {
		name:"newsbox",
		props: {
			item:{
				type:Object,
				default(){
					return {
						title:"组件内默认标题",
						writer:"张三",
						img:"https://hakaimg.com/i/2022/10/26/nhh9y7.png"
					}
				}
			}
			
		},
		data(){
			return{
				image:item.img,
			}
		},
}


</script>

<style lang="scss">
.newsbox{
	display:flex;
	.pic{
		width:230rpx;
		height:160rpx;
		image{
			width:100%;
			height:100%;
			
		}
	}
	.text{
		// border:1px solid red;
		flex:1;
		padding-left: 20rpx;
		display:flex;
		flex-direction: column;
		justify-content: space-between;
		.title{
			font-size: 38rpx;
			color:#333;
			//下面为了标题超出两行时显示省略号
			text-overflow: -o-ellipsis-lastline;
			overflow: hidden;				//溢出内容隐藏
			text-overflow: ellipsis;		//文本溢出部分用省略号表示
			display: -webkit-box;			//特别显示模式
			/*autoprefixer: off;*/
			/*autoprefixer: on;*/
			-webkit-line-clamp: 2;			//行数
			line-clamp: 2;				
		}
		.info{
			font-size:26rpx;
			color:#999;
			text{
				padding-right: 30rpx;
			}
		}
	}
	
}
</style>