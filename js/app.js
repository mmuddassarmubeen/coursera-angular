(function() {
	'use strict';

	angular.module('LunchCheck', [])
	.filter('itemCount', function() {
		return function(input, isEmpty) {
			input = input || [];
			var count = 0;
			for(var i=0;i<input.length;i++) {
				if(input[i].trim() != ""){
					count++;
				}
			}
			return count;
		}
	})
	.controller('LunchCheckController', ['$scope', 'itemCountFilter', LunchCheckController]);

	function LunchCheckController($scope, itemCountFilter) {
		$scope.items = "";

		$scope.checkItems = function() {
			
			var itemsArray = $scope.items.split(',');
			var filteredItems = itemCountFilter(itemsArray);
			if(filteredItems == 0) {
				$scope.message = "Please enter data first";
			} else if(filteredItems <= 3){
				$scope.message = "Enjoy!";
			} else {
				$scope.message = "Too much!";
			}
		}
	}
})();