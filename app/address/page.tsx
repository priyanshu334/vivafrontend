'use client';

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen px-4 py-10 bg-white">
      {/* Header */}
      <div className="flex items-center justify-between border-b pb-2 mb-6">
        <div className="text-2xl font-bold text-pink-600">Viva <span className="text-black">Boutique</span></div>
        <div className="flex gap-8">
          <StepItem step="1" label="Cart" completed />
          <StepItem step="2" label="Address" active />
          <StepItem step="3" label="Payment" />
        </div>
      </div>

      {/* Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Choose Address</h2>
        <p className="text-sm text-muted-foreground mt-1">
          To avoid any delays, kindly share your full and accurate address.
        </p>
      </div>

      {/* Address Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Add New Address */}
        <Card className="flex items-center justify-center h-48 border-dashed border-2 border-gray-300 cursor-pointer hover:bg-gray-50">
          <CardContent className="flex flex-col items-center justify-center text-gray-600 text-center mt-6">
            <Plus size={32} />
            <p className="mt-2 font-medium">Add New Address</p>
          </CardContent>
        </Card>

        {/* Address Card - Default */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <div className="flex items-center justify-between">
              <p className="font-semibold">Name Surname</p>
              <Badge variant="outline" className="bg-pink-200 text-pink-800 border-none">Default</Badge>
            </div>
            <p className="text-sm text-gray-600">
              Address Address Address Address Address <br />
              Near by... <br />
              City - 154269
            </p>
            <div className="flex justify-between mt-4">
              <Button variant="outline" className="text-sm">Edit</Button>
              <Button className="bg-pink-700 hover:bg-pink-800 text-white text-sm">Deliver Here</Button>
            </div>
          </CardContent>
        </Card>

        {/* Address Card - Another */}
        <Card>
          <CardContent className="p-4 space-y-3">
            <p className="font-semibold">Name Surname</p>
            <p className="text-sm text-gray-600">
              Address Address Address Address Address <br />
              Near by... <br />
              City - 154269
            </p>
            <div className="flex justify-between mt-4">
              <Button variant="outline" className="text-sm">Edit</Button>
              <Button className="bg-pink-700 hover:bg-pink-800 text-white text-sm">Deliver Here</Button>
            </div>
          </CardContent>
        </Card>
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
  return (
    <div className="flex items-center space-x-2">
      <div
        className={`rounded-full w-6 h-6 flex items-center justify-center text-white text-sm font-medium ${
          completed ? 'bg-pink-500' : active ? 'bg-black' : 'bg-gray-300'
        }`}
      >
        {step}
      </div>
      <span
        className={`text-sm ${
          completed || active ? 'text-black font-medium' : 'text-muted-foreground'
        }`}
      >
        {label}
      </span>
    </div>
  );
}
