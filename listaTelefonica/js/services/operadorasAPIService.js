/**
 * Created by Vinicius Silva on 10/05/2017.
 */
angular.module("listaTelefonica").service("operadorasAPI", function ($http, configValue) {
   this.getOperadoras = function () {
       return $http.get(configValue.baseUrl+"/operadoras");
   };

});
