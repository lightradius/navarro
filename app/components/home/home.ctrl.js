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

        vm.strings = [
            // "lightradius is an independent web development brand, focused on consistency, simplicity and ease of use",
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
            console.log("Scrolling to %s", id);
            $location.hash(id);
            $anchorScroll();
        }

        activate();

        function activate() {

            $(".typed").typed({
                strings: vm.strings,
                typeSpeed: 0
            });

            var waypoint = new Waypoint({
                element: document.getElementById('lead'),
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

            function bounce(elem) {
                console.log('Bounce.');
                var $this = elem;
                $this.removeClass("bounce animated");
                $this = reset($this);
                $this.addClass("bounce animated");
            }

            setInterval(function() {
                bounce($('#arrow'));
            }, 3000);
        }
    }
})();
