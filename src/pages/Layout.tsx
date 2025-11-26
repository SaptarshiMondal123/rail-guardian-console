import { Outlet } from "react-router-dom";
import SystemHeader from "@/components/SystemHeader";
import SystemSidebar from "@/components/SystemSidebar";

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-background">
      <SystemHeader />
      <div className="flex w-full">
        <SystemSidebar />
        <main className="flex-1 min-h-[calc(100vh-5rem)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
