<template>
	<div class='container'>
		<!-- 顶栏 -->
		<el-row class='header'>
			<el-col :span='6' class='logo'>
				<a href="">
				<img src="../assets/logo.png" style="width: 90%">
				</a>
			</el-col>
			<el-col :span='12'>
<!-- 				<el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" >
					<el-menu-item index="1" style='font-size: 16px;'>课堂管理</el-menu-item>
					<el-submenu index="2">
					    <template slot="title"><span style='font-size: 16px;'>班级信息</span></template>
					    <el-menu-item index="2-1">选项1</el-menu-item>
					    <el-menu-item index="2-2">选项2</el-menu-item>
					    <el-menu-item index="2-3">选项3</el-menu-item>
					    <el-submenu index="2-4">
					      	<template slot="title">选项4</template>
					    	  <el-menu-item index="2-4-1">选项1</el-menu-item>
					    	  <el-menu-item index="2-4-2">选项2</el-menu-item>
					     	 <el-menu-item index="2-4-3">选项3</el-menu-item>
					    </el-submenu>
					</el-submenu>
					<el-menu-item index="3" disabled style='font-size: 16px;'>成绩查询</el-menu-item>
					<el-menu-item index="4"><a href="https://www.ele.me" target="_blank" style='font-size: 16px;'>查看课程</a></el-menu-item>
				</el-menu>
 -->		</el-col>
 			<el-col :span='6' style='float: right;'>
				<el-col :span='12'>
					<span style="line-height: 60px;font-size: 14px;padding-right: 10px;float: right;">你好，{{userName}}</span>
				</el-col>
				<el-col :span='12'>
					<img src="../assets/user.png" style='width: 35%;border-radius: 50%;padding-right: 40px;float: right;'>
				</el-col>
			</el-col>
		</el-row>
		<div class='main'>
			<!-- 侧边栏 -->
			<el-col :span='6' class="aside">
				<el-menu
			      default-active="2"
			      class="el-menu-vertical-demo"
			      @open="handleOpen"
			      @close="handleClose">
			      <el-submenu index="1">
			        <template slot="title">
			          <i class="el-icon-location"></i>
			          <span>学生信息管理</span>
			        </template>
			        <el-menu-item-group>
			          <template slot="title">分组一</template>
			          <el-menu-item index="1-1">选项1</el-menu-item>
			          <el-menu-item index="1-2">选项2</el-menu-item>
			        </el-menu-item-group>
			        <el-menu-item-group title="分组2">
			          <el-menu-item index="1-3">选项3</el-menu-item>
			        </el-menu-item-group>
			        <el-submenu index="1-4">
			          <template slot="title">选项4</template>
			          <el-menu-item index="1-4-1">选项1</el-menu-item>
			        </el-submenu>
			      </el-submenu>
			      <el-menu-item index="/home/studentinfo">
			        <i class="el-icon-menu"></i>
			        <span slot="title">班级信息管理</span>
			      </el-menu-item>
			      <el-menu-item index="3" disabled>
			        <i class="el-icon-document"></i>
			        <span slot="title">不可用</span>
			      </el-menu-item>
			      <el-menu-item index="4">
			        <i class="el-icon-setting"></i>
			        <span slot="title">数据分析统计</span>
			      </el-menu-item>
			    </el-menu>

			</el-col>
			<!-- 主页面 -->
			<el-col :span='18'>
				<el-col :span='8' class='box-container'>
					<a href="">
					<div class="box" index='/home/studentinfo'>
						<img src="../assets/student.png" class='box-img'>
						<el-button type='text'>学生信息管理</el-button>
					</div>
					</a>
				</el-col>
				<el-col :span='8' class='box-container'>
					<a href="">
					<div class="box">
						<img src="../assets/class.png" class='box-img'>
						<el-button type='text'>班级信息管理</el-button>
					</div>
					</a>
				</el-col>
				<el-col :span='8' class='box-container'>
					<a href="">
					<div class="box">
						<img src="../assets/status.jpg" class='box-img'>
						<el-button type='text'>数据统计分析</el-button>
					</div>
					</a>
				</el-col>
				<router-view></router-view>
			</el-col>
		</div>
	</div>
</template>

<script>
	export default{
		name:'home',
		data(){
			return{
				systemName:'学生信息管理系统',
				userName:'XX老师'
			}
		}
	}
</script>

<style>
	.container{
		position: absolute;
		top: 0;
		bottom: 0;
		width: 1280px;
		height: 522px;
	}

	.header{
	background: #fff;
	border-bottom: 1px solid #C0C4CC;
	height: 80px;
	padding: 10px 10px 10px 10px;
	width: 100%;
	}

	.logo{
		padding: 15px 5px 5px 5px;
	}

	.aside{
		background: #fff;
		border-right: 1px solid #C0C4CC;
		width: 200px;
		padding: 30px 10px 20px 15px;
		height: 100%;
		/*float: left;*/
	}

	.main{
		height: 100%;
	}

	.box{
		/*padding: 20px;*/
		background: #F2F6FC;
		height: 230px;
		width: 230px;
		text-align: center;
		border-radius: 30px;
		/*padding: 30px;*/
	}

	.box-img{
		height: 100px;
		width: 100px;
		border:1px solid #C0C4CC;
		border-radius: 50%;
		margin: 50px 50px 20px 50px;
	}

	.box-container{
		padding: 140px 20px 20px 120px;
		text-align: center;
	}
</style>