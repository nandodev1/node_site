const UP = 'CIMA';

var func = function(){
    console.log('Função de teste...');
}

class Pessoa{

    constructor(nome, sobreNome, sexo){
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.sexo = sexo;
    }

    getDados(){
        return this.nome + ' ' + this.sobreNome + ' ' + this.sexo;
    }

}

module.exports = {UP,func,Pessoa};