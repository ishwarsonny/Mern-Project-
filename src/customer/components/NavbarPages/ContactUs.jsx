import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Your message has been sent!");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h2 className="text-2xl font-semibold text-center mb-6">CONTACT US</h2>

      {/* Contact Details */}
      <div className="mb-8 text-lg">
        <p mt-3>
          <b>Store Address:</b> Studio Leheriya, 24, Sector 12, Dwarka, New Delhi-110078
        </p>
        <p mt-3>
          <strong>Mail Us 📧:</strong> <a href="mailto:support@leheriya.com" className="text-black-600">support@leheriya.com</a>
        </p>
        <p mt-3>
          <strong>Working Hours:</strong> 11:00 am - 5:00 pm
        </p>
        <p>
          <strong>Call Us On:</strong> 011-69296516
        </p>
        <p>
          <strong>WhatsApp Only 💬:</strong> <a href="https://wa.me/919873003388" className="text-black-600">+91-9873003388</a>
        </p>
      </div>

      {/* Contact Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border p-3 w-full rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border p-3 w-full rounded-md  cursor-not-allowed"
          />
        </div>
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="border p-3 w-full rounded-md"
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows="4"
          value={formData.message}
          onChange={handleChange}
          required
          className="border p-3 w-full rounded-md"
        />
        <button type="submit" className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800">
          Send Message
        </button>
      </form>
    </div>
  );
}
