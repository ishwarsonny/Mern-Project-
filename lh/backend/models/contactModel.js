import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone_no: { type: Number, required: true },
  message : { type: String, required: true },
  
});

// Default export
const ContactModel = mongoose.model("Contact", contactSchema);

export default ContactModel;
