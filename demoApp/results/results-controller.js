(function(window, angular, undefined){
  angular.module('app')

    .controller('resultsCtrl', ['$scope', '$timeout', function($scope, $timeout){
      $scope.calculating = true;
      $scope.results = false;

      $timeout(function () { $scope.calculating = false; }, 3000);
      $timeout(function () { $scope.results = true; }, 3000);

    }])

})(window, window.angular)
