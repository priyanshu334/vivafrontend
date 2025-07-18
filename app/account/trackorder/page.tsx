"use client"

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import Sidebar from '@/components/Sidebar'

export default function TrackOrderPage() {
  const [searchBy, setSearchBy] = useState<'order' | 'awb'>('order')
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Searching by ${searchBy.toUpperCase()} with value: ${inputValue}`)
    // Add API call or routing here
  }

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-4 py-10 flex flex-col items-center">
        {/* Breadcrumbs outside the card */}
                <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
          <Link
            href="/"
            className="text-pink-500 font-medium hover:text-pink-600"
          >
            HOME
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/account" className="hover:text-gray-700">
            ACCOUNT
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-pink-500 font-medium">Track Order</span>
        </nav>

        {/* Card */}
        <div className="w-full max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow border">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">
            Track Your Shipment
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-2 block">Search By:</Label>
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

            <div>
              <Input
                placeholder={`Enter ${searchBy === 'order' ? 'Order ID' : 'AWB'} to search`}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-[#B76E79] hover:bg-[#a85a66] text-white font-semibold rounded-none"
            >
              Submit
            </Button>
          </form>
        </div>
      </main>
    </div>
  )
}
