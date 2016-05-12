(function() {
    'use strict';

    angular
        .module('navarroApp')
        .directive('achievement', directive);

    /* @ngInject */
    function directive() {
        var directive = {
            restrict: 'A',
            templateUrl: 'templateUrl',
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

    Controller.$inject = [];

    /* @ngInject */
    function Controller() {
        var vm = this;

        activate();

        function activate() {

        }
    }
})();
