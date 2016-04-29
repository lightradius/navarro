(function() {
    'use strict';

    angular
        .module('navarroApp')
        .directive('about', directive);

    /* @ngInject */
    function directive() {
        var directive = {
            restrict: 'EA',
            templateUrl: 'components/about/about.html',
            scope: {
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {

        }
    }

    Controller.$inject = ['$scope'];

    /* @ngInject */
    function Controller($scope) {
        var vm = this;

        activate();

        function activate() {
            console.log('about section loaded');
        }
    }
})();
