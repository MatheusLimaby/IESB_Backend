const express = require('express');
const router = express.Router();

router.use(express.json());
// Variável para guardar lista de contatos
let listaPessoas = [
    {
        id: 1,
        nome: "João Silva",
        cpf: "123.456.789-00",
        email: "joao@gmail.com",
        dataNascimento: "01/01/1990"


    },
    {
        id: 2,
        nome: "Maria Silva",
        cpf: "357.523.325-55",
        email: "maria@gmail.com",
        dataNascimento: "25/05/2006"    
    }
    ];
// CRUD de contatos (Create, Read, Update, Delete)

router.get('/pessoas', (req, res, next) => {
    res.json(listaPessoas);

}
);

router.get('/pessoas/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const pessoa = listaPessoas.find(p => p.id === id);
    if (!pessoa) {
        return res.status(404).json({ message: "Pessoa não encontrada" });
    }
    res.json(pessoa);
}
);

module.exports = router;