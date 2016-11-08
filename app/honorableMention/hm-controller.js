(function(window, angular, undefined){
  angular.module('app')
    .controller('hmCtrl', ['$scope', '$http', function($scope, $http){

      $http.get('/getLosers').then(function(response){
        $scope.pics = response.data;
      }, function(error) {
        console.error(error);
      })


    }])
})(window, window.angular)
