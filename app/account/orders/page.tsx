"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package, Filter } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const orders = [
  {
    status: "In Transit",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    date: "Wed, 27 May 2025",
    note: "",
    image: "/img3.png",
  },
  {
    status: "Delivered",
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    date: "Wed, 27 May 2025",
    note: "",
    image: "/img3.png",
  },
  {
    status: "Cancelled",
    color: "text-red-600",
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    date: "Wed, 27 May 2025",
    note: ", as per your request",
    image: "/img3.png",
  },
  {
    status: "Returned",
    color: "text-gray-600",
    bgColor: "bg-gray-50",
    borderColor: "border-gray-200",
    date: "Wed, 27 May 2025",
    note: "",
    image: "/img3.png",
  },
];

export default function MyOrders() {
  const pathname = usePathname();

  const tabs = [
    { name: "My Profile", href: "/account" },
    { name: "Wishlist", href: "/account/wishlist" },
    { name: "Orders", href: "/account/orders" },
    { name: "My Address", href: "/account/addresses" },
    { name: "Track Order", href: "/account/trackorder" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      {/* Tabs */}
      <div className="max-w-5xl mx-auto px-4 mb-6">
        <div className="bg-white rounded-xl shadow-sm border p-3 flex flex-wrap gap-2 justify-start sm:justify-between">
          {tabs.map((tab) => (
            <Link
              key={tab.href}
              href={tab.href}
              className={cn(
                "text-sm font-semibold px-4 py-2 rounded-full transition-all",
                pathname === tab.href
                  ? "bg-[#B76E79] text-white shadow"
                  : "bg-gray-100 text-gray-700 hover:bg-[#f7d9dc]"
              )}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Page Content */}
      <div className="max-w-5xl mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="text-pink-500 font-medium hover:text-pink-600">HOME</Link>
          <span className="mx-2">•</span>
          <Link href="/account" className="hover:text-gray-700">ACCOUNT</Link>
          <span className="mx-2">•</span>
          <span className="text-pink-500 font-medium">MY ORDERS</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-[#B76E79]" />
            <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 hover:bg-pink-50 hover:border-pink-200"
          >
            <Filter className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {orders.map((order, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <CardContent className="p-0">
                {/* Status Banner */}
                <div className={`${order.bgColor} ${order.borderColor} border-l-4 px-6 py-3`}>
                  <div className="flex justify-between items-center">
                    <span className={`text-base font-semibold ${order.color}`}>
                      {order.status}
                    </span>
                    <span className="text-sm text-gray-600 capitalize">
                      {order.date}
                      {order.note && (
                        <span className="text-xs ml-1 italic">{order.note}</span>
                      )}
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-shrink-0">
                      <img
                        src={order.image}
                        alt="product"
                        className="w-24 h-28 rounded-lg object-cover border border-gray-200 shadow-sm"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 leading-tight mb-2">
                        BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded-full text-xs font-medium">
                          Size: L
                        </span>
                        <span className="text-xs">Order #12345</span>
                      </div>
                    </div>

                    <div className="flex-shrink-0 self-center">
                      <ChevronRight className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button
            variant="outline"
            className="px-8 bg-[#B76E79] text-white hover:text-white hover:bg-[#B76E79] hover:border-pink-200"
          >
            Load More Orders
          </Button>
        </div>
      </div>
    </div>
  );
}
