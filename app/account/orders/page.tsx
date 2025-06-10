import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const orders = [
  {
    status: "In Transit",
    color: "text-green-600",
    date: "wed, 27 may 2025",
    note: "",
    image: "/images/product.png",
  },
  {
    status: "Delivered",
    color: "text-pink-600",
    date: "wed, 27 may 2025",
    note: "",
    image: "/images/product.png",
  },
  {
    status: "Cancelled",
    color: "text-red-600",
    date: "wed, 27 may 2025",
    note: ",as per your request",
    image: "/images/product.png",
  },
  {
    status: "Returned",
    color: "text-gray-600",
    date: "wed, 27 may 2025",
    note: "",
    image: "/images/product.png",
  },
];

export default function MyOrders() {
  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="text-sm text-gray-500 mb-2">
        <span className="text-pink-500">HOME</span> | <span>ACCOUNT</span> | <span className="text-pink-500">MY ORDERS</span>
      </div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">MY ORDERS</h2>
        <Button variant="outline" size="sm">Filter</Button>
      </div>

      <div className="space-y-4">
        {orders.map((order, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="flex flex-col gap-2 p-4">
              <p className={`text-base font-semibold ${order.color}`}>{order.status}</p>
              <p className="text-sm text-gray-500">
                on {order.date} <span className="text-xs">{order.note}</span>
              </p>
              <div className="flex items-center gap-4 mt-2">
                <Image
                  src={order.image}
                  alt="product"
                  width={60}
                  height={60}
                  className="rounded-md object-cover"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium leading-tight">BLACK COLLAR BAROQUE COTTON LOUNGEWEAR SET</p>
                  <p className="text-xs text-gray-500">Size : L</p>
                </div>
                <ChevronRight className="text-gray-400" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
