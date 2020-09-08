<template>
	<view class="content">
		<lxCalendar :key="reset" :dot_lists=dot_lists :value="value" @change="change"></lxCalendar>
		<view class="button box">
			<!-- <button @click="back">回到今天</button> -->
			<button @click="go">查看当天账单</button>
		</view>
		<h1>广告位招租</h1>
	</view>
</template>

<script>
	import lxCalendar from '../../../components/lx-calendar/lx-calendar.vue'
	export default {
		components:{
			lxCalendar,
		},
		data() {
			return {
				dot_lists: [],
				date: '',
				value: '',
				reset: true
			}
		},
		onLoad() {
			this.init()
		},
		onShow() {
			this.date = this.dateToString(new Date())
			this.value = this.dateToString(new Date())
			console.log(this.date)
			console.log(this.value)
		},
		methods: {
			init () {
				this.date = this.dateToString(new Date())
				this.dot_lists.push(this.date)
			},
			change(e){
				this.date = e.fulldate
            },
			back () {
				this.value = this.date
				// console.log(this.value)
				// setTimeout(() => {
				// 	this.reset = false
				// 	this.reset = true
				// },10000)
			},
			go () {
				// console.log()
				// let path = this.date
				sessionStorage.setItem('date', this.date)
				uni.switchTab({
				    url: '/pages/tabbar/list/list',
					success: function(e) {
						var page = getCurrentPages().pop();
						if (page == undefined || page == null) return;
					}
				});
			},
			dateToString (date) {
			  let year = date.getFullYear()
			  let month = date.getMonth() + 1
			  let day = date.getDate()
			  month = month < 10 ? '0' + month : month,
			  day = day < 10 ? '0' + day : day
			  return year + '-' + month + '-' + day
			}
		}
	}
</script>

<style>
	.content {
		text-align: center;
	}
	.button {
		display: flex;
	}
	button {
		margin: 10rpx auto;
		background-color: #FFFFFF;
		color: #599296;;
	}
</style>
