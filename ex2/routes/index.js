var express = require('express');
var router = express.Router();
var axios = require('axios')
var env = require('../config/env')

var especies = null

/* GET home page. */
router.get('/', function(req, res, next) {
    axios.get(env.apiAccessPoint + "plantas/especies")
    .then(listaEspecies => {
        especies = listaEspecies.data
        axios.get(env.apiAccessPoint + "plantas")
        .then(lista => {
            res.render('index', {plantas: lista.data, especies: especies})
        })
        .catch(erro => res.render('error', {error: erro}))
    })
    .catch(erro => res.render('error', {error: erro}))
});

router.get('/especies/:id', function(req, res, next) { 
    if (especies === null)
    {
        axios.get(env.apiAccessPoint + "plantas/especies")
        .then(listaEspecies => {
            especies = listaEspecies.data
            axios.get(env.apiAccessPoint + "plantas?especie=" + especies[req.params.id])
            .then(plantas => {
                res.render('pagEspecie', {especie: especies[req.params.id], especies: especies, plantas: plantas.data})
            })
            .catch(erro => {
                res.render('error', {error: erro})
            })
        })
        .catch(erro => res.render('error', {error: erro}))
    }
    else
    {
        axios.get(env.apiAccessPoint + "plantas?especie=" + especies[req.params.id])
        .then(plantas => {
            res.render('pagEspecie', {especie: especies[req.params.id], especies: especies, plantas: plantas.data})
        })
        .catch(erro => {
            res.render('error', {error: erro})
        })
    }
});

router.get('/:id', function(req, res, next) {
    axios.get(env.apiAccessPoint + "plantas/" + req.params.id)
    .then(planta => {
        res.render('planta', {p: planta.data})
    })
});

module.exports = router;
