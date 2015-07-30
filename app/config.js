/* Angular ui.router */

angular
.module('navarroApp').config(function ($stateProvider) {

  var dir = 'components/'

  $stateProvider.state('home', {
    url: '/',
    templateUrl: dir + 'home/homeView.html',
    controller: 'HomeCtrl'
  })

  // $routeProvider
  // .when('/', {
  //   templateUrl: 'components/home.html',
  //   controller: 'HomeCtrl'
  // })
  // .when('/about', {
  //   templateUrl: 'components/about.html',
  //   controller: 'AboutCtrl'
  // })
  // .when('/contact', {
  //   templateUrl: 'components/contact.html',
  //   controller: 'ContactCtrl'
  // })
  // .when('/projects', {
  //   templateUrl: 'components/projects.html',
  //   controller: 'ProjectsCtrl'
  // })
  // .otherwise({
  //   redirectTo: '/'
  // });
})
