const yup = require("yup")

// Esquema de Validação

const pessoaSchema = yup.object().shape({
    titulo: yup.string().required("O campo título é obrigatório"),
    autor: yup.string().required("O campo autor é obrigatório"),
    editora: yup.string().required("O campo de editora é obrigatório"),
    ano: yup.number().required("O campo ano é obrigatório"),
    preco: yup.number().required("O campo preço é obrigatório"),



    })


// Middlewares de Validação

async function validarNovoLivro(req, res, next) {
    try{
        await schemaNovoLivro.validate(req.body, { abortEarly: false })
        next()

    } catch (error) {
        return res.status(400).json({ errors: error.errors })
        
    }
}

// Exportar o Middleware

module.exports = {

}