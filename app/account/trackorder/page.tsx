'use client'

import { useState } from 'react'
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function TrackOrderPage() {
  const [searchBy, setSearchBy] = useState<'order' | 'awb'>('order')
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(`Searching by ${searchBy.toUpperCase()} with value: ${inputValue}`)
    // Add API call or routing here
  }

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 border rounded-lg shadow-lg space-y-6">
      <div className="text-sm text-muted-foreground mb-2">
        <a href="#" className="hover:underline">Home</a> | <a href="#" className="hover:underline">Account</a> | <span className="font-medium">Track Order</span>
      </div>

      <h2 className="text-lg font-semibold uppercase tracking-wide">Track Status by the Shipment</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label className="text-sm font-medium">Search By :-</Label>
          <RadioGroup
            defaultValue="order"
            onValueChange={(val) => setSearchBy(val as 'order' | 'awb')}
            className="flex gap-6 mt-2"
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

        <Input
          placeholder={`Enter ${searchBy === 'order' ? 'Order ID' : 'AWB'} to Search`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <Button type="submit" className="w-full bg-rose-400 hover:bg-rose-500 text-white font-bold">
          Submit
        </Button>
      </form>
    </div>
  )
}
