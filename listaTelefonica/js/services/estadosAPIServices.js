angular.module("listaTelefonica").service("estadosAPI", function ($http, configValue) {
   this.getEstados = function () {
       return $http.get(configValue.baseUrl+"/estados");
   }
});
