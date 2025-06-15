// components/Footer.tsx
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Your Brand</h2>
              <p className="text-gray-600 leading-relaxed text-sm">
                Discover timeless elegance with our curated collection of premium fashion pieces crafted for the modern woman.
              </p>
            </div>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gradient-to-r from-[#b36985] to-[#a25877] text-white p-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-bold text-gray-900 tracking-wide uppercase mb-6 text-sm">Explore</h3>
            <ul className="space-y-4">
              <li>
                <a href="/about" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/careers" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  Careers
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="font-bold text-gray-900 tracking-wide uppercase mb-6 text-sm">Information</h3>
            <ul className="space-y-4">
              <li>
                <a href="/shipping-policy" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/return-policy" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/track-order" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  Track Your Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-gray-900 tracking-wide uppercase mb-6 text-sm">Get In Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-[#b36985] mt-1 flex-shrink-0" />
                <p className="text-gray-600 text-sm leading-relaxed">
                  123 Fashion Street<br />
                  Mumbai, Maharashtra 400001
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#b36985] flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-[#b36985] flex-shrink-0" />
                <a href="mailto:hello@yourbrand.com" className="text-gray-600 hover:text-[#b36985] transition-colors duration-200 text-sm font-medium">
                  hello@yourbrand.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-gray-200 py-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Stay Updated</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Subscribe to our newsletter for the latest fashion trends and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#b36985] focus:border-transparent text-sm"
              />
              <button className="bg-gradient-to-r from-[#b36985] to-[#a25877] text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300 whitespace-nowrap text-sm">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © 2025 Your Brand. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/sitemap" className="text-gray-500 hover:text-[#b36985] transition-colors duration-200 text-sm">
                Sitemap
              </a>
              <a href="/accessibility" className="text-gray-500 hover:text-[#b36985] transition-colors duration-200 text-sm">
                Accessibility
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-[#b36985] transition-colors duration-200 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}