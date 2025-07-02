"use client"
import { useState } from "react"
import { RadioGroup } from "@headlessui/react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Circle } from "lucide-react"

const paymentMethods = [
  {
    label: "UPI",
    description: "Phone pay, Google Pay, Paytm & More",
    value: "upi",
  },
  {
    label: "Debit/Credit Card",
    description: "Rupay, MasterCard, Visa & More",
    value: "card",
  },
  {
    label: "Net Banking",
    description: "Use your preferred bank account to pay.",
    value: "netbanking",
  },
  {
    label: "Cash on Delivery",
    description: "Pay when you receive the product",
    value: "cod",
  },
]

const upiApps = ["Phone Pay", "Google Pay", "Paytm", "Pay Pal", "Other UPI"]

export default function PaymentPage() {
  const [method, setMethod] = useState("upi")
  const [upiApp, setUpiApp] = useState("Phone Pay")
  const [upiId, setUpiId] = useState("")

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Select Mode of Payment</h2>
      <p className="text-sm text-muted-foreground">
        Pick your desired payment option to proceed.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          {paymentMethods.map((item) => (
            <Card
              key={item.value}
              className={`p-4 cursor-pointer border-2 transition-all duration-200 ${
                method === item.value ? "border-[#B76E79]" : "border-gray-200"
              }`}
              onClick={() => setMethod(item.value)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 flex items-center justify-center bg-pink-100 text-pink-600 font-bold rounded-md">
                  {item.label.slice(0, 3)}
                </div>
                <div>
                  <h3 className="font-semibold">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {method === "upi" && (
          <Card className="p-4">
            <h3 className="text-lg font-semibold text-[#B76E79] mb-4">UPI Payment</h3>
            <RadioGroup value={upiApp} onChange={setUpiApp} className="space-y-2">
              {upiApps.map((app) => (
                <RadioGroup.Option
                  key={app}
                  value={app}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {({ checked }) => (
                    <>
                      {checked ? (
                        <CheckCircle2 className="text-pink-500" size={18} />
                      ) : (
                        <Circle className="text-gray-400" size={18} />
                      )}
                      <span>{app}</span>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>

            <Input
              className="mt-4"
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
            <Button className="w-full mt-4 bg-[#B76E79] hover:bg-pink-700">
              Pay ₹2,980
            </Button>
          </Card>
        )}
      </div>
    </div>
  )
}
