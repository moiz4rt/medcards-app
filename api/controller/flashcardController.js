const Flashcard = require('../model/Flashcard');

const getFlashcards = async (req, res) => {
    try {
        const flashcards = await Flashcard.find();
        res.status(200).render('getFlashcards', { flashcards });
    } catch(err) {
        res.status(500).json({ message: err.message })
    }
};

const createFlashcard = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const flashcard = await Flashcard.create({
            question,
            answer
        });
        res.status(201).json(flashcard);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
};

const getFlashcardById = async (req, res) => {
    try {
        const flashcard = await Flashcard.findById(req.params.id);
        if(!flashcard)
        {
            return res.status(404).json({
                message: "Flashcard não encontrado!"
            })
        }
        res.status(200).json(flashcard);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

const updateFlashcard = async (req, res) => {
    try {
        const { question, answer } = req.body;
        const flashcard = await Flashcard.findByIdAndUpdate(
            req.params.id,
            { question, answer },
            { new: true, runValidators: true }
        );
        if(!flashcard) {
            return res.status(404).json({ message: "Flashcard não encontrado" });
        }
        res.status(200).json(flashcard);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteFlashcard = async (req, res) => {
    try {
        const flashcard = await Flashcard.findByIdAndDelete(req.params.id);
        if(!flashcard) {
            return res.status(404).json({ message: "Flashcard não encontrado" });
        }
        res.status(200).json("Flashcard deletado");
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getFlashcards,
    createFlashcard,
    getFlashcardById,
    updateFlashcard,
    deleteFlashcard
}
