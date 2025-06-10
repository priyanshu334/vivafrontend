import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import CategoryScroller from "@/components/CategoryScroller";

const products = [
  {
    title: "Blue Botanical Bliss Cotton A-Line Kurta set",
    price: "1,999",
    image: "/products/blue-kurta.jpg",
  },
  {
    title: "Pink Lush Bloom Cotton A-Line Kurta set",
    price: "1,999",
    image: "/products/pink-kurta.jpg",
  },
  {
    title: "Pink Floral Printed Palazzo Set",
    price: "1,999",
    image: "/products/pink-floral.jpg",
  },
  {
    title: "Blue Botanical Bliss Cotton A-Line Kurta set",
    price: "1,999",
    image: "/products/blue-kurta.jpg",
  },
  {
    title: "Pink Lush Bloom Cotton A-Line Kurta set",
    price: "1,999",
    image: "/products/pink-kurta.jpg",
  },
  {
    title: "Pink Floral Printed Palazzo Set",
    price: "1,999",
    image: "/products/pink-floral.jpg",
  },
  {
    title: "Grey Lime Petal Cotton A-Line Kurta set",
    price: "1,999",
    image: "/products/grey-kurta.jpg",
  },
];

const KurtaSet = () => {
  return (
    <div className="p-4 ">
      

      {/* Banner */}
      <div className="relative w-full mb-6">
        <img
          src="images/img1.png"
          alt="Perfectly Paired Kurta Sets"
          className="w-full h-auto rounded-xl shadow"
        />

      </div>

      {/* New Arrivals */}
      <h2 className="text-lg font-semibold mb-4 text-center uppercase tracking-wide">New - Arrivals</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <Card key={index} className="relative overflow-hidden">
            <CardContent className="p-0">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-[350px] object-cover"
                />
                <Heart className="absolute top-2 right-2 text-rose-500 fill-white bg-white rounded-full p-1 w-6 h-6" />
              </div>
              <div className="p-2">
                <h3 className="text-sm font-medium leading-tight">{product.title}</h3>
                <p className="text-sm text-gray-700">
                  ₹ {product.price}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More Button */}
      <div className="flex justify-center mt-6">
        <Button className="bg-[#AE4A56] text-white px-6 py-2 rounded-md hover:bg-[#963944]">
          Show More
        </Button>
      </div>
    </div>
  );
};

export default KurtaSet;