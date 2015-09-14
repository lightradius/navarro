/* Angular ui.router */

(function() {
    'use strict';

    angular
        .module('navarroApp')
        .run(function() {
            String.prototype.hashCode = function() {
                var hash = 0, chr;
                if (this.length == 0) return hash;
                for (var i = 0, len = this.length; i < len; i++) {
                    chr = this.charCodeAt(i);
                    hash = ((hash << 5) - hash) + chr;
                    hash |= 0; // Convert to 32bit integer
                }
                return hash;
            }
        })
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
