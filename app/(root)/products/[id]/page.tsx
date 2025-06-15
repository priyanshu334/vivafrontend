"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, ShoppingCart, Star, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight, Plus, Minus } from "lucide-react";

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=500&h=600&fit=crop",
    "https://images.unsplash.com/photo-1560243563-062bfc001d68?w=500&h=600&fit=crop"
  ];

  const colorOptions = [
    { name: 'Black', color: '#000000', image: images[0] },
    { name: 'Navy', color: '#1e3a8a', image: images[1] },
    { name: 'Burgundy', color: '#7c2d12', image: images[2] },
    { name: 'Forest', color: '#166534', image: images[3] },
    { name: 'Charcoal', color: '#374151', image: images[4] }
  ];

  const sizes = ["S", "M", "L", "XL", "XXL"];

  const similarProducts = [
    { name: "Shades of Blue Cotton A Line Dress", price: 1490, image: images[1] },
    { name: "Elegant Black Midi Dress", price: 1690, image: images[0] },
    { name: "Floral Print Summer Dress", price: 1290, image: images[2] },
    { name: "Classic White Shirt Dress", price: 1590, image: images[3] }
  ];

  return (
    <div className="bg-white text-black min-h-screen">
      {/* Header with breadcrumb */}
      <div className="bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <p className="text-sm text-gray-600 flex items-center space-x-2">
            <span className="hover:text-black cursor-pointer">HOME</span>
            <span>/</span>
            <span className="hover:text-black cursor-pointer">EVERYTHING</span>
            <span>/</span>
            <span className="hover:text-black cursor-pointer">WOMEN'S FASHION</span>
            <span>/</span>
            <span className="text-black font-medium">BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Product Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-gray-50 group">
              <img 
                src={images[selectedImage]} 
                alt="Loungewear Set" 
                className="w-full h-[600px] object-cover transition-transform duration-300 group-hover:scale-105" 
              />
              <button 
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`flex-shrink-0 rounded-lg overflow-hidden transition-all ${
                    selectedImage === i ? 'ring-2 ring-black ring-offset-2' : 'hover:opacity-80'
                  }`}
                >
                  <img
                    src={img}
                    alt={`View ${i + 1}`}
                    className="w-20 h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold mb-3 leading-tight">BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET</h1>
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-600">(127 reviews)</span>
              </div>
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-green-700">₹ 1,490</span>
                <span className="text-xl text-gray-400 line-through">₹ 1,599</span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm font-medium">7% off</span>
              </div>
              <p className="text-sm text-gray-600 mt-1">MRP inclusive of all taxes</p>
            </div>

            {/* Color Selection */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Select Color</h3>
              <div className="flex space-x-3">
                {colorOptions.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => setSelectedImage(i)}
                    className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all ${
                      selectedImage === i ? 'ring-2 ring-black ring-offset-2' : 'hover:scale-105'
                    }`}
                  >
                    <img src={option.image} alt={option.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">Select Size</h3>
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">Size Guide</button>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3 px-4 rounded-lg border-2 transition-all font-medium ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                >
                  <Minus size={16} />
                </button>
                <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center hover:border-gray-400 transition-colors"
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full h-14 text-lg font-semibold bg-black hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart size={20} className="mr-2" /> 
                ADD TO BAG
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full h-14 text-lg font-semibold border-2 hover:bg-gray-50 transition-colors"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart size={20} className={`mr-2 ${isWishlisted ? 'fill-red-500 text-red-500' : ''}`} /> 
                {isWishlisted ? 'ADDED TO WISHLIST' : 'ADD TO WISHLIST'}
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t">
              <div className="text-center">
                <Truck size={24} className="mx-auto mb-2 text-gray-600" />
                <p className="text-sm font-medium">Free Shipping</p>
                <p className="text-xs text-gray-500">Above ₹999</p>
              </div>
              <div className="text-center">
                <RotateCcw size={24} className="mx-auto mb-2 text-gray-600" />
                <p className="text-sm font-medium">Easy Returns</p>
                <p className="text-xs text-gray-500">30 days</p>
              </div>
              <div className="text-center">
                <Shield size={24} className="mx-auto mb-2 text-gray-600" />
                <p className="text-sm font-medium">Secure Payment</p>
                <p className="text-xs text-gray-500">100% Safe</p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="details" className="text-lg">Product Details</TabsTrigger>
              <TabsTrigger value="care" className="text-lg">Care Instructions</TabsTrigger>
              <TabsTrigger value="shipping" className="text-lg">Shipping & Returns</TabsTrigger>
              <TabsTrigger value="reviews" className="text-lg">Reviews (127)</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">About This Product</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Experience ultimate comfort with our Black Collar Baroque Cotton Loungewear Set. 
                  Crafted from premium 100% cotton, this set features an elegant baroque pattern 
                  that adds sophistication to your relaxation time.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Premium 100% cotton fabric</li>
                  <li>• Baroque collar design</li>
                  <li>• Comfortable loose fit</li>
                  <li>• Breathable and skin-friendly</li>
                  <li>• Perfect for lounging and casual wear</li>
                </ul>
              </div>
            </TabsContent>
            
            <TabsContent value="care" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Care Instructions</h3>
                <div className="space-y-3 text-gray-700">
                  <p>• Machine wash cold with like colors</p>
                  <p>• Use mild detergent, avoid bleach</p>
                  <p>• Tumble dry low or hang to dry</p>
                  <p>• Iron on low heat if needed</p>
                  <p>• Do not dry clean</p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="shipping" className="mt-6">
              <div className="prose max-w-none">
                <h3 className="text-xl font-semibold mb-4">Shipping & Returns</h3>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-2">Shipping Information</h4>
                    <p className="text-gray-700 mb-2">• Free shipping on orders above ₹999</p>
                    <p className="text-gray-700 mb-2">• Standard delivery: 3-5 business days</p>
                    <p className="text-gray-700">• Express delivery: 1-2 business days</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Return Policy</h4>
                    <p className="text-gray-700 mb-2">• 30-day return window</p>
                    <p className="text-gray-700 mb-2">• Free returns for defective items</p>
                    <p className="text-gray-700">• Items must be in original condition</p>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews" className="mt-6">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold">4.8</div>
                  <div>
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-600">Based on 127 reviews</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((_, i) => (
                    <div key={i} className="border-b pb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="flex">
                          {[...Array(5)].map((_, j) => (
                            <Star key={j} size={16} className="fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="font-medium">Sarah M.</span>
                        <span className="text-gray-500 text-sm">Verified Purchase</span>
                      </div>
                      <p className="text-gray-700">
                        Amazing quality and super comfortable! The fabric is soft and the fit is perfect. 
                        Highly recommend for anyone looking for comfortable loungewear.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Similar Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similarProducts.map((product, i) => (
              <Card key={i} className="group cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                    <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart size={16} />
                    </button>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-sm mb-2 line-clamp-2">{product.name}</h3>
                    <p className="text-lg font-bold">₹ {product.price.toLocaleString()}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}