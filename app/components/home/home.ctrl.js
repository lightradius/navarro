'use strict';

/**
* @ngdoc function
* @name navarroApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the navarroApp
*/
(function() {
    'use strict';

    angular
        .module('navarroApp')
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['$anchorScroll', '$location', '$rootScope', '$scope', '$state', 'httpFactory'];

    function Controller($anchorScroll, $location, $rootScope, $scope, $state, httpFactory) {

        var vm = this;

        vm.dollars = 0;
        // vm.bounce = bounce;
        vm.type = type;
        // vm.typeMo = typeMo;
        vm.reset = reset;
        vm.dollarClick = dollarClick;
        vm.zero = zero;

        // vm.colorize = colorize;

        vm.scrollTo = function(id) {
            console.log('Scrolling to %s', id);
            $location.hash(id);
            $anchorScroll();
        }

        vm.dollarClick = function() {
            vm.dollars++;
            console.log('Dollars: %s', vm.dollars);
            var elem = $('<span class="typed"></span>');

            $('.typed').remove();
            $('.typed-cursor').remove();
            $('.lead-text').append(elem);
            vm.type( {
                strings: ["Ouch^100!"],
                startDelay: 2000,
                typeSpeed: 40,
                backDelay: 1200,
                backSpeed: 30,
                cursorChar: '_'
            } );
        }

        activate();

        function activate() {
            getStrings();

            var waypoint = new Waypoint({
                element: document.getElementById('home'),
                handler: function(direction) {
                    console.log('at the top');
                    $('.navbar').toggleClass('dark');
                },
                offset: '-1%' // Otherwise never triggered when scrolling back to top
            });
        }


        function getStrings() {
            return httpFactory.get( 'strings.json' )
            .then(function(data) {
                vm.type( {
                    strings: data,
                    startDelay: 2000,
                    typeSpeed: 40,
                    backDelay: 1200,
                    backSpeed: 30,
                    cursorChar: '_'
                } );
            })
        }

        function zero(number) {
            var str = '' + number;
            while (str.length < 3) {
                str = '0' + str;
            }
            return str;
        }

        // function bounce(elem) {
        //     console.log('Bounce.');
        //     var $this = elem;
        //     $this.removeClass('bounce animated');
        //     $this = reset($this);
        //     $this.addClass('bounce animated');
        // }

        // setInterval(function() {
        //     bounce($('#arrow'));
        // }, 8000);

        function colorize(elem) {
            var r = randomize();
            var g = randomize();
            var b = randomize();
            var mix = 256;

            r = (r + mix) / 2;
            g = (g + mix) / 2;
            b = (b + mix) / 2;

            var color = 23;

            $(elem).css('background-color', color);
        }

        function dollarClick() {
            var elem = $('<span class="typed"></span>');

            $('.typed').remove();
            $('.typed-cursor').remove();
            $('.lead-text').append(elem);
            vm.typeMo();
        }

        function randomize() {
            return Math.floor(Math.random() * 257);
        }

        function reset($elem) {
            $elem.before($elem.clone(true));
            var $newElem = $elem.prev();
            $elem.remove();
            return $newElem;
        }

        function type( settings ) {
            $(".typed").typed( settings );
        }
    }
})();
