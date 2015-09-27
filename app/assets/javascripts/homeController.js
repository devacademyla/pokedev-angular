angular.module("pokedev").controller("HomeController", HomeController);

HomeController.$inject = ["$scope", "$http"];

function HomeController($scope, $http) {

  $http.get("http://rcp-pokedex.herokuapp.com/pokemons.json")
    .success(function (data) {
      $scope.pokemones = data;
    });
}