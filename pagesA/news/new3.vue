 <template>
	 <view class="detail">
		 <view class = "title">{{userInfo.title}}</view>
		 <view class="info">作者：{{userInfo.writer}}</view>
		 <view class="info">{{userInfo.time}}</view>
		 <view class="content">{{userInfo.content}}</view>
		<view class="info">文章来源：{{userInfo.source}}</view>
		<view class="info">编辑：{{userInfo.editor}}</view>
		
		 
		 <view class="description">声明:本站内容均来源于互联网，如果侵权请联系我们进行删除，本站内容不代表本站及作者观点，谢谢您的支持</view>
	 </view>
 </template>
 
 
 <script>
     export default {
         data() {
             return {
                 userInfo:{}
             }
         },
         onLoad() {
             this.getMsg()
         },
         methods: {
             getMsg(){
                 const db = wx.cloud.database()//创建数据库连接
                 db.collection("news").where({_id:"f2db72156356a424002002f23e6686cf"}).get()//获取数据表的信息
                 .then(res => {
                     console.log(res)
                     this.userInfo = res.data[0]
                 })
                 .catch(err => {
                     console.log(err)
                 })
             }
         }
     }
 </script>
 
 <style lang="scss">
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