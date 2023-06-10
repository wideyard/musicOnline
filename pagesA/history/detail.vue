<template>
	<!-- <view class="detail">
		<view class="title">{{article.title}}</view>
		<view class="info">
			<view class="author">编辑：{{article.author}}</view>
		</view>
		<view class="content">
			<rich-text :nodes="article.content"></rich-text>			
		</view>
		<view class="description">
			声明：本站的内容均采集于互联网作为学习资料，如果侵权请联系管理（2386929810@qq.com）进行整改删除，本站进行了内容采集不代表本站及作者观点，若有侵犯请及时联系管理员，谢谢您的支持。
		</view>
	</view> -->
	<view class="detail">
		<view class = "title">{{article.title}}</view>
		<view class="info">作者：{{article.author}}</view>
		<view class="content">{{article.content}}</view>
			
			 
		<view class="description">声明:本站内容均来源于互联网，如果侵权请联系我们进行删除，本站内容不代表本站及作者观点，谢谢您的支持</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				parameter: NULL,
				article:{}
			};
		},
		onLoad(e){
			this.parameter=e;
			console.log(e);
			this.getDetail();
		},
		methods:{
			getDetail(){
				// 获取详情页的内容
				const db = wx.cloud.database()
				db.collection(this.parameter.class).where({
					_id: this.parameter.id_
				}).get()
				.then(res => {
				    this.article = res.data[0]
					console.log(this.article)
				})
				.catch(err => {
				    console.log("获取失败", err)
				})
			}
		}
	}
</script>

<style lang="scss">
// .detail{
// 	padding:30rpx;
// 	.title{
// 		font-size: 46rpx;
// 		color:#333;
// 	}
// 	.info{
// 		background: #F6F6F6;
// 		padding:20rpx;
// 		font-size: 25rpx;
// 		color:#666;
// 		display: flex;
// 		justify-content: space-between;
// 		margin:40rpx 0;
// 	}
// 	.content{
// 		padding-bottom:50rpx;		
// 	}
// 	.description{
// 		background: #FEF0F0;
// 		font-size: 26rpx;
// 		padding:20rpx;
// 		color:#F89898;
// 		line-height: 1.8em;
// 	}
// }
	 .detail{
		 padding:30rpx;
		 .title{
			 font-size: 46rpx;
			 color:#333;
		 }
		 .info{
			 background: #f6f6f6;
			 padding:20rpx 10rpx;
			 font-size: 15 rpx;
			 color:#666;
			 display:flex;
			 justify-content: space-between;
			 margin:40rpx 0;
		 }
		 .content{
			 
		 }
		 .description{
			 
			 font-size: 26rpx;
			 padding:20rpx;
			 color:#DCDCDC;
			 line-height: 1.8em;
		 }
	 }
     .content {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
     }
</style>
