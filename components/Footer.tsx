// components/Footer.tsx
import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-10 px-4 md:px-20 bg-white mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-700">
        {/* Explore */}
        <div>
          <h3 className="font-semibold tracking-widest uppercase mb-4">Explore</h3>
          <ul className="space-y-2">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/contact" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        {/* Information */}
        <div>
          <h3 className="font-semibold tracking-widest uppercase mb-4">Information</h3>
          <ul className="space-y-2">
            <li><a href="/shipping-policy" className="hover:underline">Shipping Policy</a></li>
            <li><a href="/privacy-policy" className="hover:underline">Privacy Policy</a></li>
            <li><a href="/return-policy" className="hover:underline">Return Policy</a></li>
            <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
            <li><a href="/track-order" className="hover:underline">Track Your Order</a></li>
          </ul>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="font-semibold tracking-widest uppercase mb-4">Connect With Us</h3>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:text-black">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
