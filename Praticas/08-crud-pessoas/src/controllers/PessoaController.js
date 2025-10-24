const express = require("express")
const router = express.Router()
const PessoaModel = require("../models/PessoaModel")

// Rotas do CRUD

//CREATE

router.post("/pessoas", async (req, res, next) => 
    {
        const pessoa = req.body
        const pessoaCadastrada = await PessoaModel.create(pessoa)
        res.status(201).json(pessoaCadastrada)
})

router.get("/pessoas", async (req, res, next) =>
{
    const pessoas = await PessoaModel.find()
    res.status(200).json(pessoas)
})
router.get("/pessoas/:id", async (req, res, next) =>
{
    const id = req.params.id
    const pessoaEncontrada = await PessoaModel.findById(id)
    if(!pessoaEncontrada)
    {
        res.status(404).json({message: "Pessoa não encontrada"})
        return
    }
    res.status(200).json(pessoaEncontrada)
})

router.put("/pessoas/:id", async (req, res, next) =>
{
    const id = req.params.id
    const novoDados = req.body
    const pessoaAtualizada = await PessoaModel.findByIdAndUpdate(id, novoDados, {new: true})
    if(!pessoaAtualizada)
    {
        res.status(404).json({message: "Pessoa não encontrada"})
        return
    }
    res.status(200).json(pessoaAtualizada)

})

router.delete("/pessoas/:id", async (req, res, next) => {
    const id = req.params.id
    const pessoaDeletada = await PessoaModel.findByIdAndDelete(id)
    res.status(204).send()
    })
//

module.exports = router