(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchController', LunchController);
LunchController.$inject = ['$scope'];
function LunchController($scope){
  $scope.name = "";
  $scope.checkiftoomuch = function () {
    var arrayOfStrings = $scope.name.split(",");
    console.log(arrayOfStrings);
    if ($scope.name.length==0) {
      $scope.result = "Please enter data first";
    }
    else if(arrayOfStrings.length > 3){
    $scope.result ="Too Much"
    }
    else if (0 < arrayOfStrings.length <=3) {
        $scope.result ="Enjoy"
    }
  };
}

})();
