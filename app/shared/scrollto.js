'use strict';

angular
    .module( 'navarroApp' )
    .directive( 'scrollTo', directive );

function directive() {
    var directive = {
        restrict: 'A',
        link: linkFunc
    };

    return directive;

    function linkFunc( scope, el ) {
        el.on( 'click', function() {
            $( 'body' ).animate( { scrollTop: el.offset().top } , 'slow' );
        });
    }
}
