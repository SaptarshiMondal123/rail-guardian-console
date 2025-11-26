import { BarChart3, TrendingUp } from "lucide-react";

const Analytics = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-muted-foreground">Operational intelligence and performance metrics</p>
        </div>
        <select className="bg-secondary border border-border rounded px-4 py-2 text-sm">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>Last 90 Days</option>
        </select>
      </div>

      {/* Visual Analytics */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="console-panel">
          <div className="console-panel-header">Detection Heatmap</div>
          <div className="p-4">
            <div className="h-64 bg-secondary rounded border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>Geographic heatmap visualization</p>
              </div>
            </div>
          </div>
        </div>

        <div className="console-panel">
          <div className="console-panel-header">Hazard Frequency Timeline</div>
          <div className="p-4">
            <div className="h-64 bg-secondary rounded border border-border flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>Time series chart</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Statistics Table */}
      <div className="console-panel">
        <div className="console-panel-header">Event Statistics</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="p-4 font-medium text-muted-foreground">Event Type</th>
                <th className="p-4 font-medium text-muted-foreground">Count</th>
                <th className="p-4 font-medium text-muted-foreground">Avg Severity</th>
                <th className="p-4 font-medium text-muted-foreground">Response Time</th>
                <th className="p-4 font-medium text-muted-foreground">Trend</th>
              </tr>
            </thead>
            <tbody>
              {[
                { type: "Animal Detection", count: 45, severity: "Medium", time: "1.2s", trend: "+12%" },
                { type: "Track Crack", count: 12, severity: "High", time: "0.8s", trend: "-5%" },
                { type: "Person on Track", count: 8, severity: "Critical", time: "0.5s", trend: "+3%" },
                { type: "Vehicle Obstruction", count: 15, severity: "Medium", time: "1.5s", trend: "-8%" },
              ].map((row, index) => (
                <tr key={index} className="border-b border-border hover:bg-secondary/50">
                  <td className="p-4 font-medium">{row.type}</td>
                  <td className="p-4">{row.count}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded text-xs font-semibold ${
                        row.severity === "Critical"
                          ? "bg-critical/20 text-critical"
                          : row.severity === "High"
                          ? "bg-warning/20 text-warning"
                          : "bg-safe/20 text-safe"
                      }`}
                    >
                      {row.severity}
                    </span>
                  </td>
                  <td className="p-4 font-mono">{row.time}</td>
                  <td className="p-4">
                    <span className={row.trend.startsWith("+") ? "text-critical" : "text-safe"}>
                      {row.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="console-panel p-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">Model Accuracy</h4>
          <div className="text-3xl font-bold text-safe">96.8%</div>
        </div>
        <div className="console-panel p-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">False Positives</h4>
          <div className="text-3xl font-bold">2.4%</div>
        </div>
        <div className="console-panel p-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">Avg Processing</h4>
          <div className="text-3xl font-bold">38ms</div>
        </div>
        <div className="console-panel p-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">System Uptime</h4>
          <div className="text-3xl font-bold text-safe">99.9%</div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
