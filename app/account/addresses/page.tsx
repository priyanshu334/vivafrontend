"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Edit, Trash2, Plus, Star } from "lucide-react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";

export default function AddressBook() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="flex flex-col sm:flex-row min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 w-full px-4 py-8">
        <div className="max-w-5xl mx-auto space-y-10">
          {/* Breadcrumb */}
                 <nav className="text-sm text-gray-500 mb-6 flex flex-wrap items-center gap-2">
          <Link
            href="/"
            className="text-pink-500 font-addmedium hover:text-pink-600"
          >
            HOME
          </Link>
          <span className="text-gray-400">•</span>
          <Link href="/account" className="hover:text-gray-700">
            ACCOUNT
          </Link>
          <span className="text-gray-400">•</span>
          <span className="text-pink-500 font-medium">MY Address</span>
        </nav>

          {/* Header */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-[#B76E79]" />
                <h2 className="text-2xl font-bold text-gray-900">MY ADDRESSES</h2>
              </div>
              <Link href="/account/addresses/add">
                <Button variant="outline" className="flex rounded-none items-center gap-2 hover:bg-[#B76E79] hover:text-white shadow-sm">
                  <Plus className="w-4 h-4" />
                  ADD NEW ADDRESS
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground mt-2">Manage your delivery addresses</p>
          </div>

          {/* Default Address */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900">DEFAULT ADDRESS</h3>

            <Card className=" border-1 border-gray-500 hover:shadow-md  rounded-none transition-shadow">
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#B76E79] rounded-full" />
                    <span className="text-xs font-medium text-[#B76E79] bg-[#B76E79]/10 px-2 py-1 rounded-full">DEFAULT</span>
                  </div>
                </div>

                <div className="space-y-3 text-gray-700">
                  <h4 className="text-lg font-bold text-gray-900">NAME OF PERSON</h4>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                    <div className="leading-relaxed">
                      <p>Address Address Address</p>
                      <p>Colony</p>
                      <p>City, State - 492547</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-500" />
                    <span>1258465214</span>
                  </div>
                </div>

                <div className="flex gap-3 pt-6 border-t border-gray-200 flex-wrap">
                  <Button className="bg-[#B76E79] text-white rounded-none hover:bg-[#B76E79] hover:shadow-2xl flex items-center gap-2">
                    <Edit className="w-4 h-4" />
                    EDIT
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center gap-2 hover:bg-red-50 rounded-none hover:text-red-600 hover:border-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                    REMOVE
                  </Button>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Other Addresses */}
          <section className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gray-500" />
              OTHER ADDRESSES
            </h3>

            <div className="grid gap-4">
              {[1, 2].map((_, i) => (
                <Card
                  key={i}
                  className="hover:shadow-md rounded-none transition-shadow group border border-gray-200 hover:border-[#B76E79]/30"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex justify-between items-start">
                      <h4 className="text-lg font-bold text-gray-900">NAME OF PERSON</h4>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                        <Button
                          size="sm"
                          
                          className="text-gray-500 hover:text-[#B76E79] hover:bg-[#B76E79]/10 p-2"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-gray-500 hover:text-red-600 hover:bg-red-50 p-2"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-start gap-2 text-gray-700">
                      <MapPin className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                      <div className="leading-relaxed">
                        <p>Address Address.....</p>
                        <p>Colony</p>
                        <p>City, State - 492547</p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button size="sm" className="bg-[#B76E79] rounded-none text-white hover:bg-[#B76E79] flex items-center gap-2">
                        <Edit className="w-3 h-3" />
                        EDIT
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex items-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200"
                      >
                        <Trash2 className="w-3 h-3" />
                        REMOVE
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="ml-auto flex rounded-none items-center gap-2 text-[#B76E79] hover:bg-[#B76E79]/10"
                      >
                        <Star className="w-3 h-3" />
                        SET AS DEFAULT
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Empty State */}
          <div className="text-center py-10 text-gray-500">
            <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p className="text-sm">Add more addresses to manage your deliveries better</p>
          </div>
        </div>
      </main>
    </div>
  );
}
