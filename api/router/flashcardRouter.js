const express = require('express');
const router = express.Router();
const {
    getFlashcards,
    createFlashcard,
    getFlashcardById,
    updateFlashcard,
    deleteFlashcard
} = require('../controller/flashcardController');

router.get('/', getFlashcards);
router.post('/', createFlashcard);
router.get('/:id', getFlashcardById);
router.put('/:id', updateFlashcard);
router.delete('/:id', deleteFlashcard);

module.exports = router;
