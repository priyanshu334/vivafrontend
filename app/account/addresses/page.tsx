import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Edit, Trash2, Plus, Star } from "lucide-react";
import Link from "next/link";

export default function AddressBook() {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6 space-y-8">
      {/* Breadcrumb Navigation */}
      <nav className="text-xs text-muted-foreground bg-gray-50 rounded-lg px-4 py-3 border">
        <div className="flex items-center space-x-2">
          <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
          <span>|</span>
          <Link href="/account" className="hover:text-primary transition-colors">ACCOUNT</Link>
          <span>|</span>
          <span className="text-primary font-medium">MY ADDRESS</span>
        </div>
      </nav>

      {/* Header Section */}
      <div className="border-t pt-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MapPin className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-gray-900">MY ADDRESSES</h2>
          </div>
          <Link href="/account/addresses/add">
            <Button variant="outline" className="flex items-center gap-2 hover:bg-primary hover:text-white transition-all duration-200 shadow-sm">
              <Plus className="w-4 h-4" />
              ADD NEW ADDRESS
            </Button>
          </Link>
        </div>
        <p className="text-sm text-muted-foreground mt-2">Manage your delivery addresses</p>
      </div>

      {/* Default Address Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
          <h3 className="text-lg font-semibold text-gray-900">DEFAULT ADDRESS</h3>
        </div>
        
        <Card className="bg-muted border-2 border-primary/20 shadow-sm hover:shadow-md transition-shadow duration-200">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">DEFAULT</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h4 className="font-bold text-lg text-gray-900">NAME OF PERSON</h4>
              
              <div className="flex items-start gap-2 text-gray-700">
                <MapPin className="w-4 h-4 mt-1 text-gray-500 flex-shrink-0" />
                <div className="leading-relaxed">
                  <p>Address Address Address Address Address</p>
                  <p>Colony</p>
                  <p>State-492547</p>
                  <p>State</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="w-4 h-4 text-gray-500" />
                <span>1258465214</span>
              </div>
            </div>
            
            <div className="flex gap-3 pt-6 border-t border-gray-200 mt-6">
              <Button 
                className="bg-rose-400 text-white hover:bg-rose-500 flex items-center gap-2 shadow-sm transition-all duration-200"
              >
                <Edit className="w-4 h-4" />
                EDIT
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center gap-2 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-all duration-200"
              >
                <Trash2 className="w-4 h-4" />
                REMOVE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Other Addresses Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-gray-500" />
          OTHER ADDRESSES
        </h3>
        
        <div className="grid gap-4">
          {[1, 2].map((_, i) => (
            <Card 
              key={i} 
              className="hover:shadow-md transition-all duration-200 hover:border-primary/30 group"
            >
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-lg text-gray-900">NAME OF PERSON</h4>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex gap-2">
                      <Button 
                        size="sm" 
                        variant="ghost"
                        className="text-gray-500 hover:text-primary hover:bg-primary/10 p-2"
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
                      <p>State-492547</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-3 pt-4 mt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <Button 
                    size="sm"
                    className="bg-rose-400 text-white hover:bg-rose-500 flex items-center gap-2"
                  >
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
                    className="flex items-center gap-2 text-primary hover:bg-primary/10 ml-auto"
                  >
                    <Star className="w-3 h-3" />
                    SET AS DEFAULT
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Empty State Message (if no other addresses) */}
      <div className="text-center py-8 text-gray-500">
        <MapPin className="w-12 h-12 mx-auto mb-3 text-gray-300" />
        <p className="text-sm">Add more addresses to manage your deliveries better</p>
      </div>
    </div>
  );
}