(function() {
    'use strict';

    angular
        .module('navarroApp')
        .controller('HomeCtrl', Controller);

    Controller.$inject = ['$anchorScroll', '$location', '$rootScope', '$scope', '$state', 'httpFactory'];

    function Controller($anchorScroll, $location, $rootScope, $scope, $state, httpFactory) {

        var vm = this;

        var idleTime = 0;

        function timerIncrement() {
            idleTime = idleTime + 1;
            if (idleTime > 60 * 5) { // 5 minutes
                console.log('still there?');
            }
        }

        vm.dollars = 0;
        // vm.bounce = bounce;
        vm.type = type;
        // vm.typeMo = typeMo;
        vm.reset = reset;
        vm.dollarClick = dollarClick;
        vm.zero = zero;
        vm.remove = remove;

        // vm.colorize = colorize;

        vm.scrollTo = function( id ) {
            // console.log('scroll called');

            // if  ( $(window).scrollTop() + 1 >= $(document).height() - $(window).height()){
            //     console.log('Scrolling to %s', id);
            //     $location.hash(id);
            //     $anchorScroll();
            // }
        }

        vm.dollarClick = function() {
            vm.dollars++;
            console.log('Dollars: %s', vm.dollars);
            var elem = $('<span class="typed"></span>');
            let strings;

            $('.typed').remove();
            $('.typed-cursor').remove();
            $('.lead-text').append(elem);

            let rand = Math.random();

            if (rand < 0.02) {
                strings = ["Stop poking me^100!"]
            } else if ( rand < 0.1 ) {
                strings = ["Stop it!"]
            } else if ( rand < 0.2 ) {
                strings = ["Stop!"]
            } else if ( rand < 0.3 ) {
                strings = ["No!"]
            } else if ( rand < 0.5 ) {
                strings = ["Ow!"]
            } else {
                strings = ["Ouch!"];
            }

            vm.type( {
                strings: strings,
                startDelay: 0,
                typeSpeed: 0,
                backDelay: 1200,
                backSpeed: 30,
                cursorChar: '_'
            } );
        }

        activate();

        function activate() {
            getStrings();

            //Increment the idle time counter every second.
            var idleInterval = setInterval(timerIncrement, 1000); // 1 second

            //Zero the idle timer on mouse movement.
            $(document).mousemove(function (e) {
                idleTime = 0;
            });
            $(document).keypress(function (e) {
                idleTime = 0;
            });

            var waypoint = new Waypoint({
                element: document.getElementById('home'),
                handler: function( direction ) {
                    if ( direction === 'up' ) {
                        $('.navbar').removeClass('dark');
                    } else {
                        $('.navbar').addClass('dark');
                    }
                    console.log( direction );
                },
                offset: '-1%' // Otherwise never triggered when scrolling back to top
            });
        }

        function remove() {
            $('#achievement').fadeOut();
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
