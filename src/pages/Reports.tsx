import { FileText, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Reports = () => {
  const reports = [
    { name: "Daily_Detection_Report_2024-01-15.pdf", date: "2024-01-15", type: "Detection", confidence: "94%" },
    { name: "Track_Fault_Analysis_Section_B.csv", date: "2024-01-14", type: "Fault", confidence: "91%" },
    { name: "Weekly_Summary_Week_02.pdf", date: "2024-01-13", type: "Summary", confidence: "98%" },
    { name: "Incident_Report_Animal_001.pdf", date: "2024-01-12", type: "Incident", confidence: "96%" },
    { name: "Monthly_Analytics_December.pdf", date: "2024-01-10", type: "Analytics", confidence: "95%" },
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Report Library</h2>
          <p className="text-muted-foreground">Access and download system reports</p>
        </div>
        <Button>
          <FileText className="w-4 h-4 mr-2" />
          Generate New Report
        </Button>
      </div>

      {/* Search and Filter */}
      <div className="console-panel p-4">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full pl-10 pr-4 py-2 bg-secondary border border-border rounded text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <select className="bg-secondary border border-border rounded px-4 py-2 text-sm">
            <option>All Types</option>
            <option>Detection</option>
            <option>Fault</option>
            <option>Incident</option>
            <option>Analytics</option>
          </select>
          <select className="bg-secondary border border-border rounded px-4 py-2 text-sm">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Custom Range</option>
          </select>
        </div>
      </div>

      {/* Reports Table */}
      <div className="console-panel">
        <div className="console-panel-header">Available Reports</div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="border-b border-border">
              <tr className="text-left">
                <th className="p-4 font-medium text-muted-foreground">File Name</th>
                <th className="p-4 font-medium text-muted-foreground">Processed On</th>
                <th className="p-4 font-medium text-muted-foreground">Type</th>
                <th className="p-4 font-medium text-muted-foreground">Confidence</th>
                <th className="p-4 font-medium text-muted-foreground">Actions</th>
              </tr>
            </thead>
            <tbody>
              {reports.map((report, index) => (
                <tr key={index} className="border-b border-border hover:bg-secondary/50">
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <span className="font-medium">{report.name}</span>
                    </div>
                  </td>
                  <td className="p-4 font-mono text-muted-foreground">{report.date}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 rounded text-xs font-semibold bg-primary/20 text-primary">
                      {report.type}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-safe"
                          style={{ width: report.confidence }}
                        ></div>
                      </div>
                      <span className="text-xs font-mono">{report.confidence}</span>
                    </div>
                  </td>
                  <td className="p-4">
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        PDF
                      </Button>
                      <Button size="sm" variant="outline">
                        <Download className="w-4 h-4 mr-1" />
                        CSV
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
