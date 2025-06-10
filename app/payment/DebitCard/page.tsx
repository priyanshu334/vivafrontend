// app/payment/page.tsx
'use client';

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const PaymentPage = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  const paymentMethods = [
    { id: "upi", label: "UPI", description: "Phone pay, Google Pay, Paytm & More", icon: "📱" },
    { id: "card", label: "Debit/Credit Card", description: "Rupay, MasterCard, Visa & More", icon: "💳" },
    { id: "netbanking", label: "Net Banking", description: "Use your preferred bank account to pay.", icon: "🏦" },
    { id: "cod", label: "Cash on Delivery", description: "Pay when you receive the product", icon: "💵" },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      {/* Header Steps */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="text-pink-600 font-logo text-xl">Viva <span className="font-bold">Boutique</span></span>
        </div>
        <div className="flex gap-6 text-sm items-center">
          <Step label="Cart" completed />
          <Step label="Address" completed />
          <Step label="Payment" active />
        </div>
      </div>

      {/* Payment Mode Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: Payment Options */}
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-2">Select Mode of Payment</h2>
          <p className="text-sm text-gray-500 mb-4">Pick your desired payment option to proceed.</p>
          <div className="divide-y">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={`flex items-start gap-4 py-4 px-2 cursor-pointer rounded-md ${selectedMethod === method.id ? "bg-pink-50 border-l-4 border-pink-500" : ""}`}
                onClick={() => setSelectedMethod(method.id)}
              >
                <span className="text-xl">{method.icon}</span>
                <div>
                  <p className="font-medium">{method.label}</p>
                  <p className="text-sm text-gray-500">{method.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Right: Payment Form */}
        <Card className="p-6">
          <h2 className="text-lg font-semibold text-pink-600 mb-4">Debit/Credit Card</h2>
          <div className="space-y-4">
            <Input placeholder="Card Number" />
            <div className="flex gap-4">
              <Input placeholder="Expiry (MM/YY)" />
              <Input placeholder="CVV" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="save" />
              <label htmlFor="save" className="text-sm">Save Details for Future</label>
            </div>
            <Button className="w-full bg-pink-600 hover:bg-pink-700">Pay ₹2,980</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default PaymentPage;

// Step Component
const Step = ({ label, completed = false, active = false }: { label: string; completed?: boolean; active?: boolean }) => (
  <div className="flex items-center gap-1">
    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-white text-xs
      ${completed ? 'bg-pink-500' : active ? 'bg-black' : 'bg-gray-300'}
    `}>
      ✓
    </div>
    <span className={`${active ? 'font-semibold' : 'text-gray-500'}`}>{label}</span>
  </div>
);
