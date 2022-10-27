<template>
	<view class="home">
		<scroll-view scroll-x class="navscroll">
			<view class="item":class="index==navIndex ? 'activate' :''" v-for="item in navArr" >{{item.classname}}</view>
		</scroll-view>
		
		<view class="content">
			<div class="row" v-for="item in newsArr" >
				<newsbox :item="item" @click.native="goDetail(item.path)"></newsbox>
			</div>
		</view>
	</view>
</template>



<script>
	import newsbox from "pagesA/news/newsbox.vue"
	export default {
		components: {
		      newsbox
		    },
		data(){
			return{
				navIndex:0,
				navArr:[
					{
						classname:"新闻动态",
						id : 0
					
					},
					{
						classname:"专题报道",
						id : 1
					},
					{
						classname:"通知公告",
						id : 2
					}
					
				],
				newsArr:[]
			}
		},
		onLoad(){
			// this.getNavData();
			this.getNewsData();
		},
		methods:{
			//点击导航切换
			clickNav(index){
				//this.navIndex=index;
				// console.log(id)
				// this.getNewsData(id);
			},
			//跳转详情
			goDetail(url){
				console.log(url)
				uni.navigateTo({
					url:url
				})
			},
			//获取导航
			getNavData(id=0){
				//uni.request({
				//	url:"https://www.ihchina.cn/zixun",
				//	success:res=>{
				//		console.log(res)
				//		this.navArr=res.data
				//	}
				//})
			},
			//获取新闻
			getNewsData(){
				const db = wx.cloud.database()
				db.collection("news").get()
				.then(res => {
				    console.log(res)
				    this.newsArr = res.data
				})
				.catch(err => {
				    console.log(err)
				})
				
			}
			
		}
		
	}
</script>

<style lang="scss" scoped>
.navscroll{
	height: 100rpx;
	background: #13227a;
	//不换行
	white-space: nowrap;
	position: fixed;
	top:var(--window-top);
	//left:0;
	z-index:10;
	justify-content: center;
	.item{
		font-size: 40rpx;
		display:inline-block;
		line-height:100rpx;
		padding:0 30rpx;
		color:#ffffff;
		&.activate{
			color:#00ffff;
		}
	}
}
.content{
	padding:30rpx;
	padding-top: 130rpx;
	.row{
		border-bottom: 1px dotted #efefef;
		padding:20rpx 0;
	}
}


</style>