import Card from '../models/card.model.js';

export const createCard = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description)
      return res.status(400).json({ message: 'please fill all fields' });

    const isCardExist = await Card.findOne({ title });

    if (isCardExist)
      return res.status(400).json({ message: 'card already exist' });

    const card = await Card.create({ title, description });

    res.status(201).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getSingleCard = async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });

    if (!card) return res.status(404).json({ message: 'Card not found' });

    res.status(200).json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
