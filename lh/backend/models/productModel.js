import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: [String], required: true },
  category: { type: String, required: true },
  //subcategory: { type: String, required: true },
  //bestseller: { type: Boolean, default: false },
  
});
const ProductModel = mongoose.model("Product", productSchema);
export default ProductModel;