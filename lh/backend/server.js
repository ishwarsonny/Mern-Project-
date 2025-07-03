import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url'; // Fix "__dirname not defined" in ES modules
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import ContactRouter from './routes/contactRouter.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Fix "__dirname is not defined" in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Connect to DB and Cloudinary
connectDB();
//connectCloudinary();

// Middleware
app.use(express.json()); //  Ensure JSON body parsing
app.use(express.urlencoded({ extended: true })); // Parse form-data fields
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads'))); // Serve static files


// API Endpoints
app.use('/api/user', userRouter);
app.use('/api/user/product', productRouter); // Ensure correct product route
app.use('/api/user/contact', ContactRouter);


// Health Check
app.get('/', (req, res) => {
    res.send("API is working");
});

// Start Server
app.listen(port, () => console.log(` Server running on port: ${port}`));


