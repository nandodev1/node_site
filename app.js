var express = require('express');
var wiki = require('./wiki')

var app = express();



app.get('/',function(requisicao,resposta){
    resposta.send('Main pag.');   
});

app.all('/secreto',(requisicao, resposta) => {
    console.log('Acessando sessão secreta.');
});

app.use('/wiki',wiki);

app.use('/fotos',express.static('public'));

app.listen(8000,function(){
    console.log('Servidor executando em http://127.0.0.1:8000');
});