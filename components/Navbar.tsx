"use client";

import { Input } from "@/components/ui/input";
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 border-b border-pink-200">
      {/* Logo */}
      <div className="flex items-center space-x-1 text-3xl">
        <span className="text-pink-600 italic font-cursive">Viva</span>
        <span className="text-red-600 italic">Boutique</span>
      </div>

      {/* Search */}
      <div className="relative w-full max-w-xl mx-6">
        <Input
          type="text"
          placeholder="Search Here..."
          className="pl-4 pr-10 py-2 border-pink-400 text-gray-700 placeholder:text-gray-500"
        />
        <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-pink-500" />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-6 text-pink-600">
        <div className="flex items-center gap-1 cursor-pointer">
          <FaUser />
          <span className="text-sm uppercase">Account</span>
        </div>
        <div className="flex items-center gap-1 cursor-pointer">
          <FaHeart />
          <span className="text-sm uppercase">Cart</span>
          <FaShoppingCart />
        </div>
      </div>
    </header>
  );
}
