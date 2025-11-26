import { Play, Pause, Maximize, Eye, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";

const Detection = () => {
  const detections = [
    { time: "00:45", type: "Animal", risk: "High", distance: "24m", decision: "Emergency Brake" },
    { time: "00:32", type: "Person", risk: "Critical", distance: "15m", decision: "Emergency Stop" },
    { time: "00:18", type: "Vehicle", risk: "Medium", distance: "45m", decision: "Slow Down" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Detection Monitor</h2>
          <p className="text-muted-foreground">Live video analysis and hazard detection</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Eye className="w-4 h-4 mr-2" />
            Toggle Boxes
          </Button>
          <Button variant="outline" size="sm">
            <Maximize className="w-4 h-4 mr-2" />
            Fullscreen
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Video Player */}
        <div className="lg:col-span-2 console-panel">
          <div className="aspect-video bg-secondary rounded-t flex items-center justify-center border-b border-border relative">
            <div className="text-center text-muted-foreground">
              <Play className="w-16 h-16 mx-auto mb-4 opacity-30" />
              <p className="text-lg font-medium">Video Feed</p>
              <p className="text-sm mt-2">AI-annotated real-time detection</p>
            </div>
            <div className="absolute top-4 left-4 bg-critical px-3 py-1 rounded text-sm font-semibold">
              LIVE
            </div>
          </div>
          <div className="p-4 bg-card rounded-b flex items-center justify-between border-t-0">
            <div className="flex items-center gap-4">
              <Button size="sm" variant="outline">
                <Play className="w-4 h-4" />
              </Button>
              <Button size="sm" variant="outline">
                <Pause className="w-4 h-4" />
              </Button>
              <div className="text-sm font-mono">00:00 / 02:34</div>
            </div>
            <div className="flex items-center gap-4">
              <select className="bg-secondary border border-border rounded px-3 py-1 text-sm">
                <option>1.0x</option>
                <option>0.5x</option>
                <option>2.0x</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Panels */}
        <div className="space-y-6">
          {/* Summary */}
          <div className="console-panel">
            <div className="console-panel-header">Summary Metrics</div>
            <div className="p-4 space-y-3">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Hazards Detected</div>
                <div className="text-2xl font-bold">3</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Max Severity</div>
                <div className="text-xl font-bold text-critical">CRITICAL</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Stopping Distance</div>
                <div className="text-2xl font-bold">15m</div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground mb-1">Processing Time</div>
                <div className="text-xl font-bold">42ms</div>
              </div>
            </div>
          </div>

          {/* Risk Timeline */}
          <div className="console-panel">
            <div className="console-panel-header">
              <div className="flex items-center gap-2">
                <Gauge className="w-4 h-4" />
                <span>Risk Timeline</span>
              </div>
            </div>
            <div className="p-4">
              <div className="h-32 bg-secondary rounded border border-border flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Timeline graph visualization</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detection Events */}
      <div className="console-panel">
        <div className="console-panel-header">Individual Detection Events</div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          {detections.map((detection, index) => (
            <div key={index} className="border border-border rounded p-4 hover:border-primary/50 transition-colors">
              <div className="aspect-video bg-secondary rounded mb-3 flex items-center justify-center">
                <Eye className="w-8 h-8 opacity-30" />
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Time:</span>
                  <span className="font-mono">{detection.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type:</span>
                  <span className="font-semibold">{detection.type}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Risk:</span>
                  <span
                    className={`font-semibold ${
                      detection.risk === "Critical"
                        ? "text-critical"
                        : detection.risk === "High"
                        ? "text-warning"
                        : "text-safe"
                    }`}
                  >
                    {detection.risk}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Distance:</span>
                  <span className="font-mono">{detection.distance}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Decision:</span>
                  <span className="font-semibold text-xs">{detection.decision}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detection;
