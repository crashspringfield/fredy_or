/* TO DO: 
Develop if I feel like spendning time separating out logic
between controllers, services, and directives */

(function(window, angular, undefined) {
  angular.module('app')

    .factory('animalFactory', ['$http', '$q', function($http, $q) {

      var animalFactory = {};

      var handleSuccess = function(res) {
        return res.data;
      }

      var handleError = function(res) {
        return $q.reject(res.data);
      }

      animalFactory.getLosers = function() {
        return $http.get('/getLosers')
          .then(handleSuccess, handleError);
      }


      return animalFactory;

    }])
})(window, window.angular)
