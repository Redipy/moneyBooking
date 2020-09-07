<template>
	<view class="content">
		<!-- 今日花费 -->
		<ul class="money-box">
			<li v-for="item in moneyList">
				<span>{{item.time}}</span>
				<span>{{item.name}}</span>
				<span>{{item.type}}</span>
				<span>{{item.money}}元</span>
			</li>
		</ul>
		<!-- 记账表单 -->
		<form>
			<input />
		</form>
	</view>
</template>

<script>
export default {
	data() {
		return {
			moneyList: []
		};
	},
	onLoad() {
		this.init()
	},
	methods: {
		init () {
			this.loadList()
		},
		loadList () {
			const list = [
				{
					time: '08:59',
					name: '煎饼',
					type: '吃饭',
					money: 5
				},
				{
					time: '19:40',
					name: '地铁卡',
					type: '交通',
					money: 100
				}
			]
			this.moneyList = list
		}
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	text-align: center
}
.money-box {
	width: 90vw;
	margin-top: 30rpx;
	padding: 0;
	border-radius: 10px 10px 10px 10px;
	background-color: #8fe5ee;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
}
.money-box li {
	margin: 10rpx auto;
	background-color: #FFFFFF;
	border-radius: 20px 20px 20px 20px;
}
.money-box li span {
	margin: auto 10rpx;
}
</style>
