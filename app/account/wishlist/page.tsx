"use client";

import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const wishlistItems = [
  {
    id: 1,
    image: "/shirt1.jpg",
    name: "Black Blossom Threadwork Cotton Shirt",
    price: 1690,
    status: "available",
  },
  {
    id: 2,
    image: "/shirt2.jpg",
    name: "Black Blossom Threadwork Cotton Shirt",
    price: 1690,
    status: "available",
  },
  {
    id: 3,
    image: "/shirt3.jpg",
    name: "Black Blossom Threadwork Cotton Shirt",
    price: 1690,
    status: "sold",
  },
  {
    id: 4,
    image: "/shirt4.jpg",
    name: "Black Blossom Threadwork Cotton Shirt",
    price: 1690,
    status: "sold",
  },
  {
    id: 5,
    image: "/shirt5.jpg",
    name: "Black Blossom Threadwork Cotton Shirt",
    price: 1490,
    oldPrice: 2490,
    discount: "40% OFF",
    status: "available",
  },
  {
    id: 6,
    image: "/shirt6.jpg",
    name: "Black Blossom Threadwork Cotton Shirt",
    price: 1490,
    oldPrice: 2490,
    discount: "40% OFF",
    status: "sold",
  },
];

export default function WishlistPage() {
  return (
    <div className="min-h-screen flex">
 <aside className="w-64 bg-white border-r p-6 space-y-6">
        <h1 className="text-2xl font-bold uppercase">Account</h1>
        <p className="text-gray-600">Xyz Name</p>
        <nav className="mt-6 space-y-4 text-sm">
          <div className="text-rose-400 font-bold">MY PROFILE</div>
          <div>MY WISHLIST</div>
          <div>MY ORDERS</div>
          <div>MY ADDRESSES</div>
          <div>TRACK ORDER</div>
          <div>LOGOUT</div>
        </nav>
      </aside>

      {/* Wishlist Content */}
      <main className="flex-1 p-6">
        <div className="text-sm breadcrumbs text-gray-500 mb-2">
          HOME | ACCOUNT | <span className="text-black font-medium">WISHLIST</span>
        </div>
        <h2 className="text-lg font-semibold mb-6">MY WISHLIST</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => (
            <Card key={item.id} className="relative group shadow-sm border">
              <button className="absolute top-2 right-2 z-10 p-1 bg-white rounded-full shadow">
                <X size={16} />
              </button>

              <div className="relative w-full h-80">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
                {item.status === "sold" && (
                  <Badge className="absolute top-4 left-4 bg-black text-white rounded-none px-3 py-1 text-xs">
                    SOLD OUT
                  </Badge>
                )}
                {item.discount && (
                  <Badge className="absolute top-4 right-4 bg-green-100 text-green-800 rounded-none px-3 py-1 text-xs">
                    {item.discount}
                  </Badge>
                )}
              </div>

              <CardContent className="mt-4 space-y-1 px-4 pb-4">
                <h3 className="text-sm text-gray-800 leading-tight">
                  {item.name}
                </h3>
                <div className="text-sm font-semibold text-gray-900">
                  ₹ {item.price}
                  {item.oldPrice && (
                    <span className="ml-2 line-through text-xs text-gray-500">
                      ₹ {item.oldPrice}
                    </span>
                  )}
                </div>
                {item.status === "available" ? (
                  <Button className="w-full mt-1 rounded-none bg-[#b88192] hover:bg-[#a76e81]">
                    MOVE TO BAG
                  </Button>
                ) : (
                  <Button variant="outline" disabled className="w-full mt-1 rounded-none">
                    NOTIFY ME
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}