// app/recover-password/page.tsx
"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CategoryScroller from "@/components/CategoryScroller";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-white">
      {/* Breadcrumb */}
    
      <div className="text-sm text-muted-foreground mb-4">
        <Link href="/">Home</Link> | <Link href="/account">Account</Link> |{" "}
        <span className="text-rose-400">Recover Password</span>
      </div>

      {/* Heading */}
      <h1 className="text-2xl md:text-3xl font-semibold tracking-widest text-center mb-2">
        RECOVER PASSWORD
      </h1>
      <p className="text-sm text-muted-foreground mb-6 text-center">
        Please enter your e-mail
      </p>

      {/* Form */}
      <form className="w-full max-w-md space-y-4">
        <Input
          type="email"
          placeholder="Email"
          className="rounded-sm border border-gray-300"
        />
        <Button
          type="submit"
          className="w-full bg-[#B76E79] hover:bg-[#B76E79] text-white tracking-widest rounded-sm"
        >
          RECOVER
        </Button>
      </form>

      {/* Back to Login */}
      <p className="mt-4 text-sm text-muted-foreground">
        Remember your Password?{" "}
        <Link href="/login" className="text-rose-400 hover:underline">
          Back to Login
        </Link>
      </p>
    </div>
  );
}
