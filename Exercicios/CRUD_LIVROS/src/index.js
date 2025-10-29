const express = require("express")
const app = express()
// Conectar ao MongoDB  
const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_NAME = process.env.DB_NAME

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster1`

mongoose.connect(url)
.then(() => {
    console.log("Conectado ao MongoDB")

}).catch((err) => console.log(err))

//controladores e rotas

const LivroController = require("./controllers/LivroController")
app.use(express.json())

app.use(LivroController)


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
}
)