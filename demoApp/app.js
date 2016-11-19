(function(window, angular, undefined){
  angular.module('app', ['ui.router', 'ngFileUpload', 'jtt_bricklayer']);

  angular.module('app').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('compare', {
          url: '/',
          templateUrl: 'demoApp/compare/compare.html',
          controller: 'compareCtrl'
        })
        .state('honorableMention', {
          url: '/honorable-mention',
          templateUrl: 'demoApp/honorableMention/hm.html',
          controller: 'hmCtrl'
        })
        .state('results', {
          url: '/results',
          templateUrl: 'demoApp/results/results.html',
          controller: 'resultsCtrl'
        })
        .state('winners', {
          url: '/winners',
          templateUrl: 'demoApp/winners/winners.html',
          controller: 'winnersCtrl'
        })

  }])
})(window, window.angular);
