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
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 p-6 sm:p-12">
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

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-4">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="EMAIL"
              className=""
            />
            <div className="flex gap-2">
              <Select defaultValue="INDIA">
                <SelectTrigger className="w-28 ">
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

          <Button className="bg-[#B76E79]  text-white w-full sm:w-1/3 text-lg font-semibold tracking-wide rounded-none">
            EDIT
          </Button>
        </section>

        {/* Divider */}
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
              className=""
            />
            <Input
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              className=""
            />

            <div>
              <Label className="block text-sm mb-2">Gender</Label>
              <RadioGroup
                defaultValue={gender}
                className="flex gap-4"
                onValueChange={(value) => setGender(value)}
              >
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male" className="text-sm">
                    MALE
                  </Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female" className="text-sm">
                    FEMALE
                  </Label>
                </div>
                <div className="flex items-center space-x-1">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other" className="text-sm">
                    OTHER
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex gap-2">
              <Select
                defaultValue={dob.day}
                onValueChange={(val) => setDob({ ...dob, day: val })}
              >
                <SelectTrigger className="w-20 ">
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
                <SelectTrigger className="w-24 ">
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
                <SelectTrigger className="w-28">
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
                className=""
              />
              <button className="text-sm text-rose-400 underline">
                Change Password
              </button>
            </div>

            <div className="flex gap-4 pt-4">
              <Button className="w-1/2 bg-[#B76E79] text-white text-lg tracking-wide font-semibold rounded-none">
                UPDATE
              </Button>
              <Button
                variant="outline"
                className="w-1/2 text-lg tracking-wide font-semibold rounded-none"
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
