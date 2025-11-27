import StatusCard from "@/components/StatusCard";
import { Activity, AlertTriangle, CheckCircle, Train, Zap, MapPin } from "lucide-react";

const Dashboard = () => {
  const events = [
    { time: "09:21", message: "Detected Animal at 24m", severity: "critical" },
    { time: "09:15", message: "Track Crack Identified - Section B", severity: "warning" },
    { time: "09:08", message: "Normal Operation Resumed", severity: "safe" },
    { time: "08:55", message: "Obstacle Cleared - Track A", severity: "safe" },
    { time: "08:42", message: "Speed Limit Exceeded - Warning", severity: "warning" },
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* System Status Header */}
      <div className="console-panel p-6 border-primary/30 glow-primary">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">System Status: OPERATIONAL</h2>
            <p className="text-muted-foreground">All detection modules running normally</p>
          </div>
          <div className="flex gap-6 text-sm">
            <div>
              <div className="text-muted-foreground mb-1">CPU Usage</div>
              <div className="font-bold text-lg">45%</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">GPU Usage</div>
              <div className="font-bold text-lg">72%</div>
            </div>
            <div>
              <div className="text-muted-foreground mb-1">Last Detection</div>
              <div className="font-bold text-lg">2m ago</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Status Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        <StatusCard
          title="Train Status"
          value="85 km/h"
          subtitle="Operating normally"
          icon={Train}
          variant="safe"
          trend="ACTIVE"
        />
        <StatusCard
          title="Hazards Today"
          value="12"
          subtitle="3 critical, 9 warnings"
          icon={AlertTriangle}
          variant="warning"
          trend="24H"
        />
        <StatusCard
          title="Track Faults"
          value="5"
          subtitle="2 require attention"
          icon={Zap}
          variant="critical"
          trend="ACTIVE"
        />
        <StatusCard
          title="System Health"
          value="98%"
          subtitle="All modules operational"
          icon={CheckCircle}
          variant="safe"
          trend="LIVE"
        />
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Map Panel */}
        <div className="lg:col-span-2 console-panel p-6">
          <div className="console-panel-header">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Live Route Map</span>
            </div>
          </div>
          <div className="mt-4 bg-secondary rounded h-96 flex items-center justify-center border border-border">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-12 h-12 mx-auto mb-4 opacity-30" />
              <p>Interactive map visualization</p>
              <p className="text-sm mt-2">Real-time train position and hazard markers</p>
            </div>
          </div>
        </div>

        {/* Event Feed */}
        <div className="console-panel">
          <div className="console-panel-header">
            <div className="flex items-center gap-2">
              <Activity className="w-4 h-4" />
              <span>Live Event Feed</span>
            </div>
          </div>
          <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
            {events.map((event, index) => (
              <div
                key={index}
                className={`p-3 rounded border ${
                  event.severity === "critical"
                    ? "bg-critical/10 border-critical/30"
                    : event.severity === "warning"
                    ? "bg-warning/10 border-warning/30"
                    : "bg-safe/10 border-safe/30"
                }`}
              >
                <div className="flex items-start justify-between mb-1">
                  <span className="text-xs font-mono text-muted-foreground">{event.time}</span>
                  <span
                    className={`text-xs uppercase font-semibold ${
                      event.severity === "critical"
                        ? "text-critical"
                        : event.severity === "warning"
                        ? "text-warning"
                        : "text-safe"
                    }`}
                  >
                    {event.severity === "critical" ? "HIGH RISK" : event.severity.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm">{event.message}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
