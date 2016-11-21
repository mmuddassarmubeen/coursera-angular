(function() {
	'use strict';

	angular.module('ShoppingListCheckOff', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];


	function ToBuyController(ShoppingListCheckOffService) {
		var ctrl = this;
		ctrl.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
		ctrl.isEmpty = function(){
			return ctrl.toBuyItems.length == 0;
		}

		ctrl.moveItem = function(index) {
			ShoppingListCheckOffService.moveItem(index);
		}

	}

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var ctrl = this;
		ctrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();
		ctrl.isEmpty = function(){
			return ctrl.boughtItems.length == 0;
		}
	}

	function ShoppingListCheckOffService() {
		var service = this;

		var toBuyItems = ["Buy 1 cookie", "Buy 2 cookies", "Buy 3 cookies", "Buy 4 cookies", "Buy 5 cookies"];
		var boughtItems = [];

		service.moveItem = function(itemIndex){
			boughtItems.push(toBuyItems[itemIndex]);
			toBuyItems.splice(itemIndex, 1);
		}

		service.getToBuyItems = function(){
			return toBuyItems;
		}

		service.getBoughtItems = function(){
			return boughtItems;
		}

	}
})();