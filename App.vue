<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		// setTimeout(() => {
			// 数字角标
		// 	uni.setTabBarBadge({
		// 		index: 1,
		// 		text: '1'
		// 	});
			// 红点
		// 	uni.showTabBarRedDot({
		// 		index: 3
		// 	});
		// }, 1000);
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
	ul {
		padding: 0;
	}
	li {
		list-style: none;
	}
	uni-page-body {
		height: 100%;
	}
	.content {
		height: 100%;
		overflow-y: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		background-color: #fff9d7;
		/* background: url(static/img/bg.jpg) center/cover; */
	}
	.box {
		width: 90vw;
		margin-top: 30rpx;
		border-radius: 10px 10px 10px 10px;
		background-color: #c1f9ff;
	}
</style>
