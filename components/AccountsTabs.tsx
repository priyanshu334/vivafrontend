// app/components/AccountTabs.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Heart, 
  ShoppingBag, 
  MapPin, 
  Truck, 
  LogOut
} from "lucide-react";

export default function AccountTabs() {
  const pathname = usePathname();

  const handleLogout = () => {
    // Your logout logic here
    alert("Logged out!");
  };

  const tabs = [
    {
      id: "profile",
      label: "My Profile",
      href: "/account/profile",
      icon: User
    },
    {
      id: "wishlist",
      label: "My Wishlist",
      href: "/account/wishlist",
      icon: Heart
    },
    {
      id: "orders",
      label: "My Orders",
      href: "/account/orders",
      icon: ShoppingBag
    },
    {
      id: "address",
      label: "My Address",
      href: "/account/address",
      icon: MapPin
    },
    {
      id: "track",
      label: "Track Order",
      href: "/account/track",
      icon: Truck
    }
  ];

  return (
    <div className="max-w-6xl mx-auto mt-8 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Account</h1>
        <p className="text-gray-600">Manage your account settings and preferences</p>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between p-4 bg-gradient-to-r from-pink-50 to-purple-50 border-b border-gray-100">
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = pathname === tab.href;
              
              return (
                <Link
                  key={tab.id}
                  href={tab.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-pink-500 text-white shadow-md"
                      : "bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-700 border border-gray-200"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.label.split(" ")[1] || tab.label}</span>
                </Link>
              );
            })}
          </div>
          
          <Button 
            variant="destructive" 
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white"
          >
            <LogOut className="h-4 w-4" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
    </div>
  );
}