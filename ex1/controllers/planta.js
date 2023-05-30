var Planta = require('../models/planta')

module.exports.list = () => {
    return Planta
    .find({})
    .then((resposta) => {
        return resposta
    })
    .catch((erro) => {
        return erro
    })
}

// Get de um Planta
module.exports.getPlanta = id => {
    return Planta
    .findOne({_id: id})
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

// Adicionar um Planta
module.exports.addPlanta = planta => {
    return Planta
    .create(planta)
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.updatePlanta = planta => {
    return Planta.updateOne({_id:planta._id}, exame)
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.deletePlanta = id => {
    return Planta.deleteOne({_id:id})
            .then(resposta => {
                return resposta
            })
            .catch(erro => {
                return erro
            })
}

module.exports.listaPorEspecie = especie => {
    return Planta
    .find({Especie: especie})
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.listaPorImplantacao = implant => {
    return Planta
    .find({Implantacao: implant})
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.listaFreguesias = () => {
    return Planta
    .distinct("Freguesia")
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.listaEspecies = () => {
    return Planta
    .distinct("Especie")
    .then(resposta => {
        return resposta
    })
    .catch(erro => {
        return erro
    })
}

module.exports.geraID = () => {
    return Planta.count({}, function(err, count) {
        if (err) return -1
        else return count
    })
}
