/**
 * Created by Vinicius Silva on 02/05/2017.
 */
angular.module("listaTelefonica").controller("listaTelefonicaCTRL", function ($scope, contatosAPI, operadorasAPI, estadosAPI, serialGeneratorContato) {
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
        operadorasAPI.getOperadoras().then(function sucess(response) {
            $scope.operadoras = response.data;
        },function error(error) {
            console.log("responseee");
            var message = "Não foi possível carregar a lista de contatos. Verifique a conexao com o servidor!";
            console.log(message);
           $scope.error = message;
        });
    };
    
    var carregarEstados = function () {
      estadosAPI.getEstados().then(function (response) {
         $scope.estados = response.data;
      });
    };


    $scope.adicionarContato = function (contato) {
        contato.serial = serialGeneratorContato.generatorSerial();
        contato.data = new Date();
        console.log( "contato");
        console.log( contato);

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

    var carregarEnderecos = function() {
        contatosAPI.getEnderecos(58700010).then(function (response) {
            console.log(response);
        });
    }
    carregarContatos();
    carregarOperadoras();
    carregarEstados();
    carregarEnderecos();

});