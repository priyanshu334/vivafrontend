"use client";

import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "UNDER 1499", image: "/images/cat1.jpg" },
  { label: "FESTIVE", image: "/images/cat2.jpg" },
  { label: "SUIT SETS", image: "/images/cat3.jpg", badge: "New" },
  { label: "CO-ORDS", image: "/images/cat4.jpg" },
  { label: "KURTA SETS", image: "/images/cat5.jpg" },
  { label: "DRESSES", image: "/images/cat6.jpg" },
  { label: "NURSING FRIENDLY", image: "/images/cat7.jpg" },
  { label: "SHARARA SETS", image: "/images/cat8.jpg" },
  { label: "SALE", image: "/images/cat1.jpg", badge: "Sale" },
];

export default function CategoryScroller() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      const amount = dir === "left" ? -300 : 300;
      scrollRef.current.scrollBy({ left: amount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full mb-10">
      {/* Top Banner */}
      <div className="flex justify-between bg-rose-300 text-white text-xs sm:text-sm uppercase px-4 sm:px-8 py-2 font-medium tracking-wide">
        <span>Free Shipping</span>
        <span>COD Available</span>
        <span>Worldwide Shipping</span>
      </div>

      {/* Scrollable Categories */}
      <div className="relative">
        {/* Left Arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-1 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full hidden sm:flex"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="text-pink-500" />
        </Button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth px-2 py-4 gap-2 sm:gap-4 no-scrollbar"
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group min-w-[140px] sm:min-w-[160px] flex-shrink-0 border border-gray-200 rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-full h-56 sm:h-64">
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {cat.badge && (
                  <Badge className="absolute top-2 left-2 bg-green-500 text-white text-xs">{cat.badge}</Badge>
                )}
              </div>
              <div
                className={`text-xs sm:text-sm uppercase text-center py-2 font-medium ${
                  cat.badge === "Sale" ? "text-green-600" : "text-gray-700"
                }`}
              >
                {cat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-1 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md rounded-full hidden sm:flex"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="text-pink-500" />
        </Button>
      </div>
    </div>
  );
}
