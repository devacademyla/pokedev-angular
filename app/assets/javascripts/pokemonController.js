angular.module("pokedev").controller("PokemonController", PokemonController);

PokemonController.$inject = ['$scope', '$routeParams', '$http'];

function PokemonController($scope, $routeParams, $http) {
  var nombrePokemon = $routeParams.pokemon;
  $http.get("https://rcp-pokedex.herokuapp.com/pokemons/" + nombrePokemon + ".json")
    .success(function (data) {
      $scope.pokemon = data;
    });
  // $scope.pokemon = {
  //     id: "001",
  //     nombre: "Bulbasaur",
  //     descripcion: "A Bulbasaur es fácil verle echándose una siesta al sol. La semilla que tiene en el lomo va creciendo cada vez más a medida que absorbe los rayos del sol.",
  //     peso: 6.9,
  //     altura: 0.7,
  //     tipos: ["Planta", "Veneno"],
  //     debilidades: ["Fuego", "Volador", "Hielo", "Psíquico"],
  //     evoluciones: [
  //       {id: "002", nombre: "Ivysaur"},
  //       {id: "003", nombre: "Venasaur"}
  //     ]
  //   }
}