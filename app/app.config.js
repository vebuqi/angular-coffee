'use strict';

angular.
    module('coffeesApp').
    config(['$locationProvider' ,'$routeProvider',
        function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
            when('/coffees', {
                template: '<coffee-list></coffee-list>'
            }).
            when('/coffees/:coffeeId', {
                template: '<coffee-review></coffee-review>'
            }).
            otherwise('/coffees');
        }
    ]);