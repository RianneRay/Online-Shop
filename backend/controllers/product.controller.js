import mongoose from 'mongoose';

import Product from '../models/product.model.js';

export const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({success: true, data: products });
  } catch (error) {
    console.log('error getting the product', error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
}

export const createProduct = async (req, res) => {
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
}

export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const products = req.body;
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json({success: false, message: "Product Not Found"});
  }
  
  try {
    const updatedProduct = await Product.findByIdAndUpdate(id,products, {new: true});
    res.status(200).json({success: true, data: updatedProduct});
  } catch (error) {
    console.log('error getting the product', error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
}

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    res.status(400).json({success: false, message: "Product Not Found"});
  }
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({success: true, message: "Product Delete"});
  } catch (error) {
    console.log('error deleting the product', error.message);
    res.status(500).json({success: false, message: "Server Error"});
  }
}
