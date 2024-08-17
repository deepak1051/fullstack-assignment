import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cardRoutes from './routes/card.routes.js';

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('connected to db'))
  .catch((err) => console.log(`Error connection to DB`, err.message));

const app = express();

app.use(express.json());

app.use(cors());

app.get('/ping', (req, res) => {
  res.send('Server is running!');
});

app.use('/cards', cardRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
