import mongoose from "mongoose";
const URI ="mongodb+srv://rakeshsinghadiya05:rakesh07@cluster0.8wwce.mongodb.net/lehriya_main"
const connectDB = async () =>{

    mongoose.connection.on('connected',()=>{
        console.log("DB connected")
    })
    
    await mongoose.connect(URI)
    // await mongoose.connect(${process.env.MONGODB_URI}/ecocraftindia)
}
export default connectDB