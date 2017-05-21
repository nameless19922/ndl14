angular
    .module('PokemonApp')
    .factory('BerriesService', function($resource, $http) {
        return $resource('http://pokeapi.co/api/v2/berry', {}, {
            query: {
                method: 'GET',
                isArray: true,
                headers: {
                    'application-id': undefined,
                    'secret-key': undefined
                },
                transformResponse: function(responseData) {
                    return angular.fromJson(responseData).results;
                }
            }
        })
    });
