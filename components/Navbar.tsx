"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";
import {
  FaUser,
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaTimes,
} from "react-icons/fa";

export default function Header() {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-lg border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-2 lg:px-2">
        {/* Top Header */}
        <div className="flex items-center justify-between py-2 sm:py-3 gap-2 sm:gap-4 lg:gap-6">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/v1.png"
                alt="Viva Logo"
                width={140}
                height={50}
                priority
                className="object-contain h-24 sm:h-24 lg:h-30  w-auto"
              />
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl mx-3 lg:mx-6">
            <div className="relative group w-full">
              <Input
                type="text"
                placeholder="Search for products, brands, categories..."
                className="w-full pl-4 pr-11 py-2 lg:py-2.5 border-2 border-gray-200  text-gray-700 placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:border-[#b36985] focus:ring-2 focus:ring-[#b36985]/20 transition-all duration-300 text-sm lg:text-base h-10 lg:h-11"
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
                <div className="bg-gradient-to-r  p-1.5 rounded-full cursor-pointer hover:shadow-md transition-all duration-200 group-hover:scale-105">
                  <FaSearch className="text-gray-400 w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-3">
            {/* Toggle Mobile Search */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden flex items-center group p-2 rounded-lg hover:bg-gray-50 transition"
              aria-label="Toggle Search"
            >
              {isMobileSearchOpen ? (
                <FaTimes className="text-gray-600 group-hover:text-[#b36985] w-4 h-4" />
              ) : (
                <FaSearch className="text-gray-600 group-hover:text-[#b36985] w-4 h-4" />
              )}
            </button>

            {/* Account Icon */}
            <Link href="/account">
              <div className="flex flex-col items-center group cursor-pointer p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition">
                <FaUser className="text-gray-600 group-hover:text-[#b36985] w-4 sm:w-5 h-4 sm:h-5" />
                <span className="hidden sm:block text-xs font-medium text-gray-600 group-hover:text-[#b36985] mt-0.5">
                  Account
                </span>
              </div>
            </Link>

            {/* Wishlist Icon */}
            <Link href="/account/wishlist">
              <div className="flex flex-col items-center group cursor-pointer p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition">
                <div className="relative">
                  <FaHeart className="text-gray-600 group-hover:text-[#b36985] w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="absolute -top-1.5 -right-1.5 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    3
                  </span>
                </div>
                <span className="hidden sm:block text-xs font-medium text-gray-600 group-hover:text-[#b36985] mt-0.5">
                  Wishlist
                </span>
              </div>
            </Link>

            {/* Cart Icon */}
            <Link href="/account/cart">
              <div className="flex flex-col items-center group cursor-pointer p-1.5 sm:p-2 rounded-lg hover:bg-gray-50 transition">
                <div className="relative">
                  <FaShoppingCart className="text-gray-600 group-hover:text-[#b36985] w-4 sm:w-5 h-4 sm:h-5" />
                  <span className="absolute -top-1.5 -right-1.5 bg-pink-600 text-white text-[10px] font-bold rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center">
                    2
                  </span>
                </div>
                <span className="hidden sm:block text-xs font-medium text-gray-600 group-hover:text-[#b36985] mt-0.5">
                  Cart
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileSearchOpen ? "max-h-20 pb-4" : "max-h-0 pb-0"
          }`}
        >
          <div className="relative group">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-full text-gray-700 placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:border-[#b36985] focus:ring-4 focus:ring-[#b36985]/10 transition text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-[#b36985] to-[#a25877] p-1.5 rounded-full hover:shadow-md transition">
                <FaSearch className="text-white w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet-only search bar */}
        <div className="hidden sm:block md:hidden pb-3">
          <div className="relative group">
            <Input
              type="text"
              placeholder="Search for products, brands..."
              className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-full text-gray-700 placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:border-[#b36985] focus:ring-4 focus:ring-[#b36985]/10 transition text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="bg-gradient-to-r from-[#b36985] to-[#a25877] p-1.5 rounded-full hover:shadow-md transition">
                <FaSearch className="text-white w-3 h-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}