angular.module('starter.controllers', [])


.controller('carsCtrl', function($scope, getSuzukiList, $ionicLoading, $q) {
	
	$ionicLoading.show({ template: 'loading ...' });
	getSuzukiList.newcars($q)
		.then(function(result){			
			$ionicLoading.hide();
			console.log(result);
			$scope.newCars = result;
			window.localStorage.setItem("newCarsCache", JSON.stringify(result));
			
			})
	
})

.controller('carDetailCtrl', function($scope, getSuzukiList, $stateParams, $ionicLoading, $filter, $q) {
	
	$ionicLoading.show({ template: 'loading ...' });
	if(window.localStorage.getItem("newCarsCache") !== undefined) {
                var newCars = JSON.parse(window.localStorage.getItem("newCarsCache"));
				
				single_object = $filter('filter')(newCars, function (d) {return d.id === $stateParams.carId;})[0];			
				// If you want to see the result, just check the log
				console.log(single_object);
				$scope.car = single_object;
				$ionicLoading.hide();
				
            }
	
	
})

.controller('socialCtrl', function($scope, getSuzukiList, $stateParams, $ionicLoading, $filter, $q) {
	
	//$ionicLoading.show({ template: 'loading ...' });
	//$ionicLoading.hide();
				
      
	
	
})




.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
