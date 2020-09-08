<template>
	<view class="content">
		<!-- 记账表单 -->
		<h1>记账</h1>
		<view class="book box">
			<form>
				<view class="form-item">
					<view class="title">时间</view>
					<view class="cell">
						<view class="cell-detail" @click="selectDatePicker">
							{{form.time}}
						</view>
					</view>
					<date-time-picker ref='date-time' :type='type' :datestring='dateString' @change='dateTimeChange'></date-time-picker>
				</view>
				<view class="form-item">
					<view class="title">事件</view>
					<input class="input" name="name" v-model="form.name" placeholder="买了啥" />
				</view>
				<view class="form-item">
					<view class="title">类型</view>
					<picker class="input" @change="bindPickerChange" :range="typeList">
						<label class="">{{form.type}}</label>
					</picker>
					<!-- <input class="input" name="type" v-model="form.type" placeholder="选择类型" /> -->
				</view>
				<view class="form-item">
					<view class="title">金额</view>
					<input class="input" name="money" v-model="form.money" placeholder="多少钱" />
				</view>
			</form>
		</view>
		<!-- 按钮组 -->
		<view class="button box">
			<button @click="submit">提交</button>
			<button @click="reset">重置</button>
		</view>
		<!-- 今日花费 -->
		<h2>今日花费</h2>
		<ul class="money box">
			<template v-if="!use">
				<li>
					<span>今天还没花钱</span>
				</li>
			</template>
			<template v-else>
				<li v-for="item in moneyList">
					<span>{{item.time}}</span>
					<span>{{item.name}}</span>
					<span>{{item.type}}</span>
					<span>{{item.money}}元</span>
				</li>
			</template>
		</ul>
	</view>
</template>

<script>
	import DateTimePicker from '../../../components/bory-dateTimePicker/bory-dateTimePicker.vue'
	export default {
		components: {
			DateTimePicker
		},
		data() {
			return {
				use: false,
				moneyList: [],
				typeList: ['吃饭', '交通', '超市', '充值',' 网购', '保养', '水电', '买烟'],
				index: 0,
				form: {
					time: '',
					name: '',
					type: '吃饭',
					money: ''
				},
				dateString: '',
				type: 'hour-minute',
				title: '展示时分',
			};
		},
		onLoad() {
			this.init()
		},
		methods: {
			init () {
				this.loadList()
				this.form.time = this.dateToString(new Date())
			},
			loadList () {
				const list = [
					// {
					// 	time: '08:59',
					// 	name: '煎饼',
					// 	type: '吃饭',
					// 	money: 5
					// },
					// {
					// 	time: '19:40',
					// 	name: '地铁卡',
					// 	type: '交通',
					// 	money: 100
					// }
				]
				this.moneyList = list.length != 0 ? list : []
				this.use = list.length != 0
				console.log(list)
				console.log(this.use)
				
			},
			selectDatePicker() {
				this.$refs['date-time'].show();
			},
			dateTimeChange(value) {
				this.form.time = value;
			},
			reset () {
				this.form = this.$options.data().form
				this.form.time = this.dateToString(new Date())
			},
			submit () {
				console.log(this.form)
				if (this.form.name === '' || this.form.money === '') {
					let obj = {
						title: '写全再提交',
						icon: 'none'
					}
					uni.showToast(obj)
				} else {
					
				}
			},
			bindPickerChange (e) {
				console.log(e)
				this.index = e.target.value
				this.form.type = this.typeList[this.index]
			},
			dateToString (date) {
			  let Hour = date.getHours()
			  let Minute = date.getMinutes()
			  Hour = Hour < 10 ? '0' + Hour : Hour
			  Minute = Minute < 10 ? '0' + Minute : Minute
			  return Hour + ':' + Minute
			}
		}
	};
</script>

<style>
	.content {
		text-align: center
	}
	.content h1 {
		font-size: 60rpx;
		margin-top: 30rpx;
		color: #53858a;
	}
	.content h2 {
		font-size: 60rpx;
		margin-top: 30rpx;
		color: #53858a;
	}
	.book {
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.book form {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.book form .form-item {
		width: 600rpx;
		margin: 20rpx auto;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.book form .form-item .title {
		font-size: 35rpx;
		color: #3b6063;
	}
	.book form .form-item .input {
		width: 500rpx;
		height: 50rpx;
		margin: 0 0 0 20rpx;
		font-size: 30rpx;
		color: #599296;
		border-radius: 10px;
		background-color: #FFFFFF;
	}
	.cell {
		width: 500rpx;
		height: 50rpx;
		margin: 0 0 0 20rpx;
		font-size: 30rpx;
		color: #599296;
		border-radius: 10px;
		background-color: #FFFFFF;
	}
	.button {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.button button {
		width: 150rpx;
		height: 70rpx;
		margin: 20rpx auto;
		background-color: #dafbff;
		border-radius: 20px;
		color: #3b6063;
		font-size: 35rpx;
		line-height: 65rpx;
	}
	.money {
		max-height: 500rpx;
		overflow-y: auto;
		padding: 0;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	}
	.money li {
		width: 80vw;
		margin: 10rpx auto;
		background-color: #FFFFFF;
		border-radius: 20px;
	}
	.money li span {
		margin: auto 10rpx;
	}
</style>
