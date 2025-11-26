import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  ScanEye,
  AlertTriangle,
  BarChart3,
  Gamepad2,
  FileText,
  Settings,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Detection", href: "/detection", icon: ScanEye },
  { name: "Track Fault", href: "/track-fault", icon: AlertTriangle },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "Simulations", href: "/simulations", icon: Gamepad2 },
  { name: "Reports", href: "/reports", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

const SystemSidebar = () => {
  return (
    <aside className="w-64 bg-sidebar border-r border-sidebar-border min-h-screen sticky top-20 flex flex-col">
      <nav className="flex-1 px-3 py-6 space-y-1">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            end={item.href === "/"}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded text-sm font-medium transition-all ${
                isActive
                  ? "bg-sidebar-accent text-sidebar-primary border-l-2 border-sidebar-primary"
                  : "text-sidebar-foreground hover:bg-sidebar-accent/50"
              }`
            }
          >
            <item.icon className="w-5 h-5" />
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="text-xs text-muted-foreground space-y-1">
          <div className="flex justify-between">
            <span>Model Version:</span>
            <span className="text-foreground">v2.4.1</span>
          </div>
          <div className="flex justify-between">
            <span>Last Updated:</span>
            <span className="text-foreground">2h ago</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SystemSidebar;
