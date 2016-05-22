/**
 * Created by sohai on 22-05-2016.
 */
'use strict';

angular.module('myApp.view2', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Controller'
        })
    }])

    .controller('View2Controller', ['$scope', 'AppService',
        function ($scope, AppService) {
            console.log('View2Controller has been loaded successfully,');

            AppService.sayHello('View 2');

            $scope.key = '';
            $scope.value = '';

            $scope.saveData = function () {
                AppService.saveData($scope.key, $scope.value);
            };

        }]);
