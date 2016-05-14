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

    Controller.$inject = ['httpFactory'];

    /* @ngInject */
    function Controller(httpFactory) {
        var vm = this;
        vm.techs = [];

        vm.data = [
          {text: "Lorem", weight: 15, link: "https://google.com"}, //if your tag has a link.
          {text: "Ipsum", weight: 9},
          {text: "Dolor", weight: 6},
          {text: "Sit", weight: 7},
          {text: "Amet", weight: 5}
          // ...as many words as you want
      ];

        activate();

        function activate() {
            console.log('about section loaded');
            getTechs();
        }

        function getTechs() {
            return httpFactory.get( 'tech.json' )
            .then(function( data ) {
                console.log(data);
                vm.techs = data;
            })
        }
    }
})();
