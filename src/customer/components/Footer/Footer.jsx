import './footer.css'
const Footer = () => {
    return (
      <footer 
      className="addbg bg-cover bg-center py-6 px-6 md:px-10 "
    
      >
        <div className="footer-grid md:grid-cols-4 px-6 gap-8 ">
          <div>
            <h3 className="footer-title">SHOP</h3>
            <ul>
              <li>Home</li>
              <li>Our Story</li>
              <li>New Arrivals</li>
              <li>Unstitched Suits</li>
              <li>Dupattas</li>
              <li>Blog</li>
              <li>Search</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">INFORMATION</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Disclaimer</li>
              <li>Terms of Service</li>
              <li>Return & Refund Policy</li>
              <li>Shipping Policy</li>
              <li>Media</li>
            </ul>
          </div>
          <div>
            <h3 className="footer-title">CONTACT US</h3>
            <p><strong>Store Address:</strong> Studio Leheriya, 24, Sector 12, Dwarka, New Delhi-110078</p>
            <p><strong>Mail Us:</strong> support@leheriya.com</p>
            <p><strong>Working Hours:</strong> 11:00 am - 5:00 pm</p>
            <p><strong>Call Us On:</strong> 011-69296516</p>
            <p><strong>WhatsApp Only:</strong> +91-9873003388</p>
          </div>
          <div>
            <h3 className="footer-title">NEWSLETTER</h3>
            <p>Subscribe to receive updates, access to exclusive deals, and more.</p>
            <input type="email" placeholder="Enter your email address" className="newsletter-input" />
            <button className="subscribe-button">SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024, Leheriya. All rights reserved.</p>
        </div>
      </footer>
    );
};

export default Footer;
