"use client";

import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Package, Filter } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

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
  const [showFilter, setShowFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("1");
  const filterRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        setShowFilter(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-6 py-10 max-w-6xl mx-auto relative">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
          <Link href="/" className="text-pink-500 font-medium hover:text-pink-600">
            HOME
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/account" className="hover:text-gray-700">
            ACCOUNT
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-pink-500 font-medium">MY ORDERS</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 relative">
          <div className="flex items-center gap-3">
            <Package className="w-6 h-6 text-[#B76E79]" />
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">My Orders</h1>
          </div>
          <div className="relative" ref={filterRef}>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2 hover:bg-pink-50 hover:border-pink-200"
              onClick={() => setShowFilter((prev) => !prev)}
            >
              <Filter className="w-4 h-4" />
              Filter
            </Button>

            {/* Filter Dropdown */}
            {showFilter && (
              <div className="absolute right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
                {/* Status Filter */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3">Status</h3>
                  <RadioGroup
                    value={statusFilter}
                    onValueChange={setStatusFilter}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="all" id="status-all" />
                      <Label htmlFor="status-all" className="text-sm font-medium text-[#b36985]">
                        All
                      </Label>
                    </div>
                    {["In Transit", "Delivered", "Cancelled", "Returned"].map((status, i) => (
                      <div key={i} className="flex items-center space-x-3 text-gray-700">
                        <RadioGroupItem value={status} id={`status-${i}`} />
                        <Label htmlFor={`status-${i}`} className="text-sm">
                          {status}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Time Filter */}
                <div className="mb-6 border-t border-gray-200 pt-4">
                  <h3 className="text-sm font-semibold mb-3">Time</h3>
                  <RadioGroup
                    value={timeFilter}
                    onValueChange={setTimeFilter}
                    className="space-y-3"
                  >
                    <div className="flex items-center space-x-3">
                      <RadioGroupItem value="1" id="time-1" />
                      <Label htmlFor="time-1" className="text-sm font-medium text-[#b36985]">
                        1 Day
                      </Label>
                    </div>
                    {["7 Day", "30 Days", "6 Months", "Last Year"].map((time, i) => (
                      <div key={i} className="flex items-center space-x-3 text-gray-700">
                        <RadioGroupItem value={time} id={`time-${i}`} />
                        <Label htmlFor={`time-${i}`} className="text-sm">
                          {time}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-4">
                  <Button className="bg-[#b36985] text-white flex-1 hover:bg-[#a25877]">
                    Apply
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setStatusFilter("all");
                      setTimeFilter("1");
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Orders */}
        <div className="space-y-4">
          {orders.map((order, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-md transition-shadow duration-200 bg-white"
            >
              <CardContent className="p-0">
                <div className={`${order.bgColor} ${order.borderColor} border-l-4 px-4 sm:px-6 py-3`}>
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1">
                    <span className={`text-sm sm:text-base font-semibold ${order.color}`}>
                      {order.status}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-600">
                      {order.date}
                      {order.note && <span className="text-xs ml-1 italic">{order.note}</span>}
                    </span>
                  </div>
                </div>

                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <div className="flex-shrink-0 w-full sm:w-auto">
                      <img
                        src={order.image}
                        alt="product"
                        className="w-full sm:w-32 h-auto object-cover rounded-lg border border-gray-200 shadow-sm"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-gray-900 leading-tight mb-2">
                        BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500">
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
            className="px-8 bg-[#B76E79] text-white hover:text-white hover:bg-[#a15865] hover:border-pink-200"
          >
            Load More Orders
          </Button>
        </div>
      </main>
    </div>
  );
}
