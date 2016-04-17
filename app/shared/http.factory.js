(function() {
    'use strict';

    angular
        .module('navarroApp')
        .factory('httpFactory', factory);

    factory.$inject = ['$http', 'ASSETS'];

    /* @ngInject */
    function factory( $http, ASSETS ) {

        var service = {
            get: get
        };

        return service;

        function get( what ) {
            return $http.get( ASSETS.url + what )
                .then( httpGetComplete )
                .catch( httpGetFailed ) ;

            function httpGetComplete( response ) {
                console.log( response );
                return response.data.results;
            }

            function httpGetFailed( error ) {
                logger.error( 'XHR Failed for httpGet ' + what + '. ' + error.data );
            }
        }
    }
})();
