<template>
	<view class="quyi">
		<!-- 导航栏 -->
		<scroll-view scroll-x="true" class="navascroll">
			<view class="item"
			:class="index==navIndex ? 'activate' :''" 
			v-for="item in navArr" 
			@click="clickNav(index,item.id)"
			>{{item.classname}}
			</view>
		</scroll-view>
		
		<!-- 内容列表 -->
		<view class="content">
			<view class="row" v-for="item in newsList">
				<articleCard :item="item" @click.native="goDetail(item)">1</articleCard>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				navIndex:0,
				navArr:[],
				newsList:[]
			}
		},
		onLoad() {
			//获取导航栏详情
			this.getQuyiNav();
			//获取新闻列表
			this.getQuyiNews(0);
		},
		methods: {
			//点击导航切换
			clickNav(index,id){
				this.navIndex=index;
				console.log(index);
				this.newslist=[];
				this.getQuyiNews(id);				
			},
			//进入详情页
			goDetail(item) {
				uni.navigateTo({
					//url: "/pagesA/history/detail"
					url:`/pagesA/history/detail?id=${item.id}`
				})
			},
			//获取曲艺导航栏数据
			getQuyiNav() {
				const db = wx.cloud.database()
				db.collection("xiju_list").where({
					isNav: true
				}).get()
				.then(res => {
				    this.navArr = res.data
					console.log("成功获取数据", this.narArr)
				})
				.catch(err => {
				    console.log("获取失败", err)
				})
			},
			//获取曲艺的新闻列表数据
			getQuyiNews(id_) {
				const db = wx.cloud.database()
				db.collection("xiju_list").where({
					// 非导航栏
					isNav: false,
					// 属于该导航栏的图书列表
					id: id_
				}).get()
				.then(res => {
				    this.newsList = res.data
					console.log(res.data)
				})
				.catch(err => {
				    console.log("获取失败", err)
				})
			}
		}
	}
</script>

<style lang="scss" scoped>
.navascroll {
	height: 100rpx;
	background: #F7F8FA;
	white-space: nowrap;
	position: fixed;
	top:var(--window-top);
	left:0;
	z-index: 10;
	/deep/ ::-webkit-scrollbar {
		width: 4px !important;
		height: 1px !important;
		overflow: auto !important;
		background: transparent !important;
		-webkit-appearance: auto !important;
		display: block;
	}
	.item{
		font-size: 40rpx;
		display: inline-block;
		line-height: 100rpx;
		padding:0 30rpx;
		color:#333;		
		&.active{
			color:red;
		}
	}
}
.content {
	padding:30rpx;
	padding-top:130rpx;
	.row{
		border-bottom:1px dotted #efefef;
		padding:20rpx 0;
	}
}
</style>
