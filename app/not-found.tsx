
"use client";
import { Button } from "@/components/ui/button";
import { Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Animated 404 */}
        <div className="relative mb-8">
          <h1 className="text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 animate-pulse">
            404
          </h1>
          <div className="absolute inset-0 text-9xl md:text-[12rem] font-black text-slate-200 -z-10 translate-x-1 translate-y-1">
            404
          </div>
        </div>

        {/* Main Message */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-lg text-slate-600 mb-2">
            The page you're looking for seems to have wandered off.
          </p>
          <p className="text-slate-500">
            Don't worry, it happens to the best of us!
          </p>
        </div>

        {/* Illustration */}
        <div className="mb-12">
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20 animate-ping"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute inset-8 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full flex items-center justify-center">
              <Search className="w-16 h-16 text-white animate-bounce" />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Button>
          
          <Button 
            variant="outline"
            className="border-2 border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Go Back
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-500 mb-4">You might be looking for:</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
              Products
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
              Categories
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
              About Us
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200">
              Contact
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden -z-10">
          <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-6 h-6 bg-purple-400 rounded-full opacity-40 animate-float-delayed"></div>
          <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-indigo-400 rounded-full opacity-50 animate-float-slow"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(90deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}