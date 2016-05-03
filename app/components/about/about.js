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

            let draw = 7;
            let deck = 60;
            let mulligan = 2;

            for ( let i = 0, mulligan; i < mulligan; i++ ) {
                console.log(i);
                for ( let j = 0, draw; j < ( draw - i ); j++ ) {
                    let newProb = ( ( deck - j + 1 ) / ( deck - j + 1 ) );
                    let prob = prob ? prob * newProb : newProb;
                    console.log( prob );
                }
            }
        }
    }
})();
