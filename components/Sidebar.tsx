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
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "My Profile",
    icon: UserCircle,
    href: "/account",
  },
  {
    label: "My Wishlist",
    icon: Heart,
    href: "/wishlist",
  },
  {
    label: "My Orders",
    icon: Lock,
    href: "/account/orders",
  },
  {
    label: "My Addresses",
    icon: MapPin,
    href: "/account/addresses",
  },
  {
    label: "Track Order",
    icon: PackageSearch,
    href: "/account/trackorder",
  },
  {
    label: "Logout",
    icon: LogOut,
    href: "/login",
    danger: true,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden sm:block w-64 lg:w-72 bg-white border-r p-4 lg:p-6 space-y-6">
      <div>
        <h1 className="text-xl lg:text-xl font-bold uppercase">Account</h1>
        <p className="text-gray-600 mt-1 text-sm lg:text-base">Xyz Name</p>
      </div>

      <nav className="space-y-1 text-sm ">
        {navItems.map(({ label, icon: Icon, href, danger }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 lg:px-4 lg:py-3 rounded-md transition-colors",
                isActive
                  ? "bg-[#B76E79] text-white "
                  : danger
                  ? "text-red-500 hover:bg-red-50"
                  : "text-gray-700 hover:bg-gray-100"
              )}
            >
              <Icon className="w-5 h-5 lg:w-6 lg:h-6" />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
