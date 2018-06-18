var app = angular.module("app",["hello","pd.dropdownTree","pd.cascade"]);
app.controller("appCtrl",["$scope","$http",function($scope,$http){
    $scope.firstName = "firstname";
    $scope.lastName = "lastname";

    $scope.changeName = function(){
        $scope.firstName = "fristName: li";
        $scope.lastName = "lastName: lin";
    }
}]);