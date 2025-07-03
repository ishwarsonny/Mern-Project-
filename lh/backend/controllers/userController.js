import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import validator from "validator";

const JWT_SECRET ="Rakesh"

const createToken = (id) =>{
    return jwt.sign({id},JWT_SECRET)
}
//Route for user login
const loginUser = async (req,res) => {
    // res.json({msg:"API working"})
    
        try {
            const {email,password}=req.body;
            const  user = await userModel.findOne({email})
            if(!user)
            {
             return res.json({success:false,message:"User doesn't exists"})
            }
            const isMatch = await bcrypt.compare(password,user.password);
            if(isMatch)
                {
                    const token = createToken(user._id);
                    return res.json({success:true,token})
                }
                else
                {
                    return res.json({success:false,message:"Invalid credentials"})
                 } 
            }
     catch (error) {
        console.error("Error in loginUser:", error.message);
        res.status(500).json({ error: "Server error during login" });
    }
}
//Route for user register
const registerUser = async (req,res) => {
    //res.json({msg:"API working"})
    try {
       const {name,email,password}=req.body;
       const  exists = await userModel.findOne({email})
       if(exists)
       {
        return res.json({success:false,message:"User already exists"})
       }
       if(!validator.isEmail(email))
            {
                return res.json({success:false,message:"Please enter a Valid Email"})
            }
       if(password.length < 8)
        {
            return res.json({success:false,message:"Please enter a strong password"})
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name,
            email,
            password:hashedPassword
        })
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,message:"User created successfully",token})
    } catch (error) {
        console.error("Error in registerUser:", error.message);
        res.status(500).json({ error: "Server error during register" });
    }
}

export { loginUser ,registerUser};
