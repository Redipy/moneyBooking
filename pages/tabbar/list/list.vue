<template>
	<view class="content">
		<view class="search box">
			<view class="cell">
				<view class="cell-detail" @click="selectDatePicker">
					{{date}}
				</view>
				<date-time-picker ref='date-time' :type='type' :datestring='dateString' @change='dateTimeChange'></date-time-picker>
			</view>
		</view>
		<view class="list box">
			<template v-if="use">
				<ul class="title">
					<li style="margin-left: 10rpx;">时间</li>
					<li>事件</li>
					<li>类型</li>
					<li style="margin-right: 10rpx;">金额</li>
				</ul>
				<ul class="body">
					<li class="item" v-for="item in bookList">
						<ul>
							<li style="margin-left: 10rpx;">{{item.time}}</li>
							<li>{{item.name}}</li>
							<li>{{item.type}}</li>
							<li style="margin-right: 10rpx;">{{item.money}}</li>
						</ul>
					</li>
				</ul>
				</template>
				<template v-else>
					<ul class="body">
						<li>
							<span>这天没花钱</span>
						</li>
					</ul>
				</template>
			
		</view>
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
				date: '',
				dateString: '',
				type: 'date',
				use: false,
				bookList: []
			}
		},
		onLoad() {
			this.init()
			let user = {
				user_id: 1,
			}
			sessionStorage.setItem('user', user)
			console.log(this.url + '/first')
			uni.request({
				url: this.url + '/first',
				data: {
					id: sessionStorage.getItem('user')
				},
				success: (res) => {
					console.log(res)
				},
				fail: (err) => {
					console.log(err)
				}
			})
		},
		onShow () {
			this.setDate()
		},
		methods: {
			init () {
				this.setDate()
			},
			setDate () {
				// this.date = sessionStorage.getItem('date') ? sessionStorage.getItem('date') : this.dateToString(new Date())
				if (sessionStorage.getItem('date')) {
					this.date = sessionStorage.getItem('date')
					sessionStorage.removeItem('date')
				} else {
					this.date = this.dateToString(new Date())
				}
			},
			loadList () {
				const bookFromWeb = [
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
				this.bookList = bookFromWeb.length != 0 ? bookFromWeb : []
				this.use = this.bookList.length != 0
			},
			selectDatePicker() {
				this.$refs['date-time'].show();
			},
			dateTimeChange(value) {
				this.date = value;
				this.loadList()
			},
			dateToString (date) {
			  let year = date.getFullYear()
			  let month = date.getMonth() + 1
			  let day = date.getDate()
			  month = month < 10 ? '0' + month : month,
			  day = day < 10 ? '0' + day : day
			  return year + '-' + month + '-' + day
			}
		},
		watch: {
			date () {
				this.loadList()
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
	}
	.search {
		width: 90%;
		color: #53858a;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.cell {
		width: 500rpx;
		height: 50rpx;
		margin: 10rpx 0 10rpx;
		font-size: 35rpx;
		color: #599296;
		border-radius: 10px;
		background-color: #FFFFFF;
	}
	.list ul {
		width: 90%;
		margin: 10rpx auto;
		border-radius: 10px;
		background-color: #FFFFFF;
		color: #599296;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.list .body {
		flex-direction: column;
	}
	.list .body .item {
		width: 100%;
		margin: 10rpx auto;
		display: flex;
		justify-content: space-between;
		align-content: center;
	}
	.list .body .item ul {
		width: 100%;
	}
</style>
