const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    autor: {
        type: String,
        required: true
    },
    editora: {
        type: String,
        required: true
    },
    ano: {
        type: Number,
    },
    preco: {   
        type: Number,
        required: true
    },
    //Parametros 
}, { timestamps: true }
); 

        //Modelo
const LivroModel = mongoose.model('Pessoa', Schema);

module.exports = LivroModel;