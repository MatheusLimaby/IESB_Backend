
const mongoose = require('mongoose');
const express = require("express")
const dotevn = require("dotenv")


const app = express()

// Conectar ao MongoDB
mongoose.connect("mongodb+srv://matheuslima:sZyQne0PxvBSXgl6@cluster1.ovuev0g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
.then(() => {
    console.log("Conectado ao MongoDB")
    app.listen(3000)
}).catch((err) => console.log(err))


