/**
 * Created by sohai on 22-05-2016.
 */
'use strict';

angular.module('myApp.view1', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Controller'
        })
    }])

    .controller('View1Controller', ['$scope', 'AppService',
        function ($scope, AppService) {
            console.log('View1Controller has been loaded successfully,');

            AppService.sayHello('View 1');

            $scope.showData = function () {
                console.log(JSON.stringify(AppService.getData(), null, 3));
            }

        }]);
