/* Angular ui.router */

(function() {
    'use strict';

    angular
        .module('navarroApp')
        .config(function ($stateProvider) {

            var dir = 'components/';

            $stateProvider
                .state('home', {
                    url: '/',
                    templateUrl: dir + 'home/home.view.html',
                    controller: 'HomeCtrl',
                })
                .state('about', {
                    url: '/about',
                    templateUrl: dir + 'about/about.view.html',
                    controller: 'AboutCctrl'
                })
                .state('projects', {
                    url: '/projects',
                    templateUrl: dir + 'projects/projects.view.html',
                    controller: 'ProjectsCtrl'
                })
                .state('contacts', {
                    url: '/contacts',
                    templateUrl: dir + 'contacts/contacts.view.html',
                    controller: 'ContactsCtrl'
                })
        })
})();
