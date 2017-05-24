/**
 * Created by Vinicius Silva on 02/05/2017.
 */
angular.module("listaTelefonica").controller("listaTelefonicaCTRL", function ($scope, contatosAPI, operadorasAPI, serialGeneratorContato) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [];
    $scope.operadoras = [];
    $scope.contato = {
        data: 671511600000
    };
    $scope.estados = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            angular.forEach(response, function (item) {
                item.serial = serialGeneratorContato.generatorSerial();
            });
            $scope.contatos = response.data;
        });
    };
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        });
    };
    
    var carregarEstados = function () {
        
    }


    $scope.adicionarContato = function (contato) {
        contato.serial = serialGeneratorContato.generatorSerial();
        contato.data = new Date();
        contatosAPI.saveContato(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };


    $scope.removerContatos = function (contatos) {
        $scope.contatos =  contatos.filter(function (contato) {
            if(!contato.selecionado)
                return contato;
        });
    }
    $scope.isContatoSelecionado = function (contatos) {
        return contatos.some(function (contato){
            return contato.selecionado;
        });
    }
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    }
    carregarContatos();
    carregarOperadoras();

});