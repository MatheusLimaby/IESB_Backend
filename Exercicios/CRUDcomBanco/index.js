const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();
app.use(express.json());

// Conectar ao banco Mongo
const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;

const url = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(url)
  .then(() => {
    console.log("Conectado ao MongoDB");
  })
  .catch(err => {
    console.error("Erro ao conectar no banco MongoDB:", err);
  });

// Model
const LivroModel = mongoose.model('Livros', new mongoose.Schema({
  titulo: { type: String, required: true },
  autor: String,
  editora: String,
  ano: Number,
  preco: Number
}));

// Create
app.post('/livros', async (req, res) => {
  const livro = req.body;
  if (!livro.titulo) {
    return res.status(400).json({ erro: "O campo 'titulo' é obrigatório!" });
  }
  try {
    const livroCriado = await LivroModel.create(livro);
    res.status(201).json(livroCriado);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao criar livro", detalhes: err.message });
  }
});

// Read
app.get('/livros', async (req, res) => {
  try {
    const livros = await LivroModel.find();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao buscar livros", detalhes: err.message });
  }
});

// Update
app.put('/livros/:id', async (req, res) => {
  const id = req.params.id;
  const livro = req.body;

  if (!livro.titulo || !livro.autor || !livro.editora || !livro.ano || !livro.preco) {
    return res.status(400).json({ erro: "Todos os campos são obrigatórios: titulo, autor, editora, ano, preco" });
  }

  try {
    const livroAtualizado = await LivroModel.findByIdAndUpdate(id, livro, { new: true });

    if (!livroAtualizado) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    res.json(livroAtualizado);
  } catch (err) {
    res.status(500).json({ erro: "Erro ao atualizar livro", detalhes: err.message });
  }
});

// Delete
app.delete('/livros/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const livroDeletado = await LivroModel.findByIdAndDelete(id);

    if (!livroDeletado) {
      return res.status(404).json({ erro: "Livro não encontrado!" });
    }

    res.json({ mensagem: "Livro excluído com sucesso!" });
  } catch (err) {
    res.status(500).json({ erro: "Erro ao excluir livro", detalhes: err.message });
  }
});

// Start
app.listen(3000, () => {
  console.log("Aplicação rodando em http://localhost:3000");
});
