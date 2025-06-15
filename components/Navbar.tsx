"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FaUser, FaHeart, FaShoppingCart, FaSearch, FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        {/* Main Header */}
        <div className="flex items-center justify-between py-3 sm:py-4 gap-2 sm:gap-4 lg:gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center space-x-1">
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-[#b36985] to-[#d4749a] bg-clip-text font-bold italic tracking-tight">
                Viva
              </span>
              <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-transparent bg-gradient-to-r from-[#e74c3c] to-[#c0392b] bg-clip-text font-bold italic tracking-tight">
                Boutique
              </span>
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl mx-4 lg:mx-8">
            <div className="relative group w-full">
              <Input
                type="text"
                placeholder="Search for products, brands, categories..."
                className="w-full pl-4 lg:pl-5 pr-12 py-2.5 lg:py-3 border-2 border-gray-200 rounded-full text-gray-700 placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:border-[#b36985] focus:ring-4 focus:ring-[#b36985]/10 transition-all duration-300 text-sm lg:text-base"
              />
              <div className="absolute right-3 lg:right-4 top-1/2 transform -translate-y-1/2">
                <div className="bg-gradient-to-r from-[#b36985] to-[#a25877] p-1.5 lg:p-2 rounded-full cursor-pointer hover:shadow-md transition-all duration-200 group-hover:scale-105">
                  <FaSearch className="text-white w-3 h-3 lg:w-4 lg:h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Search Toggle & Navigation Icons */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
            {/* Mobile Search Toggle */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden flex flex-col items-center group cursor-pointer p-2 rounded-lg hover:bg-gray-50 transition-all duration-200"
            >
              <div className="relative">
                {isMobileSearchOpen ? (
                  <FaTimes className="text-gray-600 group-hover:text-[#b36985] transition-colors duration-200 w-4 h-4" />
                ) : (
                  <FaSearch className="text-gray-600 group-hover:text-[#b36985] transition-colors duration-200 w-4 h-4" />
                )}
              </div>
            </button>

            {/* Account */}
            <Link href="/account">
              <div className="flex flex-col items-center group cursor-pointer p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                <div className="relative">
                  <FaUser className="text-gray-600 group-hover:text-[#b36985] transition-colors duration-200 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </div>
                <span className="text-xs font-medium text-gray-600 group-hover:text-[#b36985] transition-colors duration-200 mt-0.5 sm:mt-1 hidden sm:block lg:block">
                  Account
                </span>
              </div>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist">
              <div className="flex flex-col items-center group cursor-pointer p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                <div className="relative">
                  <FaHeart className="text-gray-600 group-hover:text-[#b36985] transition-colors duration-200 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 bg-gradient-to-r from-[#e74c3c] to-[#c0392b] text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-600 group-hover:text-[#b36985] transition-colors duration-200 mt-0.5 sm:mt-1 hidden sm:block lg:block">
                  Wishlist
                </span>
              </div>
            </Link>

            {/* Cart */}
            <Link href="/cart">
              <div className="flex flex-col items-center group cursor-pointer p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition-all duration-200">
                <div className="relative">
                  <FaShoppingCart className="text-gray-600 group-hover:text-[#b36985] transition-colors duration-200 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                  <span className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 bg-gradient-to-r from-[#b36985] to-[#a25877] text-white text-xs font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    2
                  </span>
                </div>
                <span className="text-xs font-medium text-gray-600 group-hover:text-[#b36985] transition-colors duration-200 mt-0.5 sm:mt-1 hidden sm:block lg:block">
                  Cart
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Search Bar (Toggleable) */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileSearchOpen ? 'max-h-20 pb-4' : 'max-h-0 pb-0'
        }`}>
          <div className="relative group">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-full text-gray-700 placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:border-[#b36985] focus:ring-4 focus:ring-[#b36985]/10 transition-all duration-300 text-sm"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="bg-gradient-to-r from-[#b36985] to-[#a25877] p-1.5 rounded-full cursor-pointer hover:shadow-md transition-all duration-200">
                <FaSearch className="text-white w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Search Bar (Always visible on tablet) */}
        <div className="hidden sm:block md:hidden pb-3">
          <div className="relative group">
            <Input
              type="text"
              placeholder="Search for products, brands..."
              className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-full text-gray-700 placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:border-[#b36985] focus:ring-4 focus:ring-[#b36985]/10 transition-all duration-300 text-sm"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              <div className="bg-gradient-to-r from-[#b36985] to-[#a25877] p-1.5 rounded-full cursor-pointer hover:shadow-md transition-all duration-200">
                <FaSearch className="text-white w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}