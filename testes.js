/*
Este arquivo tem o intuito de prover uma interface de testes
  do aplicativo.
  
  Autor: Fernando dos santos gomes
  Data: 19-05-2020
*/

var teste = require('./app_modules/teste_module');

console.log(teste.UP);

var pessoa1 = new teste.Pessoa('Jaine','Araujo','M');

class Profesor extends teste.Pessoa{

  constructor(nome,sobreNome,sexo,materia){
    super(nome,sobreNome,sexo);
    this.materia = materia;
  }

  getDados(){
    return super.getDados() + ' ' + this.materia;
  }

}

var prof1 = new Profesor('Fernando','Gomes', 'M', 'Computação');

console.log(pessoa1.getDados());
console.log(prof1.getDados());

teste.func();

var t1 = function (x,y,next){
  console.log(x + y);
  next(x,y);
}

function t2(x,y){
  console.log(x - y);
};

t1(10,5,t2);

// Testando banco de dados.

var mongo = require('mongodb');
var mongoCliente = mongo.MongoClient;

//mongoCliente.connect('mongodb://localhost:2701')

// Interface

class IrepositorioPessoa{

  get(nome){};
  update(obj){};
  delete(id){};
  add(obj){};

};

class RepositorioPessoa extends IrepositorioPessoa{
 
  constructor(){
    super();
    this.repositorio = new Array(100);
    this.tamanhoRepositorio = 0;
  }
  get(id){
    for (var i in this.rep){
      if (i.nome == id)return i;
    }
  }

  add(obj){
    this.repositorio[this.tamanhoRepositorio] = obj;
    this.tamanhoRepositorio += 1;
  }

};

class Repo extends RepositorioPessoa{
  get(id){super.get(id);}
  add(obj){super.add(obj);}
};

var r1 = new Repo();

r1.add(pessoa1);

var resgate = r1.add('Jaine');

console.log(resgate);