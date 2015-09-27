// Crear módulo
angular.module("pokedev", ["templates", "ngRoute"]);

// Usar módulo
angular.module("pokedev").config(pokedevConfig);

pokedevConfig.$inject = ["$routeProvider", "$locationProvider"];

function pokedevConfig($routeProvider, $locationProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'home.html',
      controller: 'HomeController'
    }).
    when('/:pokemon', {
      templateUrl: 'pokemon.html',
      controller: 'PokemonController'
    }).
    otherwise({
      redirectTo: '/'
    });

    $locationProvider.html5Mode(true);
}