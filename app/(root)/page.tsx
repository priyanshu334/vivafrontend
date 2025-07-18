"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import Link from "next/link";
import { products as allProducts, type Product } from "@/utils/data";
import { useWishlistStore } from "@/stores/wishlistStore";
import { useCartStore } from "@/stores/cartStore";

const KurtaSet = () => {
  const wishlist = useWishlistStore((state) => state.wishlist);
  const addToWishlist = useWishlistStore((state) => state.addToWishlist);
  const removeFromWishlist = useWishlistStore((state) => state.removeFromWishlist);

  const cart = useCartStore((state) => state.cart);
  const addToCart = useCartStore((state) => state.addToCart);

  const handleWishlist = (product: Product) => {
    const exists = wishlist.find((item) => item.title === product.title);
    if (exists) {
      removeFromWishlist(product.title);
    } else {
      addToWishlist(product);
    }
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full mx-auto border-t border-black   ">
        {/* Banner */}
         <div className="relative w-full mb-16">
          <div className="relative overflow-hidden shadow-2xl">
            <img
              src="/img1.png"
              alt="Perfectly Paired Kurta Sets"
              className="w-full h-[150px] sm:h-[400px] md:h-[500px] lg:h-[650px] object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-10" />
          </div>
        </div>

        {/* New Arrivals Header */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            NEW ARRIVALS
          </h2>
          <div className="w-24 h-1 bg-[#AE4A56] mx-auto "></div>
          <p className="text-gray-600 mt-4 text-lg">
            Discover our latest collection of elegant kurta sets
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mx-4">
          {allProducts.map((product, index) => {
            const isWished = wishlist.some((item) => item.title === product.title);
            const productId = index + 1;

            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-none hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden">
                    <Link href={`/products/${productId}`}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-130 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>

                    {/* Heart Icon */}
                    <div className="absolute top-4 right-4">
                      <div
                        onClick={() => handleWishlist(product)}
                        className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:bg-white transition-colors duration-200 cursor-pointer"
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            isWished ? "text-[#AE4A56] fill-[#AE4A56]" : "text-[#AE4A56]"
                          } transition-colors duration-200`}
                        />
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-white/90 text-gray-800 hover:bg-white border-0 backdrop-blur-sm font-medium"
                      >
                        {product.label || "Add to Cart"}
                      </Button>
                    </div>
                  </div>

                  <Link href={`/products/${productId}`}>
                    <div className="p-6 cursor-pointer">
                      <h3 className="text-sm font-semibold leading-relaxed text-gray-800 mb-3 line-clamp-2 group-hover:text-[#AE4A56] transition-colors duration-200">
                        {product.title}
                      </h3>
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-bold text-[#AE4A56]">₹{product.price}</p>
                        {product.originalPrice && (
                          <div className="text-xs text-gray-500 line-through">
                            ₹{product.originalPrice}
                          </div>
                        )}
                      </div>
                      {product.discount && (
                        <div className="mt-2">
                          <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                            {product.discount}
                          </span>
                        </div>
                      )}
                    </div>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Show More Button */}
        <div className="flex justify-center mt-16">
          <Link href="/products">
               <Button className="bg-[#B76E79] text-white px-12 py-6  hover:bg-[#963944] transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105">
            Show More Products
          </Button>
          </Link>
     
        </div>
      </div>
    </div>
  );
};

export default KurtaSet;