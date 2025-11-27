import { Activity, Bell, Wifi } from "lucide-react";

const SystemHeader = ({ mobileMenuTrigger }: { mobileMenuTrigger?: React.ReactNode }) => {
  return (
    <header className="h-20 bg-card border-b border-border flex items-center justify-between px-4 lg:px-6 sticky top-0 z-50">
      {/* Mobile Menu Trigger */}
      {mobileMenuTrigger}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <Activity className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">TrackGuard AI</h1>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">Railway Monitoring System</p>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 lg:gap-6">
        <div className="hidden md:flex items-center gap-2">
          <div className="w-2 h-2 bg-safe rounded-full pulse-glow"></div>
          <span className="text-xs lg:text-sm font-medium">SYSTEM ONLINE</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs lg:text-sm text-muted-foreground">
          <Wifi className="w-4 h-4" />
          <span>Connected</span>
        </div>

        <button className="relative p-2 hover:bg-secondary rounded transition-colors">
          <Bell className="w-4 h-4 lg:w-5 lg:h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-critical rounded-full"></span>
        </button>
      </div>
    </header>
  );
};

export default SystemHeader;
