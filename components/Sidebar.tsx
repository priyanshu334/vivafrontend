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
  { label: "My Profile", icon: <UserCircle className="w-5 h-5" />, href: "#", active: true },
  { label: "My Wishlist", icon: <Heart className="w-5 h-5" />, href: "#" },
  { label: "My Orders", icon: <Lock className="w-5 h-5" />, href: "#" },
  { label: "My Addresses", icon: <MapPin className="w-5 h-5" />, href: "#" },
  { label: "Track Order", icon: <PackageSearch className="w-5 h-5" />, href: "#" },
  { label: "Logout", icon: <LogOut className="w-5 h-5" />, href: "#" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-gray-200 bg-white h-full min-h-screen p-6">
      <div className="mb-8">
        <h2 className="text-xl font-bold">ACCOUNT</h2>
        <p className="text-gray-500">Xyz Name</p>
      </div>

      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              "flex items-center gap-3 px-4 py-3 border border-transparent hover:bg-gray-50 transition-all",
              item.active
                ? "border-gray-200 bg-gray-100 text-pink-600 font-medium"
                : "text-black"
            )}
          >
            {item.icon}
            <span className={item.active ? "text-sm font-semibold" : "text-sm"}>
              {item.label}
            </span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
