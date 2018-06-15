require.config({
	baseUrl:"../script/lib/",
	paths:{
		"jquery":"jquery.min"
	}
})

require(["../script/js/lunbo.js","../script/js/nav.js","../script/js/tab.js","../script/js/book_billbord.js","../script/js/ppt.js","../script/js/scroll.js","../script/js/countdown.js","../script/js/search.js","../script/js/connectdetail.js","../script/js/username.js"]);
//lunbo.js：轮播图
//nav.js：二级、三级导航
//tab.js：tab切换
//book_billbord.js：图书排行榜效果
//ppt.js：ppt效果
//scroll.js：楼梯效果以及顶部固定搜索框
//countdown.js：倒计时效果
//search.js：搜索框效果
//connectdetail.js:通过此文件再点击商品时对详情页的传递两个下标来实现不同商品详情页的渲染，由于数据过多，只做了主页秒杀栏及图书栏的商品图片部分;
//username.js：登出