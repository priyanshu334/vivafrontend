"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trash2 } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";

const CartPage = () => {
  const cart = useCartStore((state) => state.cart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const totalAmount = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full mx-auto p-4 sm:p-6 lg:p-8">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">YOUR BAG</h2>
          <p className="text-gray-600 text-lg">{cart.length} ITEM{cart.length !== 1 ? "S" : ""}</p>
        </div>

        {/* Cart Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {/* Cart Items */}
          <div className="space-y-6">
            {cart.length === 0 ? (
              <p className="text-gray-500 text-center">Your cart is empty.</p>
            ) : (
              cart.map((item, index) => (
                <Card key={index} className="relative flex bg-white border-0 shadow-sm hover:shadow-md transition">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-40 h-50 object-cover rounded-l-lg"
                  />

                  <CardContent className="flex-1 p-4 space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-base font-medium text-gray-900 line-clamp-2">
                        {item.title}
                      </h3>
                      <Trash2
                        className="text-gray-400 hover:text-red-500 cursor-pointer w-5 h-5"
                        onClick={() => removeFromCart(item.title)}
                      />
                    </div>

                    <p className="text-lg font-bold text-gray-900">₹{item.price.toLocaleString()}</p>

                    {item.originalPrice && item.discount && (
                      <div className="flex items-center gap-2">
                        <span className="text-sm line-through text-gray-400">
                          ₹{item.originalPrice.toLocaleString()}
                        </span>
                        <Badge className="bg-green-100 text-green-600 font-medium px-2 py-0.5 rounded text-xs">
                          {item.discount}
                        </Badge>
                      </div>
                    )}

                    <div className="flex items-center gap-3 mt-2">
                      <span className="text-sm text-gray-600">Qty:</span>
                      <div className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() =>
                            updateQuantity(item.title, Math.max(item.quantity - 1, 1))
                          }
                        >
                          −
                        </Button>
                        <span className="text-sm font-medium px-2">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateQuantity(item.title, item.quantity + 1)}
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>

          {/* Summary */}
          <div className="bg-white rounded-lg p-6 shadow-md space-y-4 h-fit sticky top-20">
            <h3 className="text-xl font-semibold text-gray-900">PRICE DETAILS</h3>
            <div className="border-t pt-4 space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Total MRP</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Discount</span>
                <span className="text-green-600">− ₹0</span>
              </div>
              <div className="flex justify-between">
                <span>Delivery Charges</span>
                <span className="text-green-600">FREE</span>
              </div>
              <div className="border-t pt-4 flex justify-between font-bold text-base">
                <span>Total Amount</span>
                <span>₹{totalAmount.toLocaleString()}</span>
              </div>
            </div>
            <Button
              className="w-full bg-[#b36985] hover:bg-[#a25877] text-white font-medium h-11 rounded-lg shadow-sm hover:shadow-md"
              disabled={cart.length === 0}
            >
              PLACE ORDER
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
