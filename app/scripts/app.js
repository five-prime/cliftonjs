'use strict';

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
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/home', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/docs', {
	templateUrl: 'views/docs.html',
	controller: 'DocsCtril',
	controllerAs: 'docs'
      })	
      .otherwise({
        redirectTo: '/'
      });
  });
