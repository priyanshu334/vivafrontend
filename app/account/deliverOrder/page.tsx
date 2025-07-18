"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Sidebar from "@/components/Sidebar";

export default function OrderSummary() {
  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 py-10 max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-600 mb-4 space-x-2">
          <a href="/" className="underline text-pink-600 hover:text-pink-700">Home</a>
          <span>|</span>
          <a href="/account" className="underline text-pink-600 hover:text-pink-700">Account</a>
          <span>|</span>
          <a href="/account/orders" className="underline text-pink-600 hover:text-pink-700">My Orders</a>
        </nav>

        {/* Order Card */}
        <Card className="border mb-6">
          <CardContent className="flex flex-col items-center py-8">
            <Image
              src="/img3.png"
              alt="Black Collar Baroque Cotton Loungewear Set"
              width={150}
              height={150}
              className="rounded-md shadow-md"
            />
            <h2 className="mt-4 text-center font-semibold text-sm uppercase">
              Black Collar Baroque Cotton Loungewear Set
            </h2>
            <p className="text-sm mt-1">Size: L</p>

            <div className="bg-[#B76E79] text-white rounded-md px-6 py-2 mt-4 text-sm">
              Delivered on Wed, 27 May 2025
            </div>

            <div className="mt-4 text-sm bg-gray-100 w-full px-4 py-2 border border-gray-200 text-center">
              Return Window Closed on 02 June{" "}
              <span className="text-red-500 hover:underline cursor-pointer">
                Read Policy
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Delivery Address */}
        <section className="mb-6">
          <h3 className="font-semibold text-lg">Delivery Address</h3>
          <p className="text-sm text-rose-500 font-medium mt-2">
            NAME SURNAME | 87512693214
          </p>
          <p className="text-sm mt-1 text-gray-700">
            Address Address Address, Street, City - 985142
          </p>
        </section>

        {/* Price Details */}
        <section className="border rounded-md overflow-hidden">
          <div className="bg-gray-100 px-4 py-3 font-medium border-b">
            Total Order Price
          </div>
          <div className="p-4 text-sm space-y-2">
            <div className="flex justify-between font-semibold text-lg">
              <span>₹1,490.00</span>
              <span className="text-green-600 text-sm mt-1">Saving ₹1,000</span>
            </div>
            <div className="border-t pt-3 space-y-1">
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
            </div>
            <div className="flex justify-between pt-3 font-medium border-t">
              <span>You Pay</span>
              <span>₹1,490</span>
            </div>
          </div>
          <div className="bg-gray-100 px-4 py-3 text-sm border-t flex justify-between">
            <span>Payment Mode</span>
            <span className="font-medium">Cash</span>
          </div>
        </section>
      </main>
    </div>
  );
}
