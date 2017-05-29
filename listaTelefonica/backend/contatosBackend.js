var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

var contatos = [
	{serial : "F'1AK3FCVWDBJB(S.C*d",nome: "Bruno da Silva", telefone: "9999-2222", data: new Date(), operadora: {nome: "Oi", codigo: 14, categoria: "Celular"}, cidade:{nome:"Campina Grande",estado:{nome:"PB"},cep:"55555-858"}},
	{serial : "F@1AGSFCVWDBJB(S.C*$",nome: "SANDRA da MARIA de Souza correia", telefone: "9999-3333", data: new Date(), operadora: {nome: "Vivo", codigo: 15, categoria: "Celular"},cidade:{nome:"Recife",estado:{nome:"PE"},cep:"55544-000"}},
	{serial : "F+1AK3FCV#2BJB(S.C%&",nome: "vinicius da silva", telefone: "9999-9999", data: new Date(), operadora: {nome: "Tim", codigo: 41, categoria: "Celular"},cidade:{nome:"Fortaleza",estado:{nome:"CE"},cep:"55231-777"}}
];
var operadoras = [
	{nome: "Oi", codigo: 14, categoria: "Celular", preco: 2},
	{nome: "Vivo", codigo: 15, categoria: "Celular", preco: 1},
	{nome: "Tim", codigo: 41, categoria: "Celular", preco: 3},
	{nome: "GVT", codigo: 25, categoria: "Fixo", preco: 1},
	{nome: "Embratel", codigo: 21, categoria: "Fixo", preco: 2}
];
var estados = [{nome:"AC"},{nome:"AL"},{nome:"AP"},{nome:"AM"},{nome:"BA"},{nome:"CE"},{nome:"DF"},{nome:"ES"},{nome:"GO"},{nome:"MA"},{nome:"MT"}
    ,{nome:"MS"},{nome:"MG"},{nome:"PA"},{nome:"PB"},{nome:"PR"},{nome:"PE"},{nome:"PI"}];

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/contatos', function(req, res) {
  res.json(contatos);
});

app.post('/contatos', function(req, res) {
  contatos.push(req.body);
  res.json(true);
});



app.get('/operadoras', function(req, res) {
  res.json(operadoras);
});

app.get('/estados', function (req,res) {
   res.json(estados);
});
