import dotenv from 'dotenv';

import express from 'express';
import cors from 'cors';

import { connectToDatabase } from './database.js';

import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js'

dotenv.config();
connectToDatabase();

const app = express();

app.use(cors());

app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.json({ data: "Hello" })
})

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});

export default app;
