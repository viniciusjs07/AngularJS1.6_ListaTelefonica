/**
 * Created by Vinicius Silva on 02/05/2017.
 */
//Diferenca entre Factory function e Constructor function

//criando por meio direto
var pedro = {
    nome:"pedro",
    idade: 16
}
console.log(pedro);

//Factory Function
var criaPessoa = function (nome, idade) {
    return {
        nome: nome,
        idade: idade
    }

}
var maria = criaPessoa("maria",20);
console.log(maria);

// Constructor Function
var Pessoa = function (nome, idade) {
    this.nome = nome;
    this.idade = idade;
}

var vinicius = new Pessoa("Vinicius", 26);
console.log(vinicius);

// ou posso criar sem o new.
var anne = {};
Pessoa.call(anne,"Anne",25);
console.log(anne);