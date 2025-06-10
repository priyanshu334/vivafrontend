import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function AddNewAddress() {
  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <h2 className="text-xl font-semibold">Add New Address</h2>

      <div className="space-y-4">
        {/* Address Section */}
        <div className="grid grid-cols-2 gap-4">
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="INDIA" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="INDIA">India</SelectItem>
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

        <Input placeholder="Address (House No. Building, Street, Area)" />

        <div className="flex items-center space-x-2">
          <Checkbox id="default-address" />
          <label htmlFor="default-address" className="text-sm">Set as Default Address</label>
        </div>

        {/* Contact Section */}
        <div className="space-y-2 pt-4">
          <h3 className="font-medium">Contact</h3>
          <p className="text-sm text-gray-500">This contact detail will be used to notify you about the progress of your delivery.</p>
          <Input placeholder="Name here" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Email here (optional)" />
        </div>

        {/* Footer icons */}
        <div className="flex justify-between text-xs text-gray-500 pt-4">
          <div className="flex items-center gap-1">
            <span>💖</span>
            <span>Genuine Products</span>
          </div>
          <div className="flex items-center gap-1">
            <span>↩️</span>
            <span>Easy Returns</span>
          </div>
          <div className="flex items-center gap-1">
            <span>💳</span>
            <span>Secure Payments</span>
          </div>
        </div>

        <Button className="w-full bg-rose-400 hover:bg-rose-500 text-white">
          Deliver to this address
        </Button>
      </div>
    </div>
  );
}
