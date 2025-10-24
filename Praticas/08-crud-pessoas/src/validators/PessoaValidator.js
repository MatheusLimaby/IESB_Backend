const yup = require("yup")

// Esquema de Validação

const pessoaSchema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatório"),
    cpf: yup.string().required("O campo cpf é obrigatório"),
    email: yup.string().email("E-mail Inválido").required("O campo de email é obrigatório"),
    dataNascimento: yup.date("Data inválida").required("O campo DataNascimento é obrigatório"),
    genero: yup.string().required("O campo genero é obrigatório"),



    })


// Middlewares de Validação

async function validarNovaPessoa(req, res, next) {
    try{
        await schemaNovaPessoa.validate(req.body, { abortEarly: false })
        next()

    } catch (error) {
        return res.status(400).json({ errors: error.errors })
        
    }
}

// Exportar o Middleware

module.exports = {

}