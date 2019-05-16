    var amaApp = angular.module('amaApp', ['ui.router']);
    
    amaApp.config( function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state({
    name: 'home',
    url: '/',
    templateUrl: "partials/home.html", controller: "amaCtrl"
    })
    .state({
    name: 'about',
    url: '/about',
    templateUrl: "partials/about.html", controller: "amaCtrl"
    })
    .state({
    name: 'contact',
    url: '/contact',
    templateUrl: "partials/contact.html", controller: "amaCtrl"
    });
    $urlRouterProvider.otherwise('/');
    });
    amaApp.controller('amaCtrl', function($scope){
    $scope.brandImg="data:image/png;base64,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";
    $scope.cYear=function(){
    var y = new Date().getFullYear();
    return y;
    }
    })
