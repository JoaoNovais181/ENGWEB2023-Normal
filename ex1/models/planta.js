const mongoose = require('mongoose')

var plantaSchema = new mongoose.Schema({
    _id: Number,
    nr_Registo: Number,
    cod_rua: Number,
    Rua: String,
    Local: String,
    Freguesia: String,
    Especie: String,
    Nome_Cientifico: String,
    Origem: String,
    Data_plantacao: String,
    Estado: String,
    Caldeira: String,
    Tutor: String,
    Implantacao: String,
    Gestor: String,
    Data_atualizacao: String,
    Nr_intervencoes: Number

});

module.exports = mongoose.model('planta', plantaSchema)
