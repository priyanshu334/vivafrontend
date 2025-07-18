"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";

export default function MyProfilePage() {
  const [email, setEmail] = useState("854vfdgsnssbbsz@gmail.com");
  const [phone, setPhone] = useState("8523654783");
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [gender, setGender] = useState("male");
  const [dob, setDob] = useState({ day: "19", month: "09", year: "1984" });

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar for both mobile and desktop */}
      <Sidebar />

      {/* Main content */}
      <main className="w-full p-4 sm:p-8 lg:p-12 bg-white">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
          <Link
            href="/"
            className="text-pink-500 font-medium hover:text-pink-600"
          >
            HOME
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/account" className="hover:text-gray-700">
            ACCOUNT
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-pink-500 font-medium">Profile</span>
        </nav>

        {/* Contact Info */}
        <section className="mb-10">
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-4">
            Contact Information
          </h2>

          <div className="grid gap-4 mb-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
            />
            <div className="flex flex-col sm:flex-row gap-2">
              <Select defaultValue="INDIA">
                <SelectTrigger className="sm:w-28 w-full">
                  <SelectValue placeholder="INDIA" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INDIA">INDIA</SelectItem>
                </SelectContent>
              </Select>
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
            </div>
          </div>

          <Button className="bg-[#B76E79] text-white w-full sm:w-1/3 text-lg font-semibold tracking-wide rounded-none">
            EDIT
          </Button>
        </section>

        <hr className="border-t border-gray-300 my-6" />

        {/* Primary Info */}
        <section>
          <h2 className="text-sm font-bold uppercase border-b border-gray-300 pb-1 mb-4">
            Primary Information
          </h2>

          <div className="space-y-4">
            <Input
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />

            <div>
              <Label className="block text-sm mb-2">Gender</Label>
              <RadioGroup
                defaultValue={gender}
                className="flex gap-4"
                onValueChange={(value) => setGender(value)}
              >
                {["male", "female", "other"].map((g) => (
                  <div key={g} className="flex items-center space-x-1">
                    <RadioGroupItem value={g} id={g} />
                    <Label htmlFor={g} className="text-sm uppercase">
                      {g}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            {/* DOB Select */}
            <div className="flex flex-col sm:flex-row gap-2">
              <Select
                defaultValue={dob.day}
                onValueChange={(val) => setDob({ ...dob, day: val })}
              >
                <SelectTrigger className="sm:w-20 w-full">
                  <SelectValue placeholder="Day" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 31 }, (_, i) => {
                    const val = (i + 1).toString().padStart(2, "0");
                    return <SelectItem key={val} value={val}>{val}</SelectItem>;
                  })}
                </SelectContent>
              </Select>

              <Select
                defaultValue={dob.month}
                onValueChange={(val) => setDob({ ...dob, month: val })}
              >
                <SelectTrigger className="sm:w-24 w-full">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => {
                    const val = (i + 1).toString().padStart(2, "0");
                    return <SelectItem key={val} value={val}>{val}</SelectItem>;
                  })}
                </SelectContent>
              </Select>

              <Select
                defaultValue={dob.year}
                onValueChange={(val) => setDob({ ...dob, year: val })}
              >
                <SelectTrigger className="sm:w-28 w-full">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 50 }, (_, i) => {
                    const year = (1980 + i).toString();
                    return <SelectItem key={year} value={year}>{year}</SelectItem>;
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between gap-4">
              <Input
                type="password"
                value="********"
                readOnly
              />
              <button className="text-sm text-rose-400 underline whitespace-nowrap">
                Change Password
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="w-full sm:w-1/2 bg-[#B76E79] text-white text-lg tracking-wide font-semibold rounded-none">
                UPDATE
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-1/2 text-lg tracking-wide font-semibold rounded-none"
              >
                CANCEL
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
