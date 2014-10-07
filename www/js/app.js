var App = angular.module("App", ["ionic"]);


var Github = function($scope, $http) {


    $scope.search = function(username) {
        $http.get("https://api.github.com/users/" + username)
            .success(function(data) {
                $scope.user = data;
            }).error(function(data, status) {
                if (status == 404) {

                }
                $scope.message = "There was a network error/user unavailable Try again.";



            });

    };

};
App.controller('Github', ["$scope", "$http", Github]);