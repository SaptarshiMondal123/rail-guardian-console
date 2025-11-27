import { FileText, Download, Search, Filter, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Reports = () => {
  const reports = [
    {
      id: "RPT-2024-001",
      name: "Delhi-Mumbai Route Analysis",
      date: "2024-01-15",
      type: "Detection",
      hazards: 24,
      confidence: "96.2%",
      status: "completed"
    },
    {
      id: "RPT-2024-002",
      name: "Track Fault Report - Section A",
      date: "2024-01-14",
      type: "Track Fault",
      hazards: 8,
      confidence: "94.8%",
      status: "completed"
    },
    {
      id: "RPT-2024-003",
      name: "Weekly Safety Summary",
      date: "2024-01-13",
      type: "Analytics",
      hazards: 156,
      confidence: "95.5%",
      status: "completed"
    },
    {
      id: "RPT-2024-004",
      name: "Obstacle Detection - Night Shift",
      date: "2024-01-12",
      type: "Detection",
      hazards: 12,
      confidence: "97.1%",
      status: "completed"
    },
    {
      id: "RPT-2024-005",
      name: "Simulation Results - Scenario 3",
      date: "2024-01-11",
      type: "Simulation",
      hazards: 0,
      confidence: "N/A",
      status: "completed"
    },
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">Report Library</h2>
          <p className="text-muted-foreground">Access historical analysis and generated reports</p>
        </div>
        <Button>
          <FileText className="w-4 h-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      {/* Filters & Search */}
      <div className="console-panel p-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="md:col-span-2 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              placeholder="Search reports..."
              className="pl-10 bg-background"
            />
          </div>
          <Button variant="outline" className="justify-start">
            <Filter className="w-4 h-4 mr-2" />
            Type: All
          </Button>
          <Button variant="outline" className="justify-start">
            <Calendar className="w-4 h-4 mr-2" />
            Date Range
          </Button>
        </div>
      </div>

      {/* Reports Table */}
      <div className="console-panel">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary/50 border-b border-border">
              <tr className="text-left text-sm">
                <th className="p-4">Report ID</th>
                <th className="p-4">Name</th>
                <th className="p-4">Type</th>
                <th className="p-4">Date</th>
                <th className="p-4">Hazards</th>
                <th className="p-4">Confidence</th>
                <th className="p-4">Status</th>
                <th className="p-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-secondary/30 transition-colors">
                  <td className="p-4 font-mono text-sm text-primary">{report.id}</td>
                  <td className="p-4 font-medium">{report.name}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded text-xs bg-primary/20 text-primary">
                      {report.type}
                    </span>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">{report.date}</td>
                  <td className="p-4 text-center">{report.hazards}</td>
                  <td className="p-4">{report.confidence}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded text-xs bg-safe/20 text-safe">
                      {report.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="console-panel p-6 text-center">
          <FileText className="w-8 h-8 mx-auto mb-3 text-primary" />
          <div className="text-2xl font-bold mb-1">247</div>
          <div className="text-sm text-muted-foreground">Total Reports</div>
        </div>
        <div className="console-panel p-6 text-center">
          <div className="text-2xl font-bold mb-1">2,438</div>
          <div className="text-sm text-muted-foreground">Hazards Documented</div>
        </div>
        <div className="console-panel p-6 text-center">
          <div className="text-2xl font-bold mb-1">95.8%</div>
          <div className="text-sm text-muted-foreground">Avg Confidence</div>
        </div>
        <div className="console-panel p-6 text-center">
          <div className="text-2xl font-bold mb-1">1.2 TB</div>
          <div className="text-sm text-muted-foreground">Data Processed</div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
