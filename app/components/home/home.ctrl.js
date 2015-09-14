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

    Controller.$inject = ['$anchorScroll', '$location', '$rootScope', '$scope', '$state'];

    function Controller($anchorScroll, $location, $rootScope, $scope, $state) {
        var vm = this;

        // vm.colorize = colorize;

        vm.strings = [
            "Hello world^300!",
            "Here be web dev"
            // "specialized in both business and personal landing pages",
            // "sleek and simple designs, built using true and tested web frameworks",
            // "got an idea for a single page web application? Send us a holler and we can discuss it",
            // "thank you for your time!",
            // "scroll down for more infromation or click the button below to go to directly to my contacts section.",
            // ":)",
            // "that's all folks!",
            // "...",
            // "so... see you later I guess.",
            // "*sigh*",
            // "seriously, stop reading this, you're just wasting your time.",
            // "damn tourists.",
            // "if you must know, I absolutely hate the \"Keep Calm\" meme you can see printed on that black mug in the background image.",
            // "but this was the best royalty free picture of a laptop I could find on Unsplash...",
            // "so, no, those are not my hands and I do not use Brackets.",
            // "not that there's anything wrong with it.",
            // "...",
            // "if you have a Facebook account I will automatically assume you are a moron.",
            // "just kidding.",
            // "i have to return some videotapes.",
            // "go away."
        ];

        vm.scrollTo = function(id) {
            console.log('Scrolling to %s', id);
            $location.hash(id);
            $anchorScroll();
        }

        vm.dollarClick = function() {

        }

        activate();

        function activate() {

            $(".typed").typed({
                strings: vm.strings,
                startDelay: 800,
                typeSpeed: 100,
                backDelay: 1200,
                backSpeed: 80,
                cursorChar: '_'
            });

            $('#dollar').on('click', function() {
                $('.achievement').addClass('animated');
            });

            var waypoint = new Waypoint({
                element: document.getElementById('home'),
                handler: function(direction) {
                    console.log('at the top');
                    $('.navbar').toggleClass('dark');
                },
                offset: '-1%' // Otherwise never triggered when scrolling back to top
            });

            function reset($elem) {
                $elem.before($elem.clone(true));
                var $newElem = $elem.prev();
                $elem.remove();
                return $newElem;
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
            // }, 6000);
        }

        // function colorize(elem) {
        //     var r = randomize();
        //     var g = randomize();
        //     var b = randomize();
        //     var mix = 256;
        //
        //     r = (r + mix) / 2;
        //     g = (g + mix) / 2;
        //     b = (b + mix) / 2;
        //
        //     var color = 23;
        //
        //     $(elem).css('background-color', );
        // }

        function randomize() {
            return Math.floor(Math.random() * 257);
        }
    }
})();
