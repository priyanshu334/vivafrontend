import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";
import CategoryScroller from "@/components/CategoryScroller";

const wishlistItems = [
  // Example product data (update with real data or API integration)
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1690,
    image: "/img1.jpg",
    available: true,
    buttonText: "MOVE TO BAG",
  },
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1680,
    image: "/img2.jpg",
    available: true,
    buttonText: "SHOW TO BAG",
  },
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1600,
    image: "/img3.jpg",
    available: false,
    buttonText: "NOTIFY ME",
  },
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1690,
    image: "/img1.jpg",
    available: true,
    buttonText: "MOVE TO BAG",
  },
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1680,
    image: "/img2.jpg",
    available: true,
    buttonText: "SHOW TO BAG",
  },
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1600,
    image: "/img3.jpg",
    available: false,
    buttonText: "NOTIFY ME",
  },
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1690,
    image: "/img1.jpg",
    available: true,
    buttonText: "MOVE TO BAG",
  },
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1680,
    image: "/img2.jpg",
    available: true,
    buttonText: "SHOW TO BAG",
  },
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1600,
    image: "/img3.jpg",
    available: false,
    buttonText: "NOTIFY ME",
  },
  // Add more products as needed
];

const WishlistPage = () => {
  return (
    <div className="p-4 ">
    <CategoryScroller/>
      <h2 className="text-2xl font-semibold mb-4">WISHLIST</h2>
      <p className="mb-6">31 PRODUCTS</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlistItems.map((item, index) => (
          <Card key={index} className="relative group">
            <img
              src={item.image}
              alt={item.title}
              className={`w-full h-[350px] object-cover rounded-t-xl ${!item.available && "opacity-50"}`}
            />
            <Heart className="absolute top-2 right-2 text-white bg-black p-1 rounded-full w-6 h-6" />
            <CardContent className="p-4 space-y-2">
              <p className="text-sm">{item.title}</p>
              <p className="font-medium text-lg">₹ {item.price}</p>
              {item.available ? (
                <Button className="w-full rounded-md bg-[#b36985] hover:bg-[#a25877]">
                  {item.buttonText}
                </Button>
              ) : (
                <Button variant="outline" disabled className="w-full">
                  {item.buttonText}
                </Button>
              )}
            </CardContent>
            {!item.available && (
              <Badge className="absolute top-4 left-4 bg-white text-black border border-black">
                SOLD OUT
              </Badge>
            )}
          </Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Button className="px-10 py-2 bg-[#b36985] hover:bg-[#a25877] text-white rounded-full">
          Show More
        </Button>
      </div>
    </div>
  );
};

export default WishlistPage;
