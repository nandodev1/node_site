var express = require('express');
var router = express.Router();

router.get('/',function (requisicao, resposta){
    resposta.send('Wiki home.');
});

router.get('/sobre',function(requisicao,resposta){
    resposta.send('Sobre a Wiki.')
});

module.exports = router;