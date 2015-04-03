angular.module('MainCtrl', [])
    .factory('myService', function() {
        var savedData = {}
        function set(data) {
            savedData = data;
        }
        function get() {
            return savedData;
        }

        return {
            set: set,
            get: get
        }

    })
    .controller('MainController', function($scope, $http, myService) {
        $scope.getFunction = function(id) {
            myService.set(id);
        };




})
.controller('SController', function($scope, $http ,myService) {
        $scope.id = myService.get();
        var id = $scope.id;





});
