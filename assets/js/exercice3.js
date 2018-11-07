var carsArray = angular.module('carsApp',[]);
carsArray.controller('carsController',function($scope,$http){
  $http.get('assets/json/exercice3.json').then(function(result){
    $scope.arrayCars = result.data;
  });
});
