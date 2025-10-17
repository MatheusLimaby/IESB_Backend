const express = require('express')
const cors = require('cors')
//cria uma instância do express
const app = express()



//Middlewares (intermediários)
app.use(cors())


app.use(express.json())



//roteadores
const pessoasRouter = require('./Routes/Pessoas')
app.use(pessoasRouter)



//executar a aplicação

app.listen(3000, () => {
    console.log("Aplicação rodando em http://localhost:3000")
    })