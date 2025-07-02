'use client'

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function TrackOrderPage() {
  const [searchBy, setSearchBy] = useState<'order' | 'awb'>('order')
  const [inputValue, setInputValue] = useState('')
  const pathname = usePathname()

  const tabs = [
    { name: "My Profile", href: "/account" },
    { name: "Wishlist", href: "/account/wishlist" },
    { name: "Orders", href: "/account/orders" },
    { name: "My Address", href: "/account/addresses" },
    { name: "Track Order", href: "/account/trackorder" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Searching by ${searchBy.toUpperCase()} with value: ${inputValue}`)
    // Add API call or routing here
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Navigation Tabs */}
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border p-4 flex flex-wrap gap-3 justify-start sm:justify-between mb-8">
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

      {/* Main Container */}
      <div className="max-w-xl mx-auto bg-white p-6 border rounded-xl shadow space-y-6">
        {/* Breadcrumbs */}
        <div className="text-sm text-muted-foreground mb-2">
          <Link href="/" className="hover:underline">Home</Link> &gt;{" "}
          <Link href="/account" className="hover:underline">Account</Link> &gt;{" "}
          <span className="font-medium text-foreground">Track Order</span>
        </div>

        <h2 className="text-xl font-bold tracking-wide text-foreground">
          Track Your Shipment
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label className="text-sm font-medium">Search By:</Label>
            <RadioGroup
              defaultValue="order"
              onValueChange={(val) => setSearchBy(val as 'order' | 'awb')}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="order" id="order-id" />
                <Label htmlFor="order-id">Order ID</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="awb" id="awb" />
                <Label htmlFor="awb">AWB</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-1">
            <Input
              placeholder={`Enter ${searchBy === 'order' ? 'Order ID' : 'AWB'} to search`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#B76E79] hover:bg-[#a85a66] text-white font-semibold"
          >
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
