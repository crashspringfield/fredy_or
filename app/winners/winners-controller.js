(function(window, angular, undefined){
  angular.module('app')
    .controller('winnersCtrl', ['$scope', '$http', function($scope, $http){

      $http.get('/getWinners').then(function(response){
        $scope.pics = response.data;
      }, function(error) {
        console.error(error);
      })

    }])
})(window, window.angular)
