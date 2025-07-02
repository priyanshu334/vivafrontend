'use client'

import { useState } from 'react'
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import {
  User,
  Mail,
  Phone,
  Calendar,
  Lock,
  Edit,
  Save,
  X,
  UserCircle
} from "lucide-react"

export default function ProfilePage() {
  const [gender, setGender] = useState("MALE")
  const [isEditing, setIsEditing] = useState(false)
  const pathname = usePathname()

  const tabs = [
    { name: "My Profile", href: "/profile" },
    { name: "Wishlist", href: "/account/wishlist" },
    { name: "Orders", href: "/account/orders" },
    { name: "My Address", href: "/account/addresses" },
    { name: "Track Order", href: "/account/trackorder" },
  ]


  return (
    <div className="flex flex-row min-h-screen bg-gray-50">
      <div className="flex-1 p-4 sm:p-6 overflow-auto">
        <div className="max-w-5xl mx-auto space-y-6">

       <div className="bg-white rounded-xl shadow-sm border p-4 flex flex-wrap gap-3 justify-start sm:justify-between">
  {tabs.map((tab) => {
    const isActive = pathname === tab.href;
    return (
      <Link
        key={tab.href}
        href={tab.href}
        className={cn(
          "text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200",
          isActive
            ? "bg-[#B76E79] text-white shadow-md"
            : "bg-gray-100 text-gray-700 hover:bg-[#f7d9dc]"
        )}
      >
        {tab.name}
      </Link>
    );
  })}
</div>
  

          {/* Breadcrumb */}
          <nav className="text-sm text-muted-foreground bg-white rounded-lg px-4 py-3 border shadow-sm">
            <div className="flex flex-wrap items-center space-x-2">
              <Link href="/" className="text-pink-400 hover:text-pink-500 transition-colors">HOME</Link>
              <span>|</span>
              <Link href="/account" className="text-pink-400 hover:text-pink-500 transition-colors">ACCOUNT</Link>
              <span>|</span>
              <span className="text-gray-600 font-medium">MY PROFILE</span>
            </div>
          </nav>

          {/* Profile Header */}
          <div className="bg-white rounded-xl border shadow-sm p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#B76E79] rounded-full flex items-center justify-center">
                  <UserCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">My Profile</h1>
                  <p className="text-gray-500">Manage your personal information</p>
                </div>
              </div>
              <Button 
                variant="outline" 
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center gap-2 hover:bg-pink-50 hover:border-pink-300"
              >
                <Edit className="w-4 h-4" />
                {isEditing ? 'Cancel Edit' : 'Edit Profile'}
              </Button>
            </div>
          </div>

          {/* Contact Information */}
          <section className="bg-white rounded-xl border shadow-sm">
            <div className="border-b border-gray-100 p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#B76E79]" />
                <h2 className="font-bold text-xl text-gray-900">CONTACT INFORMATION</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-500" />
                    Email Address
                  </Label>
                  <Input 
                    placeholder="Enter your email" 
                    defaultValue="854vfdgsnssbbsz@gmail.com"
                    disabled={!isEditing}
                    className="h-11 border-gray-200 focus:border-pink-400 focus:ring-pink-400 disabled:bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    Phone Number
                  </Label>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Select defaultValue="INDIA" disabled={!isEditing}>
                      <SelectTrigger className="sm:w-32 h-11 border-gray-200 focus:border-pink-400 disabled:bg-gray-50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="INDIA">🇮🇳 India</SelectItem>
                        <SelectItem value="USA">🇺🇸 USA</SelectItem>
                        <SelectItem value="UK">🇬🇧 UK</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input 
                      placeholder="Phone number" 
                      defaultValue="8523654783"
                      disabled={!isEditing}
                      className="flex-1 h-11 border-gray-200 focus:border-pink-400 focus:ring-pink-400 disabled:bg-gray-50"
                    />
                  </div>
                </div>
              </div>

              {isEditing && (
                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <Button className="bg-rose-400 hover:bg-rose-500 text-white px-6 flex items-center gap-2">
                    <Save className="w-4 h-4" />
                    SAVE CHANGES
                  </Button>
                </div>
              )}
            </div>
          </section>

          {/* Primary Information */}
          <section className="bg-white rounded-xl border shadow-sm">
            <div className="border-b border-gray-100 p-4 sm:p-6">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-pink-400" />
                <h2 className="font-bold text-xl text-gray-900">PRIMARY INFORMATION</h2>
              </div>
            </div>
            <div className="p-4 sm:p-6 space-y-6">
              {/* Name */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">First Name</Label>
                  <Input 
                    placeholder="Enter first name"
                    disabled={!isEditing}
                    className="h-11 border-gray-200 focus:border-pink-400 focus:ring-pink-400 disabled:bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-sm font-medium text-gray-700">Last Name</Label>
                  <Input 
                    placeholder="Enter last name"
                    disabled={!isEditing}
                    className="h-11 border-gray-200 focus:border-pink-400 focus:ring-pink-400 disabled:bg-gray-50"
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700">Gender</Label>
                <div className="flex flex-wrap gap-3">
                  {["MALE", "FEMALE", "OTHER"].map((g) => (
                    <Button
                      key={g}
                      variant={gender === g ? "default" : "outline"}
                      className={cn(
                        "px-6 py-2 transition-all duration-200",
                        gender === g 
                          ? "bg-[#B76E79] hover:bg-rose-500 text-white shadow-md" 
                          : "border-gray-200 hover:bg-pink-50 hover:border-pink-300",
                        !isEditing && "opacity-60 cursor-not-allowed"
                      )}
                      onClick={() => isEditing && setGender(g)}
                      disabled={!isEditing}
                    >
                      {g}
                    </Button>
                  ))}
                </div>
              </div>

              {/* DOB */}
              <div className="space-y-3">
                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  Date of Birth
                </Label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-500">Day</Label>
                    <Select defaultValue="19" disabled={!isEditing}>
                      <SelectTrigger className="h-11 border-gray-200 focus:border-pink-400 disabled:bg-gray-50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(31)].map((_, i) => (
                          <SelectItem key={i + 1} value={`${i + 1}`}>{i + 1}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-500">Month</Label>
                    <Select defaultValue="09" disabled={!isEditing}>
                      <SelectTrigger className="h-11 border-gray-200 focus:border-pink-400 disabled:bg-gray-50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(12)].map((_, i) => (
                          <SelectItem key={i + 1} value={`${(i + 1).toString().padStart(2, '0')}`}>
                            {(i + 1).toString().padStart(2, '0')}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1">
                    <Label className="text-xs text-gray-500">Year</Label>
                    <Select defaultValue="1984" disabled={!isEditing}>
                      <SelectTrigger className="h-11 border-gray-200 focus:border-pink-400 disabled:bg-gray-50">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(100)].map((_, i) => {
                          const year = 2025 - i
                          return <SelectItem key={year} value={`${year}`}>{year}</SelectItem>
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                <Label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-gray-500" />
                  Password
                </Label>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <Input 
                    type="password" 
                    defaultValue="********"
                    disabled
                    className="flex-1 h-11 border-gray-200 bg-white disabled:bg-gray-100"
                  />
                  <Button 
                    variant="ghost" 
                    className="text-[#B76E79] hover:text-rose-500 hover:bg-rose-50 px-4 whitespace-nowrap"
                  >
                    Change Password
                  </Button>
                </div>
                <p className="text-xs text-gray-500">Last updated 30 days ago</p>
              </div>

              {/* Action Buttons */}
              {isEditing && (
                <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
                  <Button 
                    className="bg-rose-400 hover:bg-rose-500 text-white px-8 py-3 h-auto flex items-center gap-2 shadow-sm transition-all duration-200 hover:shadow-md"
                  >
                    <Save className="w-4 h-4" />
                    UPDATE PROFILE
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsEditing(false)}
                    className="px-8 py-3 h-auto flex items-center gap-2 border-gray-300 hover:bg-gray-50 transition-all duration-200"
                  >
                    <X className="w-4 h-4" />
                    CANCEL
                  </Button>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
