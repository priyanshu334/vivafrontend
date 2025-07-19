"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ArrowUpDown, ListFilter } from "lucide-react";

const products = [
  {
    id: "1",
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/img3.png",
    label: "BEST PICK",
  },
  {
    id: "2",
    title: "Blue Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/img3.png",
    label: "BEST PICK",
  },
  {
    id: "3",
    title: "Red Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    id: "4",
    title: "Pink Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    id: "5",
    title: "Blue Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    id: "6",
    title: "Black Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    id: "7",
    title: "Peach Blossom Kurti Top",
    price: 799,
    originalPrice: 1332,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    id: "8",
    title: "Checkered Cotton Kurti",
    price: 799,
    originalPrice: 1332,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
  {
    id: "9",
    title: "Black & White Check Kurti",
    price: 799,
    originalPrice: 1332,
    discount: "40% OFF",
    image: "/img3.png",
    label: "ADD TO CART",
  },
];

const recentlyViewed = [
  {
    title: "Blue Botanical Box Cotton A Line Kurti set",
    price: 1699,
    image: "/img3.png",
  },
  {
    title: "Pink Lush Blossom Cotton A Line Kurti set",
    price: 1699,
    image: "/img3.png",
  },
  {
    title: "Pink Floral Printed Pakistani Lace Suit",
    price: 1699,
    image: "/img3.png",
  },
];

export default function ProductListingPage() {
  const router = useRouter();

  const handleProductClick = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <div className="px-4 py-6 max-w-screen-2xl mx-auto">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-2">
        Home / <span className="text-black font-medium">Everything Under 1499</span>
      </div>

      {/* Heading with horizontal line */}
      <div className="border-b border-gray-300 pb-3 mb-4">
        <h1 className="text-2xl font-bold text-black">EVERYTHING UNDER ₹1499</h1>
      </div>

      {/* Subheading */}
      <p className="text-sm text-gray-700 mb-6">
        Dresses, Kurtis, Kurta Sets, Tunics & Co Ord Sets <br />
        All Under 1499/-
      </p>

      {/* Filters */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4 mb-6">
        {["Price", "Discount", "Color", "Category", "Fabric", "Size"].map((filter, i) => (
          <Select key={i}>
            <SelectTrigger className="w-full border-gray-300 text-sm h-9 rounded-none">
              {filter}
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">Option 1</SelectItem>
              <SelectItem value="2">Option 2</SelectItem>
            </SelectContent>
          </Select>
        ))}
      </div>

      {/* Sort by */}
      <div className="flex justify-end mb-8">
        <div className="flex items-center gap-2 border px-3 py-2 rounded-none w-full max-w-xs">
          <ListFilter className="h-4 w-4" />
          <ArrowUpDown className="h-4 w-4" />
          <span className="text-sm">Sort by</span>
          <Select>
            <SelectTrigger className="border-0 text-sm font-semibold">
              Popularity
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="low-to-high">Price: Low to High</SelectItem>
              <SelectItem value="high-to-low">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
         <div
  key={product.id}
  onClick={() => handleProductClick(product.id)}
  className="rounded-none overflow-hidden cursor-pointer transition hover:shadow-md group border-[1px] border-gray-300 bg-white"
>
  <div className="relative w-full aspect-[3/4] ">
    <Image
      src={product.image}
      alt={product.title}
      fill
      className="object-cover transition-transform duration-300 group-hover:scale-105"
    />
  </div>
  <div className="p-4">
    <h2 className="text-sm font-medium line-clamp-2">{product.title}</h2>
    <p className="text-pink-600 font-semibold mt-2 text-sm">
      ₹{product.price}
      {product.originalPrice && (
        <span className="text-gray-400 line-through text-xs ml-2">
          ₹{product.originalPrice}
        </span>
      )}
      {product.discount && (
        <span className="ml-2 text-green-600 text-xs">{product.discount}</span>
      )}
    </p>
    <Button className="mt-4 w-full rounded-none bg-[#B76E79] text-white text-sm h-9">
      {product.label}
    </Button>
  </div>
</div>

        ))}
      </div>

      {/* Show More Button */}
      <div className="text-center mt-10">
        <Button className="bg-[#B76E79]  text-xl rounded-none px-8 py-3">Show More</Button>
      </div>

{/* Recently Viewed */}
<div className="mt-0 sm:mt-12 px-4 sm:px-0">
  <h2 className="text-xl font-semibold mb-4">RECENTLY VIEWED</h2>
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 ">
    {recentlyViewed.map((item, idx) => (
      <div key={idx} className="rounded-none overflow-hidden transition hover:shadow-md border border-gray-300">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h2 className="text-sm font-medium line-clamp-2">{item.title}</h2>
          <p className="text-pink-600 font-semibold mt-2 text-sm">₹{item.price}</p>
        </div>
      </div>
    ))}
  </div>
</div>
    </div>
  );
}
