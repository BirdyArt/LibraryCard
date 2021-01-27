import express from 'express';

import { getCards, createCard, updateCard } from '../controllers/cards.js';

const router = express.Router();

router.get('/', getCards);
router.post('/', createCard);
router.patch('/:id', updateCard);

export default router;