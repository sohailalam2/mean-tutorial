/**
 * Created by sohai on 22-05-2016.
 */
'use strict';

angular.module('myApp.AppService', [])

    .factory('AppService', function () {
        var API = {};

        var data = {};

        API.sayHello = function (name) {
            console.log('Hello ' + name);
        };

        API.saveData = function (key, value) {
            data[key] = value;
        };

        API.getData = function () {
            return data;
        };

        return API;
    });
