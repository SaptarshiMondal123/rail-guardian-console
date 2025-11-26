import { Settings as SettingsIcon, Cpu, Database, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Settings = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold">System Settings</h2>
        <p className="text-muted-foreground">Administrative console and configuration</p>
      </div>

      {/* System Status */}
      <div className="console-panel">
        <div className="console-panel-header">
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4" />
            <span>System Resources</span>
          </div>
        </div>
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <div className="text-sm text-muted-foreground mb-2">GPU Status</div>
            <div className="text-2xl font-bold text-safe mb-1">ONLINE</div>
            <div className="text-xs text-muted-foreground">NVIDIA RTX 4090</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-2">Model Version</div>
            <div className="text-2xl font-bold mb-1">v2.4.1</div>
            <div className="text-xs text-muted-foreground">Updated 2h ago</div>
          </div>
          <div>
            <div className="text-sm text-muted-foreground mb-2">API Status</div>
            <div className="text-2xl font-bold text-safe mb-1">ACTIVE</div>
            <div className="text-xs text-muted-foreground">200 requests/min</div>
          </div>
        </div>
      </div>

      {/* Database Management */}
      <div className="console-panel">
        <div className="console-panel-header">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            <span>Data Management</span>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between p-4 border border-border rounded">
            <div>
              <h4 className="font-semibold mb-1">Upload History</h4>
              <p className="text-sm text-muted-foreground">Clear all uploaded videos and images</p>
            </div>
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Uploads
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded">
            <div>
              <h4 className="font-semibold mb-1">Output Cache</h4>
              <p className="text-sm text-muted-foreground">Remove processed detection outputs</p>
            </div>
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Clear Outputs
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded">
            <div>
              <h4 className="font-semibold mb-1">Analytics Data</h4>
              <p className="text-sm text-muted-foreground">Reset all analytics and statistics</p>
            </div>
            <Button variant="outline" size="sm">
              <Trash2 className="w-4 h-4 mr-2" />
              Reset Analytics
            </Button>
          </div>
        </div>
      </div>

      {/* Configuration */}
      <div className="console-panel">
        <div className="console-panel-header">
          <div className="flex items-center gap-2">
            <SettingsIcon className="w-4 h-4" />
            <span>Detection Configuration</span>
          </div>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Confidence Threshold</label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="85"
                className="w-full"
              />
              <div className="text-xs text-muted-foreground mt-1">85%</div>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Detection Sensitivity</label>
              <select className="w-full bg-secondary border border-border rounded px-3 py-2 text-sm">
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 border border-border rounded">
            <div>
              <h4 className="font-semibold mb-1">Real-time Processing</h4>
              <p className="text-sm text-muted-foreground">Enable live video stream analysis</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" defaultChecked className="sr-only peer" />
              <div className="w-11 h-6 bg-secondary peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
