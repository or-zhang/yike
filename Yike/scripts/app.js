	
var Yike = angular.module('Yike', ['ngRoute', 'Ctrls']);

Yike.run(['$rootScope', function ($rootScope) {

	// $rootScope 全局作用域

	$rootScope.collapsed = false;

	// 加载状态
	$rootScope.loaded = false;

	// 页面标题
	$rootScope.title = '今日一刻';

	$rootScope.current = 0;

	$rootScope.toggle = function () {
		$rootScope.collapsed = !$rootScope.collapsed;

		// 所有导航
		var navs = document.querySelectorAll('.navs dd');

		if($rootScope.collapsed) {
			// console.log('向右');

			for(var i=0; i<navs.length; i++) {
				navs[i].style.transform = 'translate(0)';
				navs[i].style.transitionDuration = (i + 1) * 0.15 + 's';
				navs[i].style.transitionDelay = '0.2s';
			}

		} else {
			// console.log('向左');

			var len = navs.length - 1;

			for(var i=len; i>=0; i--) {
				navs[i].style.transform = 'translate(-100%)';
				// 5 4 3 2 1 0
				// len - 5 0 
				// len - 4 1
				// len - 3 2
				// len - 2 3
				// len - 1 4
				// len - 0 5
				navs[i].style.transitionDuration = (len - i) * 0.15 + 's';
				navs[i].style.transitionDelay = '';
			}
		}
	}
}]);

// 配置路由
Yike.config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/today', {
		// 充当就是视图
		templateUrl: './views/today.html',
		controller: 'TodayCtrl'
	}).when('/older', {
		templateUrl: './views/older.html',
		controller: 'OlderCtrl'
	}).when('/hot', {
		templateUrl: './views/hot.html',
		controller: 'HotCtrl'
	}).when('/view', {
		templateUrl: './views/today.html'
	}).when('/like', {
		templateUrl: './views/today.html'
	}).when('/settings', {
		templateUrl: './views/today.html'
	}).otherwise({
		redirectTo: '/today'
	});

}]);
