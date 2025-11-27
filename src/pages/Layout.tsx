import { Outlet } from "react-router-dom";
import SystemHeader from "@/components/SystemHeader";
import SystemSidebar from "@/components/SystemSidebar";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Layout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-full bg-background">
      <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <SystemHeader 
          mobileMenuTrigger={
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
          } 
        />
        <div className="flex w-full">
          <SystemSidebar onMobileClose={() => setMobileMenuOpen(false)} />
          <main className="flex-1 min-h-[calc(100vh-5rem)] overflow-x-hidden">
            <Outlet />
          </main>
        </div>
      </Sheet>
    </div>
  );
};

export default Layout;
