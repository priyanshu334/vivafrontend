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
    description: "PhonePe, Google Pay, Paytm & more",
    value: "upi",
  },
  {
    label: "Debit/Credit Card",
    description: "Rupay, MasterCard, Visa & more",
    value: "card",
  },
  {
    label: "Net Banking",
    description: "Use your preferred bank to pay",
    value: "netbanking",
  },
  {
    label: "Cash on Delivery",
    description: "Pay when you receive the product",
    value: "cod",
  },
]

const upiApps = ["PhonePe", "Google Pay", "Paytm", "PayPal", "Other UPI"]
const banks = ["SBI", "HDFC", "ICICI", "Axis", "Other"]

export default function PaymentPage() {
  const [method, setMethod] = useState("upi")
  const [upiApp, setUpiApp] = useState("PhonePe")
  const [upiId, setUpiId] = useState("")
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" })
  const [selectedBank, setSelectedBank] = useState("SBI")

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
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* UPI Section */}
        {method === "upi" && (
          <Card className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#B76E79]">UPI Payment</h3>
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
              placeholder="Enter UPI ID"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
            />
            <Button className="w-full bg-[#B76E79] hover:bg-pink-700">
              Pay ₹2,980
            </Button>
          </Card>
        )}

        {/* Debit/Credit Card Section */}
        {method === "card" && (
          <Card className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#B76E79]">Card Payment</h3>
            <Input
              placeholder="Card Number"
              value={cardDetails.number}
              onChange={(e) => setCardDetails({ ...cardDetails, number: e.target.value })}
            />
            <div className="grid grid-cols-2 gap-4">
              <Input
                placeholder="MM/YY"
                value={cardDetails.expiry}
                onChange={(e) => setCardDetails({ ...cardDetails, expiry: e.target.value })}
              />
              <Input
                placeholder="CVV"
                value={cardDetails.cvv}
                onChange={(e) => setCardDetails({ ...cardDetails, cvv: e.target.value })}
              />
            </div>
            <Button className="w-full bg-[#B76E79] hover:bg-pink-700">
              Pay ₹2,980
            </Button>
          </Card>
        )}

        {/* Net Banking Section */}
        {method === "netbanking" && (
          <Card className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#B76E79]">Net Banking</h3>
            <RadioGroup value={selectedBank} onChange={setSelectedBank} className="space-y-2">
              {banks.map((bank) => (
                <RadioGroup.Option
                  key={bank}
                  value={bank}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  {({ checked }) => (
                    <>
                      {checked ? (
                        <CheckCircle2 className="text-pink-500" size={18} />
                      ) : (
                        <Circle className="text-gray-400" size={18} />
                      )}
                      <span>{bank}</span>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </RadioGroup>
            <Button className="w-full bg-[#B76E79] hover:bg-pink-700">
              Proceed to {selectedBank} Login
            </Button>
          </Card>
        )}

        {/* Cash on Delivery Section */}
        {method === "cod" && (
          <Card className="p-4 space-y-4">
            <h3 className="text-lg font-semibold text-[#B76E79]">Cash on Delivery</h3>
            <p className="text-sm text-muted-foreground">
              You can pay in cash when your order is delivered to your doorstep.
            </p>
            <Button className="w-full bg-[#B76E79] hover:bg-pink-700">
              Confirm Order
            </Button>
          </Card>
        )}
      </div>
    </div>
  )
}
