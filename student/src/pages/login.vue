<template>
	<body style="width: 100%;height: 100%;background: #D7E0EA">
		<div style="width: 1250px">  
			<el-row :gutter='50' style='width: 100%'>
				<el-col :span='14'>
					<div style="width: 60%;margin: 150px 0px 30px 200px;">
						<img src="../assets/timg.jpg" style="width: 100%;border-radius: 15px">
					</div>
				</el-col>
				<el-col :span='8' style='margin-top: 90px;'>
					<div style="margin-top: 30px;">
						<div class="head">
							<img src="../assets/logo.png" style="width: 100%">
						</div><br>
						<div class="login">
							<div>
								<h2 style="text-align: center;color: #606266;">账号登录</h2>
							</div>
							<div style="margin-right: 30px">
								<el-form ref='form' :model='form' label-width='80px'>
									<el-form-item label='账号'>
										<el-input v-model='account' placeholder='请输入账号'></el-input>
									</el-form-item>
									<el-form-item label='密码'>
										<el-input v-model='password' type='password' placeholder='请输入密码'></el-input>
									</el-form-item>
									<el-form-item>
										<el-button type='primary' @click.native='login' 
										:loading="isBtnLoading">登录</el-button>
									</el-form-item>
								</el-form>
							</div>
							<div class="bottom">
								<el-row>
									<el-button type='text'>忘记密码？</el-button>
									<el-button type='text'>申请加入</el-button>
								</el-row>
							</div>
						</div>
					</div>
				</el-col>
			</el-row>
		</div>
	</body>
</template>

<script type="text/javascript">
	export default {
		name: 'login',
		data(){
			return {
				account:'',
				password:'',
				isBtnLoading:false
			}
		},
		compute:{
			btnText(){
				if(this.isBtnLoading) return '登录中...';
				return '登录';
			}
		},
		methods:{
			// login: function() {
			// 	var that=this;
			// 	this.$refs['userLoginForm'].validate(valid=>{
			// 		// 验证成功
			// 		if (valid){
			// 			var account=document.getElementById('user_login_account').value;
			// 			var password=document.getElementById('user_login_password').value;

			// 			let postData=this.$qs.stringify({
			// 				account:account,
			// 				password:password
			// 			});
			// 			this.$ajax({
			// 				method:'post',
			// 				url: 'users/login.do',
			// 				data:postData
			// 			}).then(function(response){
			// 				if(response.data.success){

			// 					var sessionStorage=window.sessionStorage;
			// 					sessionStorage.setItem('account',response.data.user.name);
			// 					sessionStorage.setItem('userId',response.data.userId);
			// 					that.$router.push({
			// 						path: '/user/home'
			// 					});
			// 				}else{
			// 					that.$msgbox({
			// 						title:'登录失败',
			// 						message:response.data.msg,
			// 						type:'error'
			// 					});
			// 					document.getElementById('user_login_kaptchaImg').src = "/kaptcha.do?" + Math.floor(Math.random()*100);
			// 				}
			// 			}).catch(function (error) {
			// 				that.$msgbox({
			// 					title: '登录失败',
   //            					message: '服务器异常',
   //            					type: 'error'
   //          				});
   //          				document.getElementById('user_login_kaptchaImg').src = "/kaptcha.do?" + Math.floor(Math.random()*100);
   //          			})
			// 		}else{
			// 			this.$msgbox({
			// 				title: '登录失败',
			// 				message: '请完善个人信息',
			// 				type: 'error'
			// 			});
			// 		}

			// 	})
			// 	// if(!account){
			// 	// 	this.$message.error('请输入账号');
			// 	// 	return;
			// 	// }
			// 	// if(!password){
			// 	// 	this.$message.error('请输入密码');
			// 	// 	return;
			// 	// }

			// }
			login:function(){
				this.$router.push({
					path:'/home'
				});
			}
		}
	}
</script>

<style>
	.login{
		background: #fff;
		border: 1px solid #999999;
		width:100%;
		border-radius: 8px;
		text-align: center;
		margin: 5px 15px 35px 0px;
	}

	.head{
		text-align: center;
		color: #606266;
		font-size: 25px;
		font-weight: bolder;
	}

	.bottom{
		font-size: 12px;
		color: #409eff;
		margin: 10px 10px 10px 10px;
	}

</style>