/*
Este arquivo tem o intuito de prover uma interface de testes
  do aplicativo.
  
  Autor: Fernando dos santos gomes
  Data: 19-05-2020
*/

var teste = require('./app_modules/teste_module');

console.log(teste.UP);

var pessoa1 = new teste.Pessoa('Jaine','Araujo','M');

console.log(pessoa1.getDados());

teste.func();