<<<<<<< HEAD
<script>
export default {
	data() {
		return {
			message: '',
			dataObj: []
			}
	},
	methods: {
		display(){
			console.log(this.message);
		},
		
		//查询记录
		getData(){
			
			const db=wx.cloud.database();
			db.collection("strings").get({
				success:res=>{
					console.log(res)
					this.dataObj = res.data;
				}
		    })
			
		},
		
		  //添加数据
		addData(){
			const db=wx.cloud.database();
		    db.collection("strings").add({
		    data:{
		      title:"good luck"
		    }
		    }).then(res=>{
		      console.log(res)
		    })
		},
		

		//提交信息
		submit(){
			const db=wx.cloud.database();
			db.collection('strings').add({
		    data:{
		      title:this.message,
		    },
		    success(res)
		    {
		      console.log("提交成功",res);
		    },
		    fail(err)
		    {
		      console.log("失败",err);
		    }
		    })
		},
	}
	
};

</script>

<template>
	<div>
		<view style="text-align: center;">
		   Home
		 </view>
		<h1 style="text-align: center;font-size: 25px;">Message:</h1>
		<input  type="text" v-model="message" placeholder="edit me" style="text-align: center;height: 70px;font-size: 30px"/>
		<button v-on:click="submit" style="">输入</button> 
		<button type="primary" v-on:click="getData">点击显示数据库</button>
		<li v-for="item in dataObj" style="text-align: center;">{{ item.title }}</li>
	</div>
</template>

</script>

<style lang="scss">

</style> -->
=======
<template>
  <view class="home">
    <swiper :indicator-dots="true" :autoplay="true" :interval="2500" :duration="1000" :circular="true">
      <!-- 循环遍历数组 -->
      <swiper-item v-for="item in swipers">
        <image :src="item"></image>
      </swiper-item>
    </swiper>
  </view>
</template>

<!-- 动态绑定 -->
<!--<template>
  <view>
    <!-- 轮播图区域 -->
<!--    <swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
     <!-- 循环渲染轮播图的 item 项 -->
<!--      <swiper-item v-for="(item, i) in swiperList" :key="i">
        <view class="swiper-item">
          <!-- 动态绑定图片的 src 属性 -->
<!--          <image :src="item.image_src"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>
-->
<script>
  export default {
    data() {
      return {
        // 头条轮播
        swipers:[
        					'https://hakaimg.com/i/2022/10/25/puolq.jpg',
        					'https://hakaimg.com/i/2022/10/25/putua.jpg',
        					'https://hakaimg.com/i/2022/10/25/pv0lf.jpg',
        				]


      };
    },

    //onLoad() {
    //  this.getSwiperlist()
    //},
    //methods: {
    //  async getSwiperlist() {
    //    const res = await uni.$http.get('里面写你的资源路径 比如/api/public/v1/home/swiperdata')
    //    // 请求失败
    //    if (res.meta.status !== 200) {
    //      return uni.showToast({
    //        title: '数据请求失败！',
    //        duration: 1500,
    //        icon: 'none',
    //      })
    //    }
    //    // 请求成功，为 data 中的数据赋值
    //    this.swiperList = res.message
    //  }
    //}
  }
</script>

<style lang="scss">
  swiper {
    height: 400rpx;

    .swiper-item,
    image {
      width: 100%;
      height: 100%;
    }
  }
</style>
>>>>>>> 541862a7890f25cc396223a36deae1702327cd01
