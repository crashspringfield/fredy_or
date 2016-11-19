(function(window, angular, undefined){
  angular.module('app')
    .controller('winnersCtrl', ['$scope', '$http', function($scope, $http){

      // $http.get('/getWinners').then(function(response){
      //   $scope.pics = response.data;
      // }, function(error) {
      //   console.error(error);
      // })

      // ========================= DEMO ====================================

      $scope.pics = [
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479512096/qcb4qzmwnqbt4ymqbfql.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479512083/gjg3h6a6qyweyw4zdv5a.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479512070/pw5wgrgtrnsc69lqo74y.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479512056/euboplzvoiyo5vallslv.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479512044/xk776t7hp9pketjjghoq.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479512012/sz8gyhngogfhqevfcnod.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479512000/s4v2dcbq01l60okleggr.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511984/uhn9qpe9cccyxwjrd6ta.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511970/cyd1xkc67awcdvfylx38.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511876/kcijs2pfnahn9zd1falk.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511845/pyziyh35xkdnmcjxr7v2.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511822/o16vqzyrzvztugzli9uv.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511748/dsvbiy5dcjlnui6bjh3b.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511698/tjvzepowyb0vmsvntf35.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1478537041/bkjaezetgkdpvxz2xtlx.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1478537030/w2aafnyuqry7w2y9mlmx.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1478534349/fsvb8lqa7eixhqeea1ev.jpg'
      ]
      // ===================================================================

    }])
})(window, window.angular)
