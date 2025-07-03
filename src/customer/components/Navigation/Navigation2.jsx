import { useState } from "react";
import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      {/* Promo Banner */}
      <div className="w-full bg-[#fcf8ed] text-center text-sm py-2 text-black">
        ❤️ USE CODE <span className="font-semibold">LEHERIYA15</span> TO GET FLAT 15% OFF ON PURCHASE ABOVE ₹4000/- ONLY ❤️
      </div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 lg:px-12 py-4">
        {/* Logo */}
        <div className="text-3xl font-semibold italic">
          <span className="relative">
            Leheriya
            <span className="absolute -top-2 right-0 text-pink-500">●</span>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6 text-lg">
          <li className="hover:underline cursor-pointer">HOME</li>
          <li className="hover:underline cursor-pointer">OUR STORY</li>
          <li className="hover:underline cursor-pointer">NEW ARRIVALS</li>
          <li className="hover:underline cursor-pointer">UNSTITCHED SUITS</li>
          <li className="hover:underline cursor-pointer">DUPATTAS</li>
          <li className="hover:underline cursor-pointer">BLOG</li>
          <li className="hover:underline cursor-pointer">SEARCH</li>
          <li className="hover:underline cursor-pointer">CONTACT US</li>
        </ul>

        {/* Icons */}
        <div className="flex space-x-4">
          <User className="w-6 h-6 cursor-pointer" />
          <Search className="w-6 h-6 cursor-pointer" />
          <ShoppingBag className="w-6 h-6 cursor-pointer" />
        </div>
      </nav>
    </header>
  );
}
