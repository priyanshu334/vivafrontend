"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import CategoryScroller from "@/components/CategoryScroller";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center  pt-4 sm:pt-6 md:pt-10">
      {/* Top Navbar */}
      <div className="w-full mb-6 sm:mb-8">
        <CategoryScroller />
      </div>

      {/* Breadcrumb */}
      <div className="w-full max-w-md text-left text-xs text-rose-400 tracking-widest px-4 mb-6 sm:mb-10">
        <Link href="#" className="hover:underline">HOME</Link>
        <span className="mx-1">|</span>
        <Link href="#" className="hover:underline">ACCOUNT</Link>
      </div>

      {/* Login Card */}
      <div className="w-full max-w-md bg-white text-center space-y-6 px-4" >
        <h1 className="text-3xl tracking-widest font-semibold">Login</h1>
        <p className="text-sm text-gray-600">
          Please enter your e-mail and password
        </p>

        {/* Login Form */}
        <form className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            className="border border-black rounded-none h-12 placeholder:text-gray-500"
          />
          <div className="relative">
            <Input
              type="password"
              placeholder="Password"
              className="border border-black rounded-none h-12 placeholder:text-gray-500"
            />
            <div className="text-right mt-1 text-sm text-black underline">
              <Link href="/recover-password">Forgot Password ?</Link>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-[#B76E79] hover:bg-[#B76E79] rounded-none tracking-widest text-white h-12"
          >
            LOGIN
          </Button>
        </form>

        {/* Create Account */}
        <p className="text-sm text-black">
          Don’t have an account?{" "}
          <Link href="#" className="text-rose-500 underline">
            Create One
          </Link>
        </p>

        {/* Social Login */}
        <div className="flex justify-center gap-4">
          <Button className="bg-[#3b5998] hover:bg-[#2d4373] text-white w-12 h-12 rounded-none">
            <FaFacebookF size={20} />
          </Button>
          <Button className="bg-[#db4437] hover:bg-[#c23321] text-white w-12 h-12 rounded-none">
            <FaGoogle size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
}
