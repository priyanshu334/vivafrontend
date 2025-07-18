'use client';

import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Page() {
  const [addresses, setAddresses] = useState([
    { id: 1, name: "Name Surname", address: "Address Address Address Address Address", city: "City-154269", isDefault: true },
    { id: 2, name: "Name Surname", address: "Address Address Address Address Address", city: "City-154269", isDefault: false }
  ]);

  return (
    <div className="min-h-screen px-4 md:px-20 py-10 bg-white">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between border-b pb-4 mb-6 gap-4">
        <div className="text-3xl font-semibold text-pink-600">
          Viva <span className="text-black">Boutique</span>
        </div>
        <div className="flex gap-8">
          <StepItem step="✓" label="Cart" completed />
          <StepItem step="●" label="Address" active />
          <StepItem step="3" label="Payment" />
        </div>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold">Choose Address</h2>
        <p className="text-sm text-gray-500 mt-1">
          To avoid any delays, kindly share your full and accurate address.
        </p>
      </div>

      {/* Address Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Add New Address with Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Card className="h-48 border-dashed border-2 border-gray-300 hover:bg-gray-50 transition cursor-pointer">
              <CardContent className="flex flex-col items-center justify-center h-full text-gray-600">
                <Plus size={36} />
                <p className="mt-2 font-semibold text-sm">Add New Address</p>
              </CardContent>
            </Card>
          </DialogTrigger>

          <DialogContent className="max-w-md w-full">
            <DialogHeader className="flex items-center justify-between border-b pb-2">
              <DialogTitle className="text-lg font-medium">Add New Address</DialogTitle>
              <DialogClose asChild>
              
              </DialogClose>
            </DialogHeader>

            {/* Form Fields */}
            <div className="space-y-4 pt-4">
              <div className="grid grid-cols-2 gap-4">
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="India" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="India">India</SelectItem>
                    <SelectItem value="USA">USA</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                  </SelectContent>
                </Select>
                <Input placeholder="Pin Code" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Input placeholder="City / Town" />
                <Input placeholder="State" />
              </div>

              <Input placeholder="Address (House No, Building, Street, Area)" />

              <div className="flex items-center space-x-2">
                <Checkbox id="default" />
                <Label htmlFor="default" className="text-sm">
                  Set as Default Address
                </Label>
              </div>

              <hr />

              <div>
                <p className="text-sm text-gray-500 mb-2">Contact</p>
                <div className="space-y-3">
                  <Input placeholder="Name here" />
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Email here (optional)" />
                </div>
              </div>

              <div className="flex justify-between items-center text-xs text-gray-600 pt-2">
                <span>🔒 Genuine Products</span>
                <span>↩️ Easy Returns</span>
                <span>💳 Secure Payments</span>
              </div>

              <Button className="w-full bg-[#B76E79] hover:bg-[#B76E79] text-white">
                Deliver to this address
              </Button>
            </div>
          </DialogContent>
        </Dialog>

        {/* Address Cards */}
        {addresses.map((addr) => (
          <Card key={addr.id} className="shadow-sm">
            <CardContent className="p-4 space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-medium text-sm">{addr.name}</p>
                {addr.isDefault && (
                  <Badge className="bg-pink-100 text-pink-800 font-normal px-2 py-0.5 text-xs rounded-sm border-none">
                    Default
                  </Badge>
                )}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {addr.address} <br />
                Near by... <br />
                {addr.city}
              </p>
              <div className="flex justify-between pt-2">
                <Button variant="outline" className="text-sm px-4 py-1 h-8">
                  Edit
                </Button>
                <Button className="bg-[#B76E79] hover:bg-[#a05a65] text-white text-sm px-4 py-1 h-8">
                  Deliver Here
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

type StepItemProps = {
  step: string;
  label: string;
  completed?: boolean;
  active?: boolean;
};

function StepItem({ step, label, completed, active }: StepItemProps) {
  const color = completed
    ? "text-pink-600"
    : active
    ? "text-black"
    : "text-gray-400";

  return (
    <div className="flex items-center gap-2">
      <div className={`w-6 h-6 rounded-full flex items-center justify-center border ${color} border-current text-xs`}>
        {step}
      </div>
      <span className={`text-sm ${color}`}>{label}</span>
    </div>
  );
}
