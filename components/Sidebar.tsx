"use client";

import {
  UserCircle,
  Heart,
  Lock,
  MapPin,
  PackageSearch,
  LogOut,
} from "lucide-react";

import Link from "next/link";
import { cn } from "@/lib/utils"; // shadcn helper

const navItems = [
  { label: "My Profile", icon: <UserCircle className="w-5 h-5" />, href: "/account", active: true },
  { label: "My Wishlist", icon: <Heart className="w-5 h-5" />, href: "/wishlist" },
  { label: "My Orders", icon: <Lock className="w-5 h-5" />, href: "/account/orders" },
  { label: "My Addresses", icon: <MapPin className="w-5 h-5" />, href: "/account/addresses" },
  { label: "Track Order", icon: <PackageSearch className="w-5 h-5" />, href: "/account/trackorder" },
  { label: "Logout", icon: <LogOut className="w-5 h-5" />, href: "/login", danger: true },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-gradient-to-b from-white to-gray-50/50 border-r border-gray-200/80 h-full min-h-screen shadow-sm">
      {/* Header Section */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
            <UserCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gray-900">ACCOUNT</h2>
            <p className="text-sm text-gray-500">Welcome back!</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 border border-pink-100">
          <p className="text-sm font-medium text-gray-800">Xyz Name</p>
          <p className="text-xs text-gray-500 mt-1">Premium Member</p>
        </div>
      </div>

      {/* Navigation Section */}
      <nav className="p-4 space-y-2">
        {navItems.map((item, index) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "group flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all duration-200 ease-in-out relative overflow-hidden",
              item.active
                ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/25 transform scale-[1.02]"
                : item.danger
                ? "text-red-600 hover:bg-red-50 hover:text-red-700"
                : "text-gray-700 hover:bg-white hover:shadow-md hover:shadow-gray-200/50 hover:transform hover:scale-[1.01]"
            )}
          >
            {/* Background gradient for hover effect */}
            {!item.active && !item.danger && (
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            )}
            
            {/* Icon container */}
            <div className={cn(
              "relative z-10 p-2 rounded-lg transition-colors duration-200",
              item.active
                ? "bg-white/20"
                : item.danger
                ? "bg-red-100 group-hover:bg-red-200"
                : "bg-gray-100 group-hover:bg-gradient-to-br group-hover:from-pink-100 group-hover:to-purple-100"
            )}>
              <div className={cn(
                item.active
                  ? "text-white"
                  : item.danger
                  ? "text-red-600"
                  : "text-gray-600 group-hover:text-pink-600"
              )}>
                {item.icon}
              </div>
            </div>
            
            {/* Label */}
            <span className={cn(
              "relative z-10 font-medium transition-colors duration-200",
              item.active
                ? "text-white"
                : item.danger
                ? "text-red-600 group-hover:text-red-700"
                : "text-gray-700 group-hover:text-gray-900"
            )}>
              {item.label}
            </span>

            {/* Active indicator */}
            {item.active && (
              <div className="absolute right-3 w-2 h-2 bg-white rounded-full opacity-80" />
            )}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-gray-100">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-3 border border-blue-100">
          <p className="text-xs text-blue-800 font-medium">Need Help?</p>
          <p className="text-xs text-blue-600 mt-1">Contact our support team</p>
        </div>
      </div>
    </aside>
  );
}