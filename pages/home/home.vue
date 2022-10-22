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