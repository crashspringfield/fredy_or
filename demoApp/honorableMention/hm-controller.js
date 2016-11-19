(function(window, angular, undefined){
  angular.module('app')
    .controller('hmCtrl', ['$scope', '$http', function($scope, $http){

      // $http.get('/getLosers').then(function(response){
      //   $scope.pics = response.data;
      // }, function(error) {
      //   console.error(error);
      // })

      // ========================= DEMO ====================================

      $scope.pics = [
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511566/bkxnmebzjkdldhe9svof.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511550/dsjauel6bnnhsx12y5jy.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511523/sfeespvk4p9blauvgbyh.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511499/cmshqeem6jm7sjyevwzs.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1479511480/iplix32e2ocsbfqdor0q.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1478619071/fmipjk2rhlaqtblrfsgm.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1478564853/yr99kezn43xg13seark2.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1478543315/m6q1xv8mv0wn9ofsdcx9.jpg',
        'http://res.cloudinary.com/dotkbdwdw/image/upload/v1478538817/bbzopcsysrckgh2wfilf.jpg'
      ]
      // ===================================================================

    }])
})(window, window.angular)
