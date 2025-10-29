const express = require("express")
const router = express.Router()
const LivroModel = require("../models/Livros")

// Rotas do CRUD

//CREATE

router.post("/livros", async (req, res, next) => 
    {
        const Livro = req.body
        const LivroCadastrada = await LivroModel.create(Livro)
        res.status(201).json(LivroCadastrada)
})

router.get("/livros", async (req, res, next) =>
{
    const livros = await LivroModel.find()
    res.status(200).json(livros)
})
router.get("/livros/:id", async (req, res, next) =>
{
    const id = req.params.id
    const LivroEncontrado = await LivroModel.findById(id)
    if(!LivroEncontrado)
    {
        res.status(404).json({message: "Livro não encontrado"})
        return
    }
    res.status(200).json(LivroEncontrado)
})

router.put("/livros/:id", async (req, res, next) =>
{
    const id = req.params.id
    const novoDados = req.body
    const LivroAtualizada = await LivroModel.findByIdAndUpdate(id, novoDados, {new: true})
    if(!LivroAtualizada)
    {
        res.status(404).json({message: "Livro não encontrado"})
        return
    }
    res.status(200).json(LivroAtualizada)

})

router.delete("/livros/:id", async (req, res, next) => {
    const id = req.params.id
    const LivroDeletada = await LivroModel.findByIdAndDelete(id)
    res.status(204).send()
    })
//

module.exports = router