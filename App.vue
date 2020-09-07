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
li{
	list-style: none;
}
</style>
