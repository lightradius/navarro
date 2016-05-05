/* Angular ui.router */

(function() {
    'use strict';

    angular
        .module('navarroApp')
        .run( function() {
            // force reload at top top prevent erroneous navbar styles
            window.onbeforeunload = function(){
            	window.scrollTo( 0, 0 );
            }

            // disable right arrow key because it circumvents overflow-x: hidden
            $('html')
            .keydown(function (event) {
                if (event.which == '39') { //13 = Enter
                    event.preventDefault();
                }
            })
            // String.prototype.hashCode = function() {
            //     var hash = 0, chr;
            //     if (this.length == 0) return hash;
            //     for (var i = 0, len = this.length; i < len; i++) {
            //         chr = this.charCodeAt(i);
            //         hash = ((hash << 5) - hash) + chr;
            //         hash |= 0; // Convert to 32bit integer
            //     }
            //     return hash;
            // }
        })
        .constant('ASSETS', {
             url: "assets/src/"
         })
        .config(function ($stateProvider, $urlRouterProvider) {

            let dir = 'components/';

            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: dir + 'home/home.html',
                    controller: 'HomeCtrl as vm',
                })
                .state('404', {
                    url: '/404',
                    templateUrl: dir + '404/404View.html',
                });
        });
})();
