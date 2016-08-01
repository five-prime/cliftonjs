

/**
 * @ngdoc overview
 * @name cliftonApp
 * @description
 * # cliftonApp
 *
 * Main module of the application.
 */
angular
  .module('cliftonApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
 ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainController',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'aboutController',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'homeController',
        controllerAs: 'home'
      })
      .when('/docs', {
	templateUrl: 'views/docs.html',
	controller: 'docsController',
	controllerAs: 'docs'
      })	
      .otherwise({
        redirectTo: '/'
      });
  });
