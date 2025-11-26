import { AlertTriangle, Download, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

const TrackFault = () => {
  const faultTypes = ["Crack", "Sleeper Damage", "Misalignment", "Waterlogging", "Electrical Hazard"];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Track Fault Analysis</h2>
          <p className="text-muted-foreground">Engineering diagnostic and maintenance system</p>
        </div>
        <Button variant="outline">
          <Wrench className="w-4 h-4 mr-2" />
          Maintenance Mode
        </Button>
      </div>

      {/* Fault Selector */}
      <div className="console-panel p-6">
        <h3 className="text-sm font-medium uppercase tracking-wide mb-4">Select Fault Class</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {faultTypes.map((type) => (
            <button
              key={type}
              className="p-4 border border-border rounded hover:border-primary hover:bg-primary/10 transition-all text-sm font-medium"
            >
              <AlertTriangle className="w-5 h-5 mx-auto mb-2 text-warning" />
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Two Column Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Preview */}
        <div className="console-panel">
          <div className="console-panel-header">Fault Preview</div>
          <div className="p-4">
            <div className="aspect-video bg-secondary rounded border border-border flex items-center justify-center mb-4">
              <div className="text-center text-muted-foreground">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4 opacity-30" />
                <p>Image/Video analysis view</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Image
              </Button>
              <Button size="sm" variant="outline" className="flex-1">
                <Download className="w-4 h-4 mr-2" />
                Download Report
              </Button>
            </div>
          </div>
        </div>

        {/* Fault Details */}
        <div className="console-panel">
          <div className="console-panel-header">Fault Analysis Details</div>
          <div className="p-6 space-y-4">
            <div className="border border-warning/30 bg-warning/10 rounded p-4">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <h4 className="font-semibold">Track Crack Detected</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Fault Type:</span>
                  <span className="font-semibold">Longitudinal Crack</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Severity Level:</span>
                  <span className="font-semibold text-warning">HIGH</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Suggested Speed:</span>
                  <span className="font-semibold text-critical">40 km/h</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Confidence:</span>
                  <span className="font-semibold">94.2%</span>
                </div>
              </div>
            </div>

            <div className="console-panel p-4">
              <h4 className="text-sm font-semibold uppercase tracking-wide mb-3">Immediate Action Required</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-critical mt-1.5"></div>
                  <span>Reduce train speed to 40 km/h</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-critical mt-1.5"></div>
                  <span>Alert maintenance crew immediately</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-critical mt-1.5"></div>
                  <span>Schedule inspection within 24 hours</span>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="console-panel p-3">
                <div className="text-muted-foreground mb-1">Location</div>
                <div className="font-mono text-xs">23.45°N, 77.41°E</div>
              </div>
              <div className="console-panel p-3">
                <div className="text-muted-foreground mb-1">Detection Time</div>
                <div className="font-mono text-xs">09:21:34 IST</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackFault;
