const mongoose = require("mongoose");

const FlashcardSchema = new mongoose.Schema({
    question: { type: String, required: true },
    answer: { type: String, required: true },
    createAt: {type: Date, default: Date.now }
});

const Flashcard = mongoose.model('Flashcard', FlashcardSchema);
module.exports = Flashcard;
