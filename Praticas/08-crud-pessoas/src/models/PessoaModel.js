const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
    },
    dataNascimento: {   
        type: Date,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    endereco: {
        cep: String,     
        logradouro: String,
        complemento: String,
        bairro: String,
        numero: String,
        UF: String
    },
    //Parametros 
}, { timestamps: true }
); 

        //Modelo
const PessoaModel = mongoose.model('Pessoa', Schema);

module.exports = PessoaModel;

