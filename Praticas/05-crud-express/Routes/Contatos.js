const express = require('express');
const router = express.Router();

// Variável para guardar lista de contatos
let contatos = ["João", "Maria"];

// CRUD de contatos (Create, Read, Update, Delete)

// Listar contatos
router.get('/contatos', (req, res) => {
    res.json(contatos);
});

// Cadastrar o contato

router.post('/contatos', (req, res, next) => {
    const { nome } = req.body;
    if (!nome) {
        return res.status(400).json({ error: "Nome é obrigatório" });
    }
    if (contatos.includes(nome)) {
        return res.status(400).json({ error: "Contato já existe" });
    }
    contatos.push(nome);
    res.status(201).json({ message: "Contato adicionado com sucesso", contatos });
}
);

// Deletar o contato

router.delete('/contatos/:nome', (req, re, next) => {
    const { nome } = req.params;
    contatos = contatos.filter(contato => contato !== nome);
    res.json({ message: "Contato deletado com sucesso", contatos });
    
})

// Deletar todos os contatos

router.delete('/contatos', (req, res, next) => {
    contatos = [];
    res.json({ message: "Todos os contatos foram deletados", contatos });
}
);

// Aqui você pode adicionar POST, PUT, DELETE depois

module.exports = router; // 👈 exporta o router
