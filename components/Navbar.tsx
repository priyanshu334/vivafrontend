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
    <header className="w-full bg-white shadow-md border-b border-gray-100 sticky top-0 z-50">
      <div className="w-full px-4 md:px-6 lg:px-16">
        {/* Top Header */}
        <div className="flex items-center justify-between py-2 sm:py-3">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="flex items-center">
              <Image
                src="/l1.png"
                alt="Viva Logo"
                width={130}
                height={40}
                priority
                quality={100}
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl lg:max-w-2xl mx-4">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Search for products, brands, categories..."
                className="w-full pl-4 pr-11 py-2.5 border-2 border-gray-200 text-gray-700 placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:border-[#b36985] focus:ring-2 focus:ring-[#b36985]/20 text-sm lg:text-base h-11 rounded-md"
              />
              <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
                <div className="p-2 rounded-full cursor-pointer hover:shadow-md transition-all">
                  <FaSearch className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Icons Section */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            {/* Toggle Mobile Search */}
            <button
              onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Toggle Search"
            >
              {isMobileSearchOpen ? (
                <FaTimes className="text-gray-600 w-5 h-5" />
              ) : (
                <FaSearch className="text-gray-600 w-5 h-5" />
              )}
            </button>

            {/* Account */}
            <Link href="/account">
              <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition">
                <FaUser className="text-gray-600 w-5 h-5" />
                <span className="hidden sm:block text-xs text-gray-600 mt-0.5">
                  Account
                </span>
              </div>
            </Link>

            {/* Wishlist */}
            <Link href="/wishlist">
              <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition relative">
                <FaHeart className="text-gray-600 w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  3
                </span>
                <span className="hidden sm:block text-xs text-gray-600 mt-0.5">
                  Wishlist
                </span>
              </div>
            </Link>

            {/* Cart */}
            <Link href="/account/cart">
              <div className="flex flex-col items-center p-2 rounded-lg hover:bg-gray-50 transition relative">
                <FaShoppingCart className="text-gray-600 w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  2
                </span>
                <span className="hidden sm:block text-xs text-gray-600 mt-0.5">
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
          <div className="relative">
            <Input
              type="text"
              placeholder="Search products..."
              className="w-full pl-4 pr-12 py-2.5 border-2 border-gray-200 rounded-full text-gray-700 placeholder:text-gray-400 bg-gray-50 focus:bg-white focus:border-[#b36985] focus:ring-4 focus:ring-[#b36985]/10 transition text-sm"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2">
              <div className="p-1.5 rounded-full hover:shadow-md transition">
                <FaSearch className="w-3 h-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Tablet-only Search Bar */}
        <div className="hidden sm:block md:hidden pb-3">
          <div className="relative">
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
