/**
 * Created by Vinicius Silva on 02/05/2017.
 */
angular.module("listaTelefonica").factory("contatosAPI", function ($http,configValue) {
    var _getcontatos = function () {
        return $http.get(configValue.baseUrl+"/contatos");
    };

    var _saveContato = function (contato) {
        return $http.post(configValue.baseUrl+"/contatos",contato);
    };


    var _getEnderecos = function (cep) {
      return $http.get("http://viacep.com.br/ws/" + cep + "/json/");
    };
    return {
        getContatos: _getcontatos,
        saveContato: _saveContato,
        getEnderecos: _getEnderecos
    };
});
