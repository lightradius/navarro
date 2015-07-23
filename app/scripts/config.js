angular
.module('navarroApp').config(function ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'HomeCtrl'
  })
  .when('/about', {
    templateUrl: 'views/about.html',
    controller: 'AboutCtrl'
  })
  .when('/contact', {
    templateUrl: 'views/contact.html',
    controller: 'ContactCtrl'
  })
  .when('/projects', {
    templateUrl: 'views/projects.html',
    controller: 'ProjectsCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
