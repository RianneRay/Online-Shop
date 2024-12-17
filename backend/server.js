import express from 'express';
import { connectDB } from './config/db.js';
import productRoutes from './routes/product.route.js';

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 4000

app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log('server start at http://localhost:',PORT);
});
