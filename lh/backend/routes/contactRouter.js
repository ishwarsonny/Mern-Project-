import express from 'express';
import ContactModel from '../models/contactModel.js';

const ContactRouter=express.Router();
ContactRouter.get('/form', async (req,res)=>{
    try {
        const reponse = req.body;
        await ContactModel.create(reponse);
        res.json({success:true,message:"Message sent successfully"});
    } catch (error) {
        res.json({success:false,message:error.message});
    }
});
export default ContactRouter;