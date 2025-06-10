import CategoryScroller from "@/components/CategoryScroller";
import { Cat } from "lucide-react";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen">
        <CategoryScroller/>
        {children}
      
    </div>
  );
}