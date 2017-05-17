/**
 * Created by Vinicius Silva on 10/05/2017.
 *  a funcao por exemplo tem que ser o nome do provider criado em serialGeneratorService que é serialGeneratorContato + o nome Provider no final.
 *  serialGeneratorContatoProvider
 */

angular.module("listaTelefonica").config(function (serialGeneratorContatoProvider) {
    serialGeneratorContatoProvider.setLength(20);

});