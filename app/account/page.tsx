// app/profile/page.tsx
'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import Sidebar from '@/components/Sidebar'


export default function ProfilePage() {
  const [gender, setGender] = useState("MALE")

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6">
        <Sidebar/>
      <div className="text-sm text-muted-foreground">
        <a href="#" className="text-pink-400">HOME</a> | <a href="#" className="text-pink-400">ACCOUNT</a> | <span className="text-gray-600">MY PROFILE</span>
      </div>

      <div className="border-t pt-4 space-y-4">
        <h2 className="font-semibold text-lg">CONTACT INFORMATION</h2>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>Email</Label>
            <Input placeholder="EMAIL" defaultValue="854vfdgsnssbbsz@gmail.com" />
          </div>
          <div>
            <Label>Phone</Label>
            <div className="flex gap-2">
              <Select defaultValue="INDIA">
                <SelectTrigger className="w-28">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INDIA">India</SelectItem>
                  <SelectItem value="USA">USA</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Phone" defaultValue="8523654783" />
            </div>
          </div>
        </div>

        <Button className="bg-rose-400 w-full text-white text-lg">EDIT</Button>
      </div>

      <div className="border-t pt-4 space-y-4">
        <h2 className="font-semibold text-lg">PRIMARY INFORMATION</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label>First Name</Label>
            <Input placeholder="First Name" />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input placeholder="Last Name" />
          </div>
        </div>

        <div>
          <Label>Gender</Label>
          <div className="flex gap-2 mt-1">
            {["MALE", "FEMALE", "OTHER"].map((g) => (
              <Button
                key={g}
                variant={gender === g ? "default" : "outline"}
                className={cn("w-24", gender === g && "bg-rose-400 text-white")}
                onClick={() => setGender(g)}
              >
                {g}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label>Date of Birth</Label>
            <Select defaultValue="19">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(31)].map((_, i) => (
                  <SelectItem key={i + 1} value={`${i + 1}`}>{i + 1}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>&nbsp;</Label>
            <Select defaultValue="09">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(12)].map((_, i) => (
                  <SelectItem key={i + 1} value={`${(i + 1).toString().padStart(2, '0')}`}>{(i + 1).toString().padStart(2, '0')}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label>&nbsp;</Label>
            <Select defaultValue="1984">
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {[...Array(100)].map((_, i) => {
                  const year = 2025 - i
                  return <SelectItem key={year} value={`${year}`}>{year}</SelectItem>
                })}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label>Password</Label>
          <div className="flex items-center gap-2">
            <Input type="password" defaultValue="********" />
            <button className="text-sm text-rose-400">Change Password</button>
          </div>
        </div>

        <div className="flex gap-4">
          <Button className="bg-rose-400 text-white text-lg px-10">UPDATE</Button>
          <Button variant="outline" className="text-lg px-10">CANCEL</Button>
        </div>
      </div>
    </div>
  )
}
