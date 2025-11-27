import { BarChart3, TrendingUp, AlertTriangle, MapPin, Activity, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const Analytics = () => {
  const kpis = [
    { icon: Activity, label: "Videos Processed", value: "1,247", change: "+12%", trend: "up" },
    { icon: AlertTriangle, label: "Total Hazards", value: "2,438", change: "+8%", trend: "up" },
    { icon: Target, label: "Detection Accuracy", value: "96.4%", change: "+2.1%", trend: "up" },
    { icon: TrendingUp, label: "Avg Response Time", value: "87ms", change: "-15ms", trend: "down" },
  ];

  const faultTypes = [
    { type: "Animals", count: 842, percentage: 35, color: "bg-critical" },
    { type: "Debris", count: 596, percentage: 24, color: "bg-warning" },
    { type: "Vehicles", count: 478, percentage: 20, color: "bg-primary" },
    { type: "Track Faults", count: 312, percentage: 13, color: "bg-safe" },
    { type: "Other", count: 210, percentage: 8, color: "bg-muted" },
  ];

  const recentEvents = [
    { time: "14:23", location: "KM 234.5", type: "Animal", severity: "HIGH" },
    { time: "14:15", location: "KM 231.2", type: "Debris", severity: "MEDIUM" },
    { time: "14:02", location: "KM 228.8", type: "Track Crack", severity: "HIGH" },
    { time: "13:58", location: "KM 225.4", type: "Vehicle", severity: "CRITICAL" },
    { time: "13:45", location: "KM 222.1", type: "Person", severity: "CRITICAL" },
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold">Analytics & Intelligence</h2>
        <p className="text-muted-foreground">Comprehensive safety insights and performance metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((kpi, index) => (
          <Card key={index} className="p-6">
            <div className="flex items-start justify-between mb-4">
              <div className="p-2 rounded bg-primary/20">
                <kpi.icon className="w-5 h-5 text-primary" />
              </div>
              <span
                className={`text-xs font-medium ${
                  kpi.trend === "up" ? "text-safe" : "text-primary"
                }`}
              >
                {kpi.change}
              </span>
            </div>
            <div className="text-sm text-muted-foreground mb-1">{kpi.label}</div>
            <div className="text-2xl lg:text-3xl font-bold">{kpi.value}</div>
          </Card>
        ))}
      </div>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Hazard Distribution */}
          <div className="console-panel">
            <div className="console-panel-header">Hazard Type Distribution</div>
            <div className="p-6 space-y-4">
              {faultTypes.map((fault, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{fault.type}</span>
                    <span className="text-muted-foreground">
                      {fault.count} ({fault.percentage}%)
                    </span>
                  </div>
                  <div className="h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className={`h-full ${fault.color} transition-all duration-500`}
                      style={{ width: `${fault.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline Chart */}
          <div className="console-panel">
            <div className="console-panel-header">Detection Frequency Over Time</div>
            <div className="p-6">
              <div className="h-64 bg-secondary rounded flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <BarChart3 className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-sm">Time-series graph</p>
                  <p className="text-xs mt-2">Hazard frequency by hour/day/month</p>
                </div>
              </div>
            </div>
          </div>

          {/* Heatmap */}
          <div className="console-panel">
            <div className="console-panel-header flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Risk Heatmap</span>
            </div>
            <div className="p-6">
              <div className="aspect-video bg-secondary rounded flex items-center justify-center border border-border">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-30" />
                  <p className="text-sm">Geospatial heatmap</p>
                  <p className="text-xs mt-2">High-risk zones along railway corridor</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stats & Events */}
        <div className="space-y-6">
          {/* Model Performance */}
          <div className="console-panel">
            <div className="console-panel-header">Model Performance</div>
            <div className="p-6 space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Precision</span>
                  <span className="font-semibold">94.2%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary" style={{ width: "94.2%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">Recall</span>
                  <span className="font-semibold">97.8%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-safe" style={{ width: "97.8%" }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted-foreground">mAP</span>
                  <span className="font-semibold">96.1%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-warning" style={{ width: "96.1%" }} />
                </div>
              </div>
            </div>
          </div>

          {/* Severity Distribution */}
          <div className="console-panel">
            <div className="console-panel-header">Severity Distribution</div>
            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between p-3 rounded bg-critical/10 border border-critical/20">
                <span className="text-sm font-medium">Critical</span>
                <span className="text-lg font-bold text-critical">342</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded bg-warning/10 border border-warning/20">
                <span className="text-sm font-medium">High</span>
                <span className="text-lg font-bold text-warning">518</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded bg-primary/10 border border-primary/20">
                <span className="text-sm font-medium">Medium</span>
                <span className="text-lg font-bold text-primary">892</span>
              </div>
              <div className="flex items-center justify-between p-3 rounded bg-safe/10 border border-safe/20">
                <span className="text-sm font-medium">Low</span>
                <span className="text-lg font-bold text-safe">686</span>
              </div>
            </div>
          </div>

          {/* Recent Events Feed */}
          <div className="console-panel">
            <div className="console-panel-header">Recent Detections</div>
            <div className="p-4 space-y-3 max-h-96 overflow-y-auto">
              {recentEvents.map((event, index) => (
                <div
                  key={index}
                  className={`p-3 rounded border ${
                    event.severity === "CRITICAL"
                      ? "bg-critical/10 border-critical/30"
                      : event.severity === "HIGH"
                      ? "bg-warning/10 border-warning/30"
                      : "bg-primary/10 border-primary/30"
                  }`}
                >
                  <div className="flex justify-between text-xs mb-1">
                    <span className="font-mono text-muted-foreground">{event.time}</span>
                    <span
                      className={`font-semibold ${
                        event.severity === "CRITICAL"
                          ? "text-critical"
                          : event.severity === "HIGH"
                          ? "text-warning"
                          : "text-primary"
                      }`}
                    >
                      {event.severity}
                    </span>
                  </div>
                  <div className="text-sm font-medium">{event.type}</div>
                  <div className="text-xs text-muted-foreground mt-1">{event.location}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
