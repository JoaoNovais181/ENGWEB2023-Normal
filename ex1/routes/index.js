var express = require('express');
var router = express.Router();
var Planta = require('../controllers/planta')

/* GET home page. */
router.get('/plantas', function(req, res, next) {
    var especie = req.query.especie
    var implant = req.query.implant
    if (especie)
    {
        Planta.listaPorEspecie(especie)
        .then(lista => res.jsonp(lista))
        .catch(erro => res.jsonp(erro))
    }
    else if (implant)
    {
        Planta.listaPorImplantacao(implant)
        .then(lista => res.jsonp(lista))
        .catch(erro => res.jsonp(erro))
    }
    else
    {
        Planta.list()
        .then(lista => res.jsonp(lista))
        .catch(erro => res.jsonp(erro))
    }
});

router.get('/plantas/freguesias', function(req, res, next) {
    Planta.listaFreguesias()
    .then(lista => res.jsonp(lista))
    .catch(erro => res.jsonp(erro))
});

router.get('/plantas/especies', function(req, res, next) {
    Planta.listaEspecies()
    .then(lista => res.jsonp(lista))
    .catch(erro => res.jsonp(erro))
});

router.get('/plantas/:id', function(req, res, next) {
    Planta.getPlanta(req.params.id)
    .then(planta => res.jsonp(planta))
    .catch(erro  => res.jsonp(erro))
}); 


// POST de uma planta
router.post('/plantas', function(req, res, next) {
    var planta = req.body
    if (!('_id' in planta))
        planta._id = Planta.geraId()
    Planta.addPlanta(planta)
    .then(resp  => res.jsonp(resp))
    .catch(erro => res.jsonp(erro))
});

// DELETE planta
router.delete('/plantas/:id', function(req, res, next) {
    Planta.deletePlanta(req.params.id)
    .then(resp  => res.jsonp(resp))
    .catch(erro => res.jsonp(erro))
});

module.exports = router;
