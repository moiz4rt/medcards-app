const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Flashcard = require("./api/flashcards");

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true  }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB conectado!'))
    .catch((err) => console.log(err));

app.post('/api/flashcards', async (req, res) => {
    try {
        console.log("Question: " + req.body.question);
        console.log("Answer: " + req.body.answer);
        const { question, answer } = req.body;

        const flashcard = await Flashcard.create({
            question,
            answer
        });

        res.status(201).json(flashcard);
    } catch(err) {
        res.status(400).json( {message: err.message } );
    }
})

app.get("/cards", async (req, res) => {
    const flashcards = await Flashcard.find();
    res.send(flashcards);
    console.log(flashcards);
})

/* app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
}); */

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})
