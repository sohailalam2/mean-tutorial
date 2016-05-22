/**
 * Created by sohai on 22-05-2016.
 */
'use strict';

angular.module('myApp', [
        'ngRoute',
        'myApp.AppService',
        'myApp.view1',
        'myApp.view2'
    ])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/view1'});
    }]);
