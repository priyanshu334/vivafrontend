import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import CategoryScroller from "@/components/CategoryScroller";

export default function ProductPage() {
  return (
    <div className="bg-white text-black px-6 py-10 max-w-[1440px] mx-auto">
      {/* Breadcrumb */}

      <p className="text-sm text-gray-500 mb-4">
        HOME / EVERYTHING / WOMEN'S FASHION / BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET
      </p>

      {/* Product Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div>
          <Image src="/product-main.jpg" alt="Loungewear Set" width={500} height={600} className="rounded-xl" />
          <div className="flex space-x-2 mt-4">
            {[...Array(5)].map((_, i) => (
              <Image
                key={i}
                src={`/product-thumb-${i + 1}.jpg`}
                alt={`Thumbnail ${i + 1}`}
                width={80}
                height={100}
                className="border rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-xl font-bold mb-2">BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET</h1>
          <p className="text-green-700 font-semibold text-lg mb-2">₹ 1490 <span className="line-through text-gray-400 ml-2">₹ 1599</span> 7% off</p>
          <p className="text-sm text-gray-600 mb-4">MRP inclusive of all taxes</p>

          <div className="mb-4">
            <p className="font-medium">Select Color</p>
            <div className="flex space-x-2 mt-2">
              {[...Array(5)].map((_, i) => (
                <Image
                  key={i}
                  src={`/product-color-${i + 1}.jpg`}
                  alt={`Color option ${i + 1}`}
                  width={50}
                  height={50}
                  className="border rounded-md"
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <p className="font-medium">Select Size <span className="text-blue-500 text-sm ml-2 cursor-pointer">Size chart</span></p>
            <div className="flex gap-2 mt-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <div key={size} className="border px-3 py-1 rounded cursor-pointer hover:bg-gray-100">
                  {size}
                </div>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <p className="font-medium">Quantity:</p>
            <input type="number" defaultValue={1} min={1} className="w-20 mt-2 border rounded p-1" />
          </div>

          <div className="flex gap-4 mb-4">
            <Button className="flex gap-2"><ShoppingCart size={16} /> ADD TO BAG</Button>
            <Button variant="outline" className="flex gap-2"><Heart size={16} /> ADD TO WISHLIST</Button>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {['About This Product', 'Fabric', 'Care', 'Disclaimer', 'Shipping & Returns', 'Reviews'].map((title) => (
              <AccordionItem value={title} key={title}>
                <AccordionTrigger>{title}</AccordionTrigger>
                <AccordionContent>
                  Content for {title}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Similar Products */}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4">SIMILAR PRODUCTS</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-2">
                <Image src={`/similar-${i + 1}.jpg`} alt="Similar Product" width={300} height={400} className="rounded-md" />
                <p className="mt-2 text-sm font-medium">Shades of Blue Cotton A Line Dress</p>
                <p className="text-sm">₹ 1490</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Recently Viewed */}
      <section className="mt-10">
        <h2 className="text-lg font-bold mb-4">RECENTLY VIEWED</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <Card key={i}>
              <CardContent className="p-2">
                <Image src={`/recent-${i + 1}.jpg`} alt="Recently Viewed" width={300} height={400} className="rounded-md" />
                <p className="mt-2 text-sm font-medium">Product Title</p>
                <p className="text-sm">₹ 1790</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
