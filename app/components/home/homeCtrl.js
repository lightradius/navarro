'use strict';

/**
* @ngdoc function
* @name navarroApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the navarroApp
*/
angular.module('navarroApp')
.controller('HomeCtrl', function ($scope) {
  $scope.strings = [
    "lightradius is an independent web development brand, focused on consistency, simplicity and ease of use",
    "specialized in both business and personal landing pages",
    "sleek and simple designs, built using true and tested web frameworks",
    "got an idea for a single page web application? Send us a holler and we can discuss it",
    "thank you for your time!",
    "scroll down for more infromation or click the button below to go to directly to my contacts section.",
    ":)",
    "that's all folks!",
    "...",
    "so... see you later I guess.",
    "*sigh*",
    "seriously, stop reading this, you're just wasting your time.",
    "damn tourists.",
    "if you must know, I absolutely hate the \"Keep Calm\" meme you can see printed on that black mug in the background image.",
    "but this was the best royalty free picture of a laptop I could find on Unsplash...",
    "so, no, those are not my hands and I do not use Brackets.",
    "not that there's anything wrong with it.",
    "...",
    "if you have a Facebook account I will automatically assume you are a moron.",
    "just kidding.",
    "i have to return some videotapes.",
    "go away."
  ];

  $(function(){
    $(".typed").typed({
      strings: $scope.strings,
      typeSpeed: 0
    });
  });
});