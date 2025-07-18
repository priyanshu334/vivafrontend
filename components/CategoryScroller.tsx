"use client";
import { useRef } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "UNDER 1499", image: "/img2.png" },
  { label: "FESTIVE", image: "/img2.png" },
  { label: "SUIT SETS", image: "/img2.png", badge: "New" },
  { label: "CO-ORDS", image: "/img2.png" },
  { label: "KURTA SETS", image: "/img2.png" },
  { label: "DRESSES", image: "/img2.png" },
  { label: "NURSING FRIENDLY", image: "/img2.png" },
  { label: "SHARARA SETS", image: "/img2.png" },
  { label: "SALE", image: "/img2.png", badge: "Sale" },
  { label: "KURTA SETS", image: "/img2.png" },
  { label: "DRESSES", image: "/img2.png" },
  { label: "NURSING FRIENDLY", image: "/img2.png" },
  { label: "SHARARA SETS", image: "/img2.png" },
  { label: "SALE", image: "/img2.png", badge: "Sale" },
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
    <div className="w-full  ">
      {/* Top Banner */}
      <div className="flex justify-between bg-[#B76E79] text-white text-xs sm:text-sm uppercase px-4 sm:px-8 py-3 font-semibold tracking-wide shadow-sm">
        <span className="flex items-center">
      
          Free Shipping
        </span>
        <span className="flex items-center">
        
          COD Available
        </span>
        <span className="flex items-center">
          
          Worldwide Shipping
        </span>
      </div>

      {/* Scrollable Categories */}
      <div className="relative bg-gradient-to-b from-gray-50 to-white py-2">
        {/* Left Arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-lg rounded-full hidden sm:flex hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="text-pink-500 w-5 h-5" />
        </Button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto scroll-smooth px-4 sm:px-4 gap-2 sm:gap-1 scrollbar-hide"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="group min-w-[150px] sm:min-w-[150px] flex-shrink-0 bg-white border-[0.5px] border-gray-700 rounded-sm overflow-hidden shadow-sm hover:shadow-xl hover:border-rose-200 transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
            >
              <div className="relative w-full h-56 sm:h-78 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                <img
                  src={cat.image}
                  alt={cat.label}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                />
                {cat.badge && (
                  <Badge 
                    className={`absolute top-3 left-3 text-white text-xs font-semibold px-2 py-1 shadow-md ${
                      cat.badge === "Sale" 
                        ? "bg-gradient-to-r from-green-500 to-green-600" 
                        : "bg-gradient-to-r from-blue-500 to-blue-600"
                    }`}
                  >
                    {cat.badge}
                  </Badge>
                )}
              </div>
              <div className="px-3 py-4">
                <div
                  className={`text-xs sm:text-sm uppercase text-center font-semibold tracking-wide transition-colors duration-300 ${
                    cat.badge === "Sale" 
                      ? "text-green-600 group-hover:text-green-700" 
                      : "text-gray-700 group-hover:text-rose-600"
                  }`}
                >
                  {cat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Arrow */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm shadow-lg rounded-full hidden sm:flex hover:bg-white hover:shadow-xl transition-all duration-300 border border-gray-100"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="text-pink-500 w-5 h-5" />
        </Button>
      </div>

      {/* Custom CSS to hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}