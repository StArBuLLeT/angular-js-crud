angular.
  module('angularCrudApp').
  config(['$routeProvider',
    function config($routeProvider) {
      $routeProvider.
        when('/', {
          template: '<employee-list></employee-list>'
        }).
        when('/map', {
            template: '<map></map>'
        })
    }
  ]);