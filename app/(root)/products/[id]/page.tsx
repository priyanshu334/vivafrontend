"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChevronDown,
  ChevronUp,
  Heart,
  ShoppingCart,
  Truck,
  Package,
  ShieldCheck,
} from "lucide-react";

const IconText = ({ icon: Icon, text, subtext }: { icon: any; text: string; subtext: string }) => (
  <div className="flex flex-col items-center text-center">
    <Icon className="w-8 h-8 mb-2 text-gray-700" />
    <p className="text-xs font-semibold text-gray-800">{text}</p>
    <p className="text-xs text-gray-500">{subtext}</p>
  </div>
);

const AccordionItem = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800"
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
      </button>
      {isOpen && <div className="pb-4 text-gray-600">{children}</div>}
    </div>
  );
};

const ProductCard = ({
  imgSrc,
  title,
  price,
  originalPrice,
}: {
  imgSrc: string;
  title: string;
  price: string;
  originalPrice?: string;
}) => (
  <div className="w-full">
    <div className=" border border-gray-300">
      <div className="bg-gray-100 overflow-hidden mb-2">
        <Image
          src={imgSrc}
          alt={title}
          width={300}
          height={400}
          className="w-full object-cover aspect-[3/4]"
        />
      </div>
      <div className="p-2">
        <h3 className="text-sm text-gray-700 mb-1">{title}</h3>
      <div className="flex items-center gap-2">
        <p className="text-sm font-bold text-black">₹{price}</p>
        {originalPrice && (
          <p className="text-sm text-gray-500 line-through">₹{originalPrice}</p>
        )}

      </div>
      
      </div>
    </div>
  </div>
);


const ProductPage = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("/img3.png");

  const thumbnailImages = [
    "/img3.png",
    "/img3.png",
    "/img3.png",
    "/img3.png",
  ];

  const colorOptions = [
    "/img3.png",
    "/img3.png",
    "/img3.png",
    "/img3.png",
    "/img3.png",
  ];

  const similarProducts = [
    {
      imgSrc: "/img3.png",
      title: "Shades of Blue Cotton...",
      price: "1,200",
      originalPrice: "1,500",
    },
    {
      imgSrc: "/img3.png",
      title: "Shades of Blue Cotton...",
      price: "1,200",
      originalPrice: "1,500",
    },
    {
      imgSrc: "/img3.png",
      title: "Shades of Blue Cotton...",
      price: "1,200",
      originalPrice: "1,500",
    },
    {
      imgSrc: "/img3.png",
      title: "Shades of Blue Cotton...",
      price: "1,200",
      originalPrice: "1,500",
    },
  ];

  const recentlyViewed = [
    {
      imgSrc: "/img3.png",
      title: "Blue Printed Modal Cotton...",
      price: "1,200",
      originalPrice: "1,500",
    },
    {
      imgSrc: "/img3.png",
      title: "Pink Lakhnavi Cotton...",
      price: "1,200",
      originalPrice: "1,500",
    },
    {
      imgSrc: "/img3.png",
      title: "Pink Printed Polyster...",
      price: "1,200",
      originalPrice: "1,500",
    },
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  return (
    <div className="bg-white font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="flex flex-col-reverse md:flex-row gap-4">
            <div className="flex md:flex-col gap-2 justify-center">
              {thumbnailImages.map((src, index) => (
                <Image
                  key={index}
                  src="/img3.png"
                  alt={`Thumb ${index + 1}`}
                  width={64}
                  height={80}
                  className={`w-16 h-20 object-cover rounded-none cursor-pointer border-2 ${mainImage === src ? "border-pink-500" : "border-transparent"}`}
                  onMouseOver={() => setMainImage(src)}
                  onClick={() => setMainImage(src)}
                />
              ))}
              <Button variant="ghost" size="icon">
                <ChevronDown className="w-6 h-6 text-gray-600" />
              </Button>
            </div>
            <div className="flex-1">
              <Image src="/img3.png" alt="Main Product" width={600} height={800} className="w-full h-auto object-cover rounded-none" />
              <div className="grid grid-cols-3 gap-4 my-6 py-4 border-t border-b">
                <IconText  icon={Package} text="Free Shipping" subtext="On orders above Rs. 1999" />
                <IconText icon={Truck} text="COD Available" subtext="On all orders" />
                <IconText icon={ShieldCheck} text="100% Secure" subtext="We ensure secure payment" />
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
            <p className="text-xs text-gray-500 mb-2">HOME / CATEGORY / PRODUCT</p>
            <h1 className="text-2xl font-bold text-gray-900">BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET</h1>
            <div className="flex items-baseline gap-2 mt-2 mb-4">
              <span className="text-2xl font-bold text-black">₹1,490</span>
              <span className="text-lg text-gray-500 line-through">₹2,999</span>
              <span className="text-lg text-green-600 font-semibold">(50% OFF)</span>
            </div>

            <div className="text-xs text-gray-500 mb-4">Price inclusive of all taxes</div>

            {/* Color Options */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2 text-gray-800">Select Color</h2>
              <div className="flex gap-2">
                {colorOptions.map((src, index) => (
                  <Image key={index} src="/img3.png" alt={`Color ${index + 1}`} width={64} height={80} className="w-16 h-20 object-cover rounded-none cursor-pointer border hover:border-pink-500" />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-sm font-semibold text-gray-800">Select Size</h2>
                <a href="#" className="text-sm font-semibold text-pink-600">
                  Size Chart
                </a>
              </div>
              <div className="flex gap-2">
                {sizes.map((size) => (
                  <Button
                    key={size}
                    variant={selectedSize === size ? "default" : "outline"}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </Button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <h2 className="text-sm font-semibold mb-2 text-gray-800">QUANTITY:</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button onClick={() => setQuantity((q) => Math.max(1, q - 1))} className="px-3 py-2">
                    -
                  </button>
                  <span className="px-4 py-2">{quantity}</span>
                  <button onClick={() => setQuantity((q) => q + 1)} className="px-3 py-2">
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 mb-6">
              <Button className="flex-1 bg-white  text-black hover:bg-white border-[1px] rounded-none border-gray-500">
                <Heart className="w-5 h-5 mr-2" /> ADD TO WISHLIST
              </Button>
        
                      <Button className="flex-1 bg-[#B76E79]  text-white hover:bg-[#B76E79] border-[1px] rounded-none border-gray-500">
                <ShoppingCart className="w-5 h-5 mr-2" /> ADD TO CART
              </Button>
        

            </div>

            {/* Accordion */}
            <AccordionItem title="About This Product">
              <p>Detailed information about the product.</p>
            </AccordionItem>
            <AccordionItem title="Fabric">
              <p>Made from breathable cotton.</p>
            </AccordionItem>
            <AccordionItem title="Care">
              <p>Machine wash cold, tumble dry low.</p>
            </AccordionItem>
            <AccordionItem title="Disclaimer">
              <p>Colors may slightly vary due to lighting.</p>
            </AccordionItem>
            <AccordionItem title="Shipping & Returns">
              <p>Easy 15-day returns. Standard delivery in 5–7 days.</p>
            </AccordionItem>
            <AccordionItem title="Reviews">
              <p>No reviews yet.</p>
            </AccordionItem>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-16">
          <h2 className="text-center text-xl font-bold mb-6 text-gray-800">SIMILAR PRODUCTS</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {similarProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>

        {/* Recently Viewed */}
        <div className="mt-16">
          <h2 className="text-center text-xl font-bold mb-6 text-gray-800">RECENTLY VIEWED</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recentlyViewed.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
