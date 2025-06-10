import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const products = [
  {
    id: 1,
    image: "/images/black-shirt.jpg",
    title: "Black Blossom Threadwork Cotton Shirt",
    price: 1690,
    status: "available",
    sale: false,
  },
  {
    id: 2,
    image: "/images/blue-dress.jpg",
    title: "Black Blossom Threadwork Cotton Shirt",
    price: 1690,
    status: "available",
    sale: false,
  },
  {
    id: 3,
    image: "/images/red-dress.jpg",
    title: "Black Blossom Threadwork Cotton Shirt",
    price: 1690,
    status: "sold",
    sale: false,
  },
  {
    id: 4,
    image: "/images/pink-shirt.jpg",
    title: "Black Blossom Threadwork Cotton Shirt",
    price: 1690,
    status: "sold",
    sale: false,
  },
  {
    id: 5,
    image: "/images/green-shirt.jpg",
    title: "Black Blossom Threadwork Cotton Shirt",
    price: 1490,
    originalPrice: 2490,
    status: "available",
    sale: true,
  },
  {
    id: 6,
    image: "/images/brown-shirt.jpg",
    title: "Black Blossom Threadwork Cotton Shirt",
    price: 1490,
    originalPrice: 2490,
    status: "sold",
    sale: true,
  },
];

export default function Page() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">MY WISHLIST</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id} className="relative overflow-hidden">
            <button className="absolute top-2 right-2 z-10">
              <X className="w-4 h-4" />
            </button>
            <div className={`relative ${product.status === "sold" ? "opacity-50" : ""}`}>
              {product.status === "sold" && (
                <Badge className="absolute top-3 left-3 bg-gray-800 text-white">SOLD OUT</Badge>
              )}
              {product.sale && product.status !== "sold" && (
                <Badge className="absolute top-3 left-3 bg-green-600">ON SALE</Badge>
              )}
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-80 object-cover"
              />
            </div>
            <CardContent className="p-4">
              <p className="text-sm mb-2">{product.title}</p>
              <div className="mb-2">
                <span className="text-base font-medium">
                  ₹ {product.price.toLocaleString("en-IN")}
                </span>
                {product.sale && product.originalPrice && (
                  <>
                    <span className="line-through text-gray-500 ml-2">
                      ₹ {product.originalPrice.toLocaleString("en-IN")}
                    </span>
                    <span className="text-green-600 ml-2">40% Off</span>
                  </>
                )}
              </div>
              {product.status === "available" ? (
                <Button className="w-full bg-[#ad627e] hover:bg-[#944d68] text-white">
                  MOVE TO BAG
                </Button>
              ) : (
                <Button variant="outline" className="w-full">NOTIFY ME</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
