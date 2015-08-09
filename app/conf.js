/* Angular ui.router */

(function() {
    'use strict';

    angular
        .module('navarroApp')
        .config(function ($stateProvider, $urlRouterProvider) {

            var dir = 'components/';

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: dir + 'home/home.html',
                    controller: 'HomeCtrl as vm',
                })
                .state('404', {
                    url: '/404',
                    templateUrl: dir + '404/404.view.html',
                });
        });
})();
