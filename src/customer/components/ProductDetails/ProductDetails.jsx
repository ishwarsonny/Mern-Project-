import React from "react";
import { FaCcMastercard, FaCcVisa } from "react-icons/fa6";
import { FaGooglePay } from "react-icons/fa";
import { FaTruck } from "react-icons/fa";

import { NavLink } from "react-router-dom";

const ProductDetails = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <div className="sticky top-4">
            <img
              src="https://www.leheriya.com/cdn/shop/files/designer-handcrafted-applique-work-premium-cotton-unstitched-salwar-suit-266072_400x.jpg?v=1735560008"
              alt="Kota Doria Embroidered 3 pc Salwar Suit"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
          Designer Handcrafted Applique Work Premium Cotton Unstitched Salwar Suit
          </h1>
          <p className="text-gray-500 mt-2">SKU: LEH-KD-245</p>
          <p className="text-red-500 text-xl font-bold mt-2">Rs. 2,899.00</p>
          <p className="text-gray-400 line-through">Rs. 7,499.00</p>
          <p className="text-green-600 mt-2">
            Estimated Delivery Time: 10-15 Days
          </p>
          <p className="text-gray-400 mt-2">
          Use Code - LEHERIYA15 to Get 15% Discount on order above ₹4000/- only.
          </p>
          <NavLink to="/ACart">
<button className="bg-white text-pink-600 px-60 py-3 mt-6 hover:bg-pink-600 hover:text-white transition-colors duration-300 w-full md:w-auto border-2 border-black">

            Add to Cart
          </button>
          </NavLink>

          <NavLink to="/ACart">
<button className="bg-pink-600 text-white px-60 py-3 mt-6 hover:bg-white hover:text-pink-600 transition-colors duration-300 w-full md:w-auto ">

              Buy it now
          </button>
          </NavLink> 

          {/* Secure Checkout */}
          <div className="mt-6">
            <p className="text-gray-700 font-semibold">Checkout Securely With</p>
            <div className="flex space-x-6 mt-3">
            <img
                 src="https://th.bing.com/th/id/OIP.D9JHJ_ILGOa0zKhh59VEFQHaHa?w=207&h=207&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                 alt="Cash on Delivery"
                 className="w-20 h-12"
              />
            <img 
                src="https://th.bing.com/th/id/OIP.uxJ7Kv7YXFuaJMD1R-RsWgHaCU?w=333&h=109&c=7&r=0&o=5&dpr=1.3&pid=1.7g" 
                alt="Paytm" 
                className="w-12 h-6" 
              />
              <FaCcVisa className="w-12 h-8 text-blue-900" />
              <FaCcMastercard className="w-12 h-8 text-red-600" />             
              <FaGooglePay className="w-12 h-8 text-blue-600" />


            </div>

          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <section className="mt-12 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        <div className="mt-4 border-t pt-4">
          <div className="mb-4">
            <p className="font-bold">Alokananda Mitra</p>
            <p className="text-sm text-gray-600">Reviewed on 26 Aug, 2024</p>
            <p className="mt-2">It's nice. Dupatta is good, suit is also nice with a little lustre.</p>
          </div>

          <div>
            <p className="font-bold">Komal Preet Kaur</p>
            <p className="text-sm text-gray-600">Reviewed on 19 Sep, 2024</p>
            <p className="mt-2">Beautiful suit. Will purchase more on my visit to India. Thanks Leheriya!</p>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold">You May Also Like</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4">
          <div className="border rounded-lg p-4 shadow-md">
            <img src="https://your-image-url.com/product1.jpg" alt="Product 1" className="w-full rounded-lg" />
            <p className="mt-2 font-semibold">Kota Doria Black Leheriya Suit</p>
            <p className="text-red-500">Rs. 1,899.00</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md">
            <img src="https://your-image-url.com/product2.jpg" alt="Product 2" className="w-full rounded-lg" />
            <p className="mt-2 font-semibold">Embroidered 3 pc Salwar Suit</p>
            <p className="text-red-500">Rs. 2,199.00</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md">
            <img src="https://your-image-url.com/product3.jpg" alt="Product 3" className="w-full rounded-lg" />
            <p className="mt-2 font-semibold">Kota Doria Embroidered Dupatta</p>
            <p className="text-red-500">Rs. 2,199.00</p>
          </div>

          <div className="border rounded-lg p-4 shadow-md">
            <img src="https://your-image-url.com/product4.jpg" alt="Product 4" className="w-full rounded-lg" />
            <p className="mt-2 font-semibold">Embroidered Salwar Suit</p>
            <p className="text-red-500">Rs. 2,199.00</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
