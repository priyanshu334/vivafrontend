"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Home, Building, MapPinned, Save, X, Globe, Calendar } from "lucide-react";
import Link from "next/link";

export default function AddressForm() {
  const [addressType, setAddressType] = useState("home");

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-muted-foreground bg-gray-50 rounded-lg px-4 py-3 border mb-8">
        <div className="flex items-center space-x-2">
          <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
          <span>|</span>
          <Link href="/account" className="hover:text-primary transition-colors">ACCOUNT</Link>
          <span>|</span>
          <span className="text-rose-400 font-medium">MY ADDRESS</span>
        </div>
      </nav>

      {/* Main Form Container */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm">
        {/* Header */}
        <div className="border-b border-gray-100 p-6">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-[#B76E79]" />
            <h2 className="text-xl font-bold text-gray-900">MY ADDRESSES</h2>
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6 space-y-8">
          {/* Form Title */}
          <div className="flex items-center gap-3 pb-4 border-b border-gray-100">
            <MapPinned className="w-5 h-5 text-gray-600" />
            <h3 className="text-lg font-semibold text-gray-900">ADD NEW ADDRESS</h3>
          </div>

          {/* Location Fields */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="w-4 h-4 text-gray-500" />
              <Label className="text-sm font-medium text-gray-700">Location Details</Label>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Country</Label>
                <Select>
                  <SelectTrigger className="w-full h-11 border-gray-200 focus:border-rose-400 focus:ring-rose-400">
                    <SelectValue placeholder="Select Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="india">🇮🇳 India</SelectItem>
                    <SelectItem value="usa">🇺🇸 United States</SelectItem>
                    <SelectItem value="uk">🇬🇧 United Kingdom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">Pin Code</Label>
                <Input 
                  placeholder="Enter PIN code" 
                  className="h-11 border-gray-200 focus:border-rose-400 focus:ring-rose-400" 
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">City / Town</Label>
                <Input 
                  placeholder="Enter city or town" 
                  className="h-11 border-gray-200 focus:border-rose-400 focus:ring-rose-400" 
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm font-medium text-gray-700">State</Label>
                <Input 
                  placeholder="Enter state" 
                  className="h-11 border-gray-200 focus:border-rose-400 focus:ring-rose-400" 
                />
              </div>
            </div>
          </div>

          {/* Address Field */}
          <div className="space-y-2">
            <Label className="text-sm font-medium text-gray-700">Complete Address</Label>
            <Input 
              placeholder="House No., Building, Street, Area" 
              className="h-11 border-gray-200 focus:border-rose-400 focus:ring-rose-400" 
            />
            <p className="text-xs text-gray-500">Include landmark for easy delivery</p>
          </div>

          {/* Address Type Section */}
          <div className="space-y-4 bg-gray-50 rounded-lg p-4">
            <div className="flex items-center gap-2">
              <Home className="w-4 h-4 text-gray-600" />
              <Label className="text-sm font-semibold text-gray-700">Type of Address</Label>
            </div>
            
            <RadioGroup 
              defaultValue="home" 
              className="grid grid-cols-3 gap-4" 
              onValueChange={setAddressType}
            >
              <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                <RadioGroupItem value="home" id="home" className="text-rose-400" />
                <Label htmlFor="home" className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                  <Home className="w-4 h-4 text-gray-500" />
                  Home
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                <RadioGroupItem value="office" id="office" className="text-rose-400" />
                <Label htmlFor="office" className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                  <Building className="w-4 h-4 text-gray-500" />
                  Office
                </Label>
              </div>
              <div className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-white transition-colors">
                <RadioGroupItem value="other" id="other" className="text-rose-400" />
                <Label htmlFor="other" className="flex items-center gap-2 text-sm font-medium cursor-pointer">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  Other
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Office Weekend Services */}
          {addressType === 'office' && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 space-y-4 animate-in slide-in-from-top duration-200">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blue-600" />
                <p className="text-sm font-medium text-blue-900">Weekend Service Availability</p>
              </div>
              <p className="text-sm text-blue-700">Is weekend delivery available at your office?</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3 p-3 bg-white border border-blue-200 rounded-lg">
                  <Checkbox id="saturday" defaultChecked className="text-blue-600" />
                  <Label htmlFor="saturday" className="text-sm font-medium cursor-pointer">Open on Saturday</Label>
                </div>
                <div className="flex items-center space-x-3 p-3 bg-white border border-blue-200 rounded-lg">
                  <Checkbox id="sunday" className="text-blue-600" />
                  <Label htmlFor="sunday" className="text-sm font-medium cursor-pointer">Open on Sunday</Label>
                </div>
              </div>
            </div>
          )}

          {/* Default Address Option */}
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-center space-x-3">
              <Checkbox id="default-address" className="text-yellow-600" />
              <Label htmlFor="default-address" className="text-sm font-medium text-yellow-900 cursor-pointer">
                Set as Default Address
              </Label>
            </div>
            <p className="text-xs text-yellow-700 mt-2 ml-6">This address will be selected by default for future orders</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
            <Button 
              className="bg-[#B76E79] hover:bg-[#9e5964] text-white px-8 py-3 h-auto flex items-center gap-2 shadow-sm transition-all duration-200 hover:shadow-md"
            >
              <Save className="w-4 h-4" />
              SAVE ADDRESS
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-3 h-auto flex items-center gap-2 border-gray-300 hover:bg-gray-50 transition-all duration-200"
            >
              <X className="w-4 h-4" />
              CANCEL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}