'use client';

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaGoogle } from "react-icons/fa";
import CategoryScroller from "@/components/CategoryScroller";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      {/* Breadcrumb */}
      <CategoryScroller/>
      <nav className=" top-4 left-4 text-xs text-rose-500 tracking-wide">
        HOME | ACCOUNT | REGISTER
      </nav>

      {/* Form Card */}
      <div className="w-full max-w-md text-center space-y-6 mt-10">
        <h1 className="text-2xl font-bold tracking-widest">REGISTER</h1>
        <p className="text-sm text-gray-600">Please fill the information below.</p>

        <form className="space-y-4">
          <Input placeholder="First Name" />
          <Input placeholder="Last Name" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />

          <Button type="submit" className="w-full bg-rose-400 hover:bg-rose-500 tracking-widest text-white">
            LOGIN
          </Button>
        </form>

        {/* Social Buttons */}
        <div className="flex justify-center gap-4 pt-4">
          <Button variant="ghost" className="bg-[#3b5998] hover:bg-[#2d4373] text-white p-2">
            <FaFacebook size={20} />
          </Button>
          <Button variant="ghost" className="bg-[#db4437] hover:bg-[#c33d2e] text-white p-2">
            <FaGoogle size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
