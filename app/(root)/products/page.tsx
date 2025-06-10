import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select";
import { ArrowUpDown, ListFilter } from "lucide-react";
import Image from "next/image";

const products = [
  {
    title: "Black Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/images/product1.jpg",
    label: "BEST PICK",
  },
  {
    title: "Blue Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/images/product2.jpg",
    label: "BEST PICK",
  },
  {
    title: "Red Blossom Threadwork Cotton Suit",
    price: 1490,
    image: "/images/product3.jpg",
    label: "ADD TO CART",
  },
  {
    title: "Pink Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/images/product4.jpg",
    label: "ADD TO CART",
  },
  {
    title: "Blue Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/images/product5.jpg",
    label: "ADD TO CART",
  },
  {
    title: "Black Blossom Threadwork Cotton Kurti",
    price: 1430,
    originalPrice: 2380,
    discount: "40% OFF",
    image: "/images/product6.jpg",
    label: "ADD TO CART",
  },
];

const recentlyViewed = [
  {
    title: "Blue Botanical Box Cotton A Line Kurti set",
    price: 1699,
    image: "/images/recent1.jpg",
  },
  {
    title: "Pink Lush Blossom Cotton A Line Kurti set",
    price: 1699,
    image: "/images/recent2.jpg",
  },
  {
    title: "Pink Floral Printed Pakistani Lace Suit",
    price: 1699,
    image: "/images/recent3.jpg",
  },
];

export default function ProductListingPage() {
  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      {/* Header Filters Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">EVERYTHING UNDER ₹1499</h1>
        <p className="text-sm text-gray-700 mb-4">
          Dresses, Kurtis, Kurta Sets, Tunics & Co Ord Sets<br />All Under 1499/-
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-4">
          {['Price', 'Discount', 'Color', 'Category', 'Fabric', 'Size'].map((filter, i) => (
            <Select key={i}>
              <SelectTrigger className="w-full border-gray-400 text-sm">{filter}</SelectTrigger>
              <SelectContent>
                <SelectItem value="1">Option 1</SelectItem>
                <SelectItem value="2">Option 2</SelectItem>
              </SelectContent>
            </Select>
          ))}
        </div>

        <div className="flex justify-end">
          <div className="flex items-center gap-2 border px-3 py-2 rounded-md w-60">
            <ListFilter className="h-4 w-4" />
            <ArrowUpDown className="h-4 w-4" />
            <span className="text-sm">Sort by</span>
            <Select>
              <SelectTrigger className="border-0 text-sm font-semibold">Popularity</SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="low-to-high">Price: Low to High</SelectItem>
                <SelectItem value="high-to-low">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Product Listing Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, idx) => (
          <Card key={idx} className="rounded-2xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={400}
              className="object-cover w-full h-80"
            />
            <CardContent className="p-4">
              <h2 className="text-lg font-medium">{product.title}</h2>
              <p className="text-pink-600 font-semibold mt-2">
                ₹{product.price}
                {product.originalPrice && (
                  <span className="text-gray-400 line-through text-sm ml-2">
                    ₹{product.originalPrice}
                  </span>
                )}
                {product.discount && (
                  <span className="ml-2 text-green-600">{product.discount}</span>
                )}
              </p>
              <Button className="mt-4 w-full">{product.label}</Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recently Viewed Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {recentlyViewed.map((item, idx) => (
            <Card key={idx} className="rounded-2xl overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={300}
                height={400}
                className="object-cover w-full h-80"
              />
              <CardContent className="p-4">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="text-pink-600 font-semibold mt-2">₹{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
