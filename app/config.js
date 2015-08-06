/* Angular ui.router */

(function() {
    'use strict';

    angular
        .module('navarroApp')
        .config(function ($stateProvider, $urlRouterProvider ) {

            var dir = 'components/';

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: dir + 'home/home.view.html',
                    controller: 'HomeCtrl',
                })
                .state('404', {
                    url: '/404',
                    templateUrl: dir + '404/404.view.html',
                    controller: '404Ctrl'
                })
        })
})();
