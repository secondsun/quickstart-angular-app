var angular = require("angular");
require("angular-route");
require("angular-sanitize");
require("../lib/angular-snap/angular-snap");

var myApp = angular.module('myApp', ['ngRoute',
    'ngSanitize',
    'myApp.controllers',
    'myApp.directives',
    'myApp.services',
    'myApp.filters',
    'snap',
    'fhcloud'
]);

myApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/example.html',
            controller: 'MainCtrl'
        });
});