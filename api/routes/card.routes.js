import express from 'express';
import {
  createCard,
  getAllCards,
  getSingleCard,
} from '../controllers/card.ct.js';

const router = express.Router();

router.post('/', createCard);

router.get('/', getAllCards);

router.get('/:title', getSingleCard);

export default router;
