<template>
	<view class="content">
		<view class="box">
			<h1>你好:{{username}}</h1>
		</view>
		<view class="box">
			<ul class="change">
				<li @click="passWord">修改密码 ></li>
				<li @click="type">自定义类型 ></li>
				<li style="text-align: center;background-color: #ffac9b;" @click="logout">退出登录</li>
			</ul>
		</view>
		<!-- <button type="warn" @click="logout">退出登录</button> -->
		<pop ref="pass" direction="center" :is_close="true" :is_mask="true" :width="80" @closeDialog="close">
			<form>
				<view class="form-item">
					<view class="title">事件</view>
					<input class="input" name="name" v-model="pass.old" placeholder="旧密码" />
				</view>
				<view class="form-item">
					<view class="title">事件</view>
					<input class="input" name="name" v-model="pass.now" placeholder="新密码" />
				</view>
				<view class="form-item">
					<view class="title">事件</view>
					<input class="input" name="name" v-model="pass.nowAgain" placeholder="再输入一次" />
				</view>
			</form>
		</pop>
		<pop ref="type" direction="center" :is_close="true" :is_mask="true" :width="80" @closeDialog="close"></pop>
	</view>
</template>

<script>
	import pop from '../../../components/ming-pop/ming-pop.vue'
	export default {
		components: {
			pop
		},
		data() {
			return {
				username: '',
				pass: {}
			}
		},
		onLoad() {
			this.init()
		},
		methods: {
			init () {
				this.setName()
			},
			setName () {
				this.username = JSON.parse(sessionStorage.getItem('user')).user_name
			},
			passWord () {
				this.$refs.pass.show();
			},
			type () {
				this.$refs.type.show();
			},
			logout () {
				console.log('out')
			},
			close () {
				console.log('data')
				this.pass = this.$options.data().pass
			}
		}
	}
</script>

<style>
	.content {
		text-align: center
	}
	h1 {
		background-color: #FFFFFF;
		border-radius: 10px 10px 10px 10px;
		width: 90%;
		margin: 20rpx auto;
	}
	.change {
		text-align: left;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.change li {
		width: 80vw;
		margin: 10rpx 0 10rpx 0;
		background-color: #FFFFFF;
		color: #599296;
		border-radius: 20px;
		font-size: 40rpx;
		text-indent: 20rpx;
	}
	button {
		margin: 20rpx auto;
	}
	.form-item {
		margin: 20rpx auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.input {
		background-color: #FFFFFF;
		color: #599296;
		border-radius: 10px;
		text-align: left;
		text-indent: 20rpx;
		margin-left: 20rpx;
	}
</style>
