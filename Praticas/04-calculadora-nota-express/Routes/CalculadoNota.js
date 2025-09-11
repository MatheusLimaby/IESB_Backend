const express = require('express');
// Rota para calcular a nota
const router = express.Router();
// Mapeamento da rota

router.get('/notaA1', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({error: "Parâmetros inválidos"})
    }
    const notaA1 = (exercicio + trabalho + prova)
    res.json({ notaA1 })

})

router.get('/notaA2', (req, res, next) => {
    const exercicio = parseFloat(req.query.exercicio)
    const trabalho = parseFloat(req.query.trabalho)
    const prova = parseFloat(req.query.prova)

    if(isNaN(exercicio) || isNaN(trabalho) || isNaN(prova)){
        return res.status(400).json({error: "Parâmetros inválidos"})
    }
    const notaA2 = (exercicio + trabalho + prova)
    res.json({ notaA2 })

})

router.get("/mediaFinal", (req, res, next) => {
    const notaA1 = parseFloat(req.query.notaA1)
    const notaA2 = parseFloat(req.query.notaA2)

    if(isNaN(notaA1) || isNaN(notaA2)){
        return res.status(400).json({error: "Parâmetros inválidos"})
    }

    if (notaA1 < 0 || notaA1 > 10 || notaA2 < 0 || notaA2 > 10) {
        return res.status(400).json({ error: "Valores fora do intervalo permitido" })
    }

    const mediaFinal = (notaA1 + notaA2) / 2
    res.json({ mediaFinal })
})

    

module.exports = router;