import express from "express";
import multer from "multer";
import path from "path";
import mongoose from "mongoose";
import ProductModel from "../models/productModel.js";
import connectCloudinary from "../config/cloudinary.js";

const router = express.Router();

// Initialize multer for memory storage
const upload = multer({
    storage: multer.memoryStorage(),
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (mimetype && extname) {
            return cb(null, true);
        } else {
            return cb(new Error("Only image files are allowed"), false);
        }
    }
});

// Helper function to upload to Cloudinary
const uploadToCloudinary = (fileBuffer) => {
    return new Promise((resolve, reject) => {
        const uploadStream = connectCloudinary.uploader.upload_stream(
            { resource_type: "auto" },
            (error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result.secure_url);
                }
            }
        );
        uploadStream.end(fileBuffer);
    });
};

// Helper function to delete images from Cloudinary
const deleteFromCloudinary = async (imageUrls) => {
    try {
        await Promise.all(
            imageUrls.map(async (url) => {
                const publicId = url.split('/').pop().split('.')[0];
                await connectCloudinary.uploader.destroy(publicId);
            })
        );
    } catch (error) {
        console.error("Cloudinary deletion error:", error);
        throw new Error("Failed to delete images from Cloudinary");
    }
};

router.post("/add", upload.array("image", 5), async (req, res) => {
    try {
        console.log("Received Body:", req.body);
        console.log("Received Files:", req.files);

        const { name, description, price, category } = req.body;

        // Validate Required Fields
        if (!name || !description || !price || !category || !req.files) {
            return res.status(400).json({ message: "All fields are required, including at least one image" });
        }

        // Upload Multiple Images to Cloudinary
        const cloudinaryImageUrls = await Promise.all(
            req.files.map(async (file) => {
                try {
                    return await uploadToCloudinary(file.buffer);
                } catch (error) {
                    console.error("Cloudinary upload error:", error);
                    throw new Error("Failed to upload image to Cloudinary");
                }
            })
        );

        console.log("Cloudinary Image URLs:", cloudinaryImageUrls);

        // Create New Product with Cloudinary Image URLs
        const product = new ProductModel({
            name,
            description,
            price,
            category,
            image: cloudinaryImageUrls,
        });

        // Save Product to Database
        await product.save();
        res.status(201).json({ message: "Product added successfully", product });

    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: "Server error", error });
    }
});

// Route to Get All Products
router.get("/all", async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: error.message });
    }
});

router.post("/remove", async (req, res) => {
    try {
        // Validate product ID
        if (!req.body.id || !mongoose.Types.ObjectId.isValid(req.body.id)) {
            return res.status(400).json({ 
                success: false, 
                message: "Invalid product ID" 
            });
        }

        // Find product to get image URLs
        const product = await ProductModel.findById(req.body.id);
        if (!product) {
            return res.status(404).json({ 
                success: false, 
                message: "Product not found" 
            });
        }

        // Delete product from database
        await ProductModel.findByIdAndDelete(req.body.id);

        // Delete associated images from Cloudinary
        if (product.image && product.image.length > 0) {
            await deleteFromCloudinary(product.image);
        }

        res.json({ 
            success: true, 
            message: "Product removed successfully" 
        });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ 
            success: false, 
            message: error.message 
        });
    }
});

router.post("/single", async (req, res) => {
    try {
        const { productId } = req.body;
        const product = await ProductModel.findById(productId);
        res.json({ success: true, product });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).json({ message: error.message });
    }
});

export default router;
