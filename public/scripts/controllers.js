
// “部门也是以模块形式存在的”

angular.module('Ctrls', [])

.controller('DemoController', ['$scope', function ($scope) {

	console.log('我是入职的第一名员工，我属于控制器');
}])

// 导航
.controller('NavsController', ['$scope', '$http', function ($scope, $http) {

	// 通常情况左侧导航的数据会来自于后端
	// $http({
	// 	url: '',
	// }).success(function (info) {
	// 	$scope.navs = info;
	// });

	// 假如导航是固定不变的就没有必要再发请求了
	// 可用数组进行模拟

	var navs = [
		{text: '今日一刻', link: '#/today', icon: 'icon-home'},
		{text: '往期内容', link: '#/older', icon: 'icon-file-empty'},
		{text: '热门作者', link: '#/hot', icon: 'icon-pencil'},
		{text: '栏目浏览', link: '#/view', icon: 'icon-menu'},
		{text: '我的喜欢', link: '#/like', icon: 'icon-heart'},
		{text: '设置', link: '#/settings', icon: 'icon-cog'},
	];

	// 模型数据
	$scope.navs = navs;

}])

// 今日一刻
.controller('TodayCtrl', ['$scope', '$http', '$rootScope', '$filter', function ($scope, $http, $rootScope, $filter) {

	$rootScope.loaded = false;

	$rootScope.title = '今日一刻';

	$rootScope.current = 0;

	// 需要转化 yyyy-mm-dd
	var day = new Date;
	day = $filter('date')(day, 'yyyy-MM-dd');

	// 获得数据
	$http({
		url: '/today',
		params: {day: day},
	}).success(function (info) {
		// console.log(info);
		// 将获得的数据放到模型上
		$scope.posts = info.posts;
		$scope.date = info.date;

		// 成功获取数据
		$rootScope.loaded = true;
	});

}])

// 往期内容
.controller('OlderCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {
	
	$rootScope.loaded = false;

	$rootScope.title = '往期内容';

	$rootScope.current = 1;

	$scope.day = -1;

	// 
	$http({
		url: '/older',
		params: {day: $scope.day},
	}).success(function (info) {
		// console.log(info);

		// 获取数据
		$scope.posts = info.posts;
		$scope.date = info.date;

		//$scope.day = info.day;

		$rootScope.loaded = true;
	});
}])

// 热门作者
.controller('HotCtrl', ['$scope', '$http', '$rootScope', function ($scope, $http, $rootScope) {

	$rootScope.title = '热门作者';

	$rootScope.current = 2;

	$rootScope.loaded = false;

	$http({
		url: '/hot'
	}).success(function(info) {
		// console.log(info);
		// 推荐
		$scope.rec = info.rec;
		// 全部
		$scope.all = info.all;

		$rootScope.loaded = true;
	});

}])