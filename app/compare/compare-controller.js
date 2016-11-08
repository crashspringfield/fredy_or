(function(window, angular, undefined){
  angular.module('app')

    .controller('compareCtrl', ['$scope', '$http', '$location', 'Upload', function($scope, $http, $location, Upload){
      $scope.file = undefined;
      $scope.image = "";
      $scope.error = "";

      // Get of picture of Fredy from DB
      $http.get('/getFredy').then(function(response){
        $scope.fredy = response.data;
      }, function(error) {
        console.error(error);
      })

      // Upload competitor
      $scope.upload = function() {
        Upload.upload({
          url: '/compare',
          data: {
            file: $scope.file,
          }
        }).then(function(response){
          console.log('success');
          $location.path('/results');
        }, function(error) {
          console.error(error);
          $scope.error = error;
        });
      };

    }])

    // Display selected image on page before upload
    .directive('myUpload', [function () {
      return {
        restrict: 'A',
        link: function (scope, elem, attrs) {
          var reader = new FileReader();
          reader.onload = function (e) {
            scope.image = e.target.result;
            scope.$apply();
          }

          elem.on('change', function() {
            reader.readAsDataURL(elem[0].files[0]);
          });
        }
      };
    }]);

})(window, window.angular);
