(function(window, angular, undefined){
  angular.module('app', ['ui.router', 'ngFileUpload', 'jtt_bricklayer']);

  angular.module('app').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('compare', {
          url: '/',
          templateUrl: 'app/compare/compare.html',
          controller: 'compareCtrl'
        })
        .state('honorableMention', {
          url: '/honorable-mention',
          templateUrl: 'app/honorableMention/hm.html',
          controller: 'hmCtrl'
        })
        .state('results', {
          url: '/results',
          templateUrl: 'app/results/results.html',
          controller: 'resultsCtrl'
        })
        .state('winners', {
          url: '/winners',
          templateUrl: 'app/winners/winners.html',
          controller: 'winnersCtrl'
        })

  }])
})(window, window.angular);
