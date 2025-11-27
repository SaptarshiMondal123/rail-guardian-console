import { Settings as SettingsIcon, Database, Cpu, Activity, Bell, User, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold">System Settings</h2>
        <p className="text-muted-foreground">Configure and monitor system parameters</p>
      </div>

      {/* System Status */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded bg-primary/20">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">CPU Usage</div>
              <div className="text-2xl font-bold">45%</div>
            </div>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-primary" style={{ width: "45%" }} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded bg-warning/20">
              <Activity className="w-5 h-5 text-warning" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">GPU Usage</div>
              <div className="text-2xl font-bold">72%</div>
            </div>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-warning" style={{ width: "72%" }} />
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded bg-safe/20">
              <Database className="w-5 h-5 text-safe" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Storage</div>
              <div className="text-2xl font-bold">234 GB</div>
            </div>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full bg-safe" style={{ width: "58%" }} />
          </div>
        </Card>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Model Configuration */}
        <div className="console-panel">
          <div className="console-panel-header">Model Configuration</div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Model Version</div>
                <div className="text-sm text-muted-foreground">Current: v2.4.1</div>
              </div>
              <Button variant="outline" size="sm">Update</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Confidence Threshold</div>
                <div className="text-sm text-muted-foreground">85%</div>
              </div>
              <Button variant="outline" size="sm">Adjust</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Detection Mode</div>
                <div className="text-sm text-muted-foreground">Real-time + Batch</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="console-panel">
          <div className="console-panel-header flex items-center gap-2">
            <Bell className="w-4 h-4" />
            <span>Notification Settings</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Critical Alerts</div>
                <div className="text-sm text-muted-foreground">Instant notifications</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Email Reports</div>
                <div className="text-sm text-muted-foreground">Daily summary</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">SMS Alerts</div>
                <div className="text-sm text-muted-foreground">Emergency only</div>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* User Management */}
        <div className="console-panel">
          <div className="console-panel-header flex items-center gap-2">
            <User className="w-4 h-4" />
            <span>User Management</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <div className="font-medium">Admin</div>
                <div className="text-sm text-muted-foreground">Full access</div>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-primary/20 text-primary">Active</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border">
              <div>
                <div className="font-medium">Operator</div>
                <div className="text-sm text-muted-foreground">View & monitor</div>
              </div>
              <span className="text-xs px-2 py-1 rounded bg-safe/20 text-safe">Active</span>
            </div>
            <Button variant="outline" size="sm" className="w-full">
              Add User
            </Button>
          </div>
        </div>

        {/* Security */}
        <div className="console-panel">
          <div className="console-panel-header flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Security & Access</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Two-Factor Auth</div>
                <div className="text-sm text-muted-foreground">Enhanced security</div>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">API Access</div>
                <div className="text-sm text-muted-foreground">External integrations</div>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium">Audit Logs</div>
                <div className="text-sm text-muted-foreground">Track system access</div>
              </div>
              <Switch defaultChecked />
            </div>
          </div>
        </div>
      </div>

      {/* Data Management */}
      <div className="console-panel">
        <div className="console-panel-header">Data Management</div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline">
              <Database className="w-4 h-4 mr-2" />
              Export Database
            </Button>
            <Button variant="outline">
              <SettingsIcon className="w-4 h-4 mr-2" />
              Clear Cache
            </Button>
            <Button variant="outline" className="text-critical hover:text-critical">
              <Database className="w-4 h-4 mr-2" />
              Clear All Data
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
