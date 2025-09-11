// importar o express
const express = require('express')
// criar um router(Roteador)
const router = express.Router()


router.get('/somar', (req, res) => {
    // Number() converte string para número
    const numA = Number(req.query.numA);
    const numB = Number(req.query.numB);
    // implementação da soma...

    soma = (numA + numB)
    res.json({ resultado: soma });
    });

router.get('/subtrair', (req, res) => {
        // Number() converte string para número
        const numA = Number(req.query.numA);
        const numB = Number(req.query.numB);
        // implementação da soma...
    
        subtracao = (numA - numB)
        res.json({ resultado: subtracao });
        });
        
router.get('/multiplicar', (req, res) => {
        // Number() converte string para número
        const numA = Number(req.query.numA);
        const numB = Number(req.query.numB);
        // implementação da soma...
    
        multiplicar = (numA * numB)
        res.json({ resultado: multiplicar });
        });
router.get('/dividir', (req, res) => {
        // Number() converte string para número
        const numA = Number(req.query.numA);
        const numB = Number(req.query.numB);
        // implementação da soma...
        
        dividir = (numA / numB)
        res.json({ resultado: dividir });
            });

router.get('/aoQuadrado', (req, res) => {
        // Number() converte string para número
        const numA = Number(req.query.numA);
        
        aoquadrado = (Math.pow(numA,2))
        res.json({ resultado: aoquadrado });
        });

router.get('/raizQuadrada', (req, res) => {
        // Number() converte string para número
        const numA = Number(req.query.numA);
        raizQuadrada = (Math.sqrt(numA))
        res.json({ resultado: raizQuadrada });
            });

        

module.exports = router