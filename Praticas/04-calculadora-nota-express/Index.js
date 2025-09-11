const express = require('express');
// Crio uma instância do express
const app = express()

const cors = require('cors')
// Middleware
//Intermediário de log

app.use(cors())
app.use((req,res,next) => {
    console.log("-----------------####------------------")
    console.log("Tempo: ", new Date().toLocaleString())
    console.log("Metodo: ", req.method)
    console.log("Rota: ", req.url)
    next()
})

app.get('/nome', (req, res, next) => {
    const primeiroNome = req.query.primeiroNome
    const sobreNome = req.query.sobreNome
    res.send(`Olá ${primeiroNome} ${sobreNome}`)
})

const calculadoraNotaRouter = require('./Routes/CalculadoNota')
app.use('/calculadora', calculadoraNotaRouter)
//Exportar a aplicação
app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
})