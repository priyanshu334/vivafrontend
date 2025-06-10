"use client";
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddressForm() {
  const [addressType, setAddressType] = useState("home");

  return (
    <div className="w-full mt-5 mx-auto px-6 py-8 border rounded shadow space-y-6">
      <nav className="text-xs text-gray-500 uppercase tracking-wider mb-20">
        Home | Account | <span className="text-rose-400 font-medium">My Address</span>
      </nav>

      <h2 className="text-sm font-semibold border-b pb-2">MY ADDRESSES</h2>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">ADD NEW ADDRESS</h3>

        <div className="grid grid-cols-2 gap-4">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="INDIA" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="india">India</SelectItem>
            </SelectContent>
          </Select>

          <Input placeholder="Pin Code" className="w-full" />

          <Input placeholder="City / Town" className="w-full" />
          <Input placeholder="State" className="w-full" />
        </div>

        <Input placeholder="Address  (House No. Building, Street, Area)" className="w-full" />

        <div className="pt-2">
          <Label className="text-sm font-medium">Type of Address</Label>
          <RadioGroup defaultValue="home" className="flex gap-8 pt-2" onValueChange={setAddressType}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="home" id="home" />
              <Label htmlFor="home" className="text-sm">Home</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="office" id="office" />
              <Label htmlFor="office" className="text-sm">Office</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other" className="text-sm">Other</Label>
            </div>
          </RadioGroup>
        </div>

        {addressType === 'office' && (
          <div className="pt-2 space-y-2">
            <p className="text-sm">Is weekend service available at your office?</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="saturday" defaultChecked />
                <Label htmlFor="saturday" className="text-sm">Open on Saturday</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="sunday" />
                <Label htmlFor="sunday" className="text-sm">Open on Sunday</Label>
              </div>
            </div>
          </div>
        )}

        <div className="flex items-center space-x-2 pt-2">
          <Checkbox id="default-address" />
          <Label htmlFor="default-address" className="text-sm">Set as Default Address</Label>
        </div>

        <div className="flex gap-4 pt-4">
          <Button className="bg-rose-400 hover:bg-rose-500 text-white px-6">SAVE</Button>
          <Button variant="outline" className="px-6">CANCEL</Button>
        </div>
      </div>
    </div>
  );
}