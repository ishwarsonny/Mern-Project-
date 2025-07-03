import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterestP, FaYoutube, FaWhatsapp } from "react-icons/fa";

const SocialMediaSidebar = () => {
    return (
        <div className="fixed left-4 top-1/4 flex flex-col space-y-4">
            
            <a href="https://x.com/i/flow/login?redirect_after_login=%2FTheLeheriya" className="text-black text-2xl"><FaTwitter /></a>
            <a href="https://www.instagram.com/leheriya.in/" className="text-black text-2xl"><FaInstagram /></a>
            <a href="https://in.pinterest.com/shopleheriya/" className="text-black text-2xl"><FaPinterestP /></a>
            <a href="https://www.youtube.com/channel/UCXiZxjt15YKzqfbRWXKME_w" className="text-black text-2xl"><FaYoutube /></a>

            {/* WhatsApp Floating Button */}
            <a
                href="https://wa.me/1234567899" // Replace with your phone number
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-20 left-4 bg-green-500 p-4 rounded-full text-white text-3xl shadow-lg"
            >
                <FaWhatsapp />
            </a>




        </div>
    );
};

export default SocialMediaSidebar;