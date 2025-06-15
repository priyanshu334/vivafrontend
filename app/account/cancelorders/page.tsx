// app/order/page.tsx

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function OrderSummary() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <div className="text-sm text-gray-600 mb-2">
        <a href="#" className="underline">Home</a> | <a href="#" className="underline">Account</a> | <a href="#" className="underline">My Orders</a>
      </div>

      <Card className="mt-4 border">
        <CardContent className="flex flex-col items-center py-8">
          <Image
            src="/img3.png" // Place the image in `public/` directory
            alt="Loungewear"
            width={150}
            height={150}
            className="rounded-md shadow-md"
          />
          <h2 className="mt-4 text-center font-semibold text-sm uppercase">Black Collar Baroque Cotton Loungewear Set</h2>
          <p className="text-sm mt-1">Size: L</p>

          <div className="bg-rose-400 text-white rounded-md px-4 py-2 mt-4">
            Cancelled , as per your request
          </div>

          <div className="mt-4 text-sm bg-gray-100 w-full px-4 py-2 border border-gray-200">
            Return Window Closed on 02 June <span className="text-red-500">Read Policy</span>
          </div>
        </CardContent>
      </Card>

      <section className="mt-6">
        <h3 className="font-semibold text-lg">Delivery Address</h3>
        <p className="text-sm text-rose-500 font-medium mt-2">NAME SURNAME | 87512693214</p>
        <p className="text-sm mt-1 text-gray-700">Address Address Address, Street, City - 985142</p>
      </section>

      <section className="mt-6 border rounded-md overflow-hidden">
        <div className="bg-gray-100 px-4 py-3 font-medium border-b">Total Order Price</div>
        <div className="p-4 text-sm space-y-2">
          <div className="flex justify-between font-semibold text-lg">
            <span>₹1,490.00</span>
            <span className="text-green-600 text-sm mt-1">Saving ₹1,000</span>
          </div>
          <div className="border-t pt-3 space-y-1">
            <div className="flex justify-between"><span>Total MRP</span><span>₹2,490</span></div>
            <div className="flex justify-between text-green-600"><span>Discount on MRP</span><span>-₹1,000</span></div>
            <div className="flex justify-between"><span>Convenience Charges</span><span>₹00</span></div>
            <div className="flex justify-between"><span>Additional Discount</span><span>₹00</span></div>
          </div>
          <div className="flex justify-between pt-3 font-medium border-t">
            <span>You Pay</span>
            <span>₹1,490</span>
          </div>
        </div>
        <div className="bg-gray-100 px-4 py-3 text-sm border-t flex justify-between">
          <span>Payment Mode</span>
          <span className="font-medium">Cash</span>
        </div>
      </section>
    </main>
  )
}
