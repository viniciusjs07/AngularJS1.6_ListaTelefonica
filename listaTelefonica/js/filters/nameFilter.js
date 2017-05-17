angular.module("listaTelefonica").filter("name", function () {
    /*
    Funcao que formata a primeira letra do nome maiuscula"
     */
    return function (input) {
        var listaDeNomes = input.split(" ");
        var listaDeNomesFormatada = listaDeNomes.map(function (nome) {
            if(/(da|de)/.test(nome))
                return nome;
           return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
        });
        console.log(listaDeNomesFormatada);
        return listaDeNomesFormatada.join(" ");
    }
})
