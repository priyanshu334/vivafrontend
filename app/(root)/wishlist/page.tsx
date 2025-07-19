"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/stores/wishlistStore";

const WishlistPage = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-8 pt-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">WISHLIST</h2>
          <p className="text-gray-600 text-lg">{wishlist.length} PRODUCTS</p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item, index) => {
            const available = item.label !== "SOLD OUT";
            const buttonText = available
              ? item.label === "ADD TO CART" || item.label === "BEST PICK"
                ? "MOVE TO BAG"
                : item.label
              : "NOTIFY ME";

            return (
              <div
                key={index}
                className="relative group bg-white border-[1px] border-gray-300 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full h-[520px] object-cover transition-transform duration-500 group-hover:scale-105 ${
                      !available ? "grayscale opacity-70" : ""
                    }`}
                  />

                  {/* Heart Icon */}
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200">
                      <Heart className="w-5 h-5 text-red-500 fill-red-500" />
                    </div>
                  </div>

                  {/* Sold Out Badge */}
                  {!available && (
                    <Badge className="absolute top-3 left-3 bg-gray-900 text-white border-0 px-3 py-1 text-xs font-medium">
                      SOLD OUT
                    </Badge>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-5 space-y-3">
                  <h3 className="text-sm font-medium text-gray-900 line-clamp-2 leading-relaxed">
                    {item.title}
                  </h3>
                  <p className="text-xl font-bold text-gray-900">
                    ₹{item.price.toLocaleString()}
                  </p>

                  {available ? (
                    <Button className="w-full h-11 rounded-none bg-[#b36985] hover:bg-[#a25877] text-white font-medium transition-colors duration-200 shadow-sm hover:shadow-md">
                      {buttonText}
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      disabled
                      className="w-full h-11 rounded-none border-gray-300 text-gray-500 font-medium"
                    >
                      {buttonText}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-10">
          <Button className="px-12 py-4 rounded-none bg-[#B76E79] hover:bg-[#a25877] text-white font-medium text-base shadow-md hover:shadow-lg transition-all duration-200">
            Show More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;
