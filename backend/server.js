import express from 'express';
import { connectDB } from './config/db.js';
import Product from './models/product.model.js'

const app = express();

app.use(express.json());

app.post("/api/products", async (req, res) => {
  const product = req.body;
  
  if(!product.name || !product.price || !product.image){
    return res.status(400).json({success: false, message: "please provide all fields" });
  }
  
  const newProduct = new Product(product)
  ;
  try {
    await newProduct.save();
    res.status(201).json({success: true, data: newProduct});
  } catch (error) {
    console.error("Error in creating product: ", error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
});

app.listen(4000, () => {
  connectDB();
  console.log('server start at http://localhost:4000');
});