import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const Page = () => {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-6">
      {/* Breadcrumb */}
      <nav className="text-xs text-gray-500">
        <span className="text-pink-500">HOME</span> | ACCOUNT | MY ORDERS
      </nav>

      {/* Product Section */}
      <Card>
        <CardContent className="flex flex-col items-center py-6">
          <img
            src="/img3.png"
            alt="Product"
            className="w-32 h-48 object-cover mb-4"
          />
          <h2 className="text-sm font-semibold text-center">
            BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET
          </h2>
          <p className="text-sm text-gray-600 mt-1">Size : L</p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <Button className="bg-green-600 hover:bg-green-700">Cancel Order</Button>
            <Button variant="outline">Update Address</Button>
          </div>

          {/* Delivery Info */}
          <Input
            disabled
            value="Will be Delivered  on 02 June"
            className="mt-6 text-center"
          />
        </CardContent>
      </Card>

      {/* Delivery Address */}
      <Card>
        <CardContent className="py-4 px-6">
          <h3 className="font-semibold mb-2">Delivery Address</h3>
          <p className="text-xs text-pink-500 font-medium">
            NAME SURNAME | 87512693214
          </p>
          <p className="text-sm text-gray-700">
            Address Address Address Address, Street, City-985142
          </p>
        </CardContent>
      </Card>

      {/* Price Summary */}
      <Card>
        <CardContent className="py-4 px-6">
          <h3 className="font-semibold mb-4">Total Order Price</h3>
          <div className="text-sm">
            <div className="flex justify-between">
              <span>Total MRP</span>
              <span>₹2,490</span>
            </div>
            <div className="flex justify-between text-green-600">
              <span>Discount on MRP</span>
              <span>-₹1,000</span>
            </div>
            <div className="flex justify-between">
              <span>Convenience Charges</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between">
              <span>Additional Discount</span>
              <span>₹0</span>
            </div>
            <div className="flex justify-between font-semibold border-t mt-2 pt-2">
              <span>You Pay</span>
              <span>₹1,490</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Payment Mode */}
      <Card>
        <CardContent className="py-2 px-6 flex justify-between text-sm">
          <span className="font-medium">Payment Mode</span>
          <span className="text-gray-800">Cash</span>
        </CardContent>
      </Card>
    </div>
  );
};

export default Page;
