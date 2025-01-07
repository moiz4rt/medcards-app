const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const flashcardRouter = require('./api/router/flashcardRouter');

dotenv.config();

// App do Express iniciado
const app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'api/views'));
app.use(express.urlencoded({ extended: true  }));
app.use(express.static(path.join(__dirname, 'public')));

// Conexão com o MongoDB
mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado!'))
    .catch((err) => console.log(err));

// Rotas
app.use('/api/flashcards', flashcardRouter);

// Inicialização do Servidor
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
