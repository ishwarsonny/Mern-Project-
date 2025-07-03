import { v2 as connectCloudinary } from "cloudinary";
import dotenv from "dotenv";

dotenv.config(); // ✅ Load .env variables

// ✅ Cloudinary Configuration
connectCloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "dsp38iirz",
    api_key: process.env.CLOUDINARY_API_KEY || "434159186596856",
    api_secret: process.env.CLOUDINARY_API_SECRET || "nk2bpdpLQdvZLrBSX5RSgkY5gu4"
});

// ✅ Export Configured Cloudinary Instance
export default connectCloudinary;