import { useState } from "react";
import { Upload, Play, Pause, Download, FileVideo, BarChart3, MapPin, AlertTriangle, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Detection = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const simulateProcessing = () => {
    setIsProcessing(true);
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const detections = [
    { id: 1, time: "00:12", type: "Animal", risk: "critical", distance: "24m", thumbnail: "🦌" },
    { id: 2, time: "00:45", type: "Debris", risk: "warning", distance: "67m", thumbnail: "🪨" },
    { id: 3, time: "01:23", type: "Vehicle", risk: "critical", distance: "15m", thumbnail: "🚗" },
    { id: 4, time: "02:08", type: "Person", risk: "critical", distance: "32m", thumbnail: "🚶" },
  ];

  return (
    <div className="p-4 lg:p-6 space-y-6">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold">Hazard Detection System</h2>
          <p className="text-muted-foreground">Upload video for AI-powered obstacle and track fault analysis</p>
        </div>
        {uploadedFile && progress === 100 && (
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Annotated Video
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              CSV Report
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Full Report
            </Button>
          </div>
        )}
      </div>

      {/* Upload Section */}
      {!uploadedFile && (
        <div
          className="console-panel p-12 border-dashed border-2 hover:border-primary/50 transition-all cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById('file-input')?.click()}
        >
          <input
            id="file-input"
            type="file"
            accept="video/*"
            className="hidden"
            onChange={handleFileUpload}
          />
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Upload Railway Video</h3>
              <p className="text-sm text-muted-foreground">
                Drag & drop your video file here or click to browse
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                Supports: MP4, AVI, MOV • Max size: 500MB
              </p>
            </div>
          </div>
        </div>
      )}

      {/* File Info & Processing */}
      {uploadedFile && (
        <>
          <div className="console-panel p-6">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded bg-primary/20">
                  <FileVideo className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">{uploadedFile.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB
                  </p>
                </div>
              </div>
              {!isProcessing && progress === 0 && (
                <Button onClick={simulateProcessing}>
                  <Play className="w-4 h-4 mr-2" />
                  Start Analysis
                </Button>
              )}
            </div>

            {/* Processing Status */}
            {isProcessing && (
              <div className="mt-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Processing video...</span>
                    <span>{progress}%</span>
                  </div>
                  <Progress value={progress} className="h-2" />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                  <div className={progress >= 25 ? "text-primary" : "text-muted-foreground"}>
                    ✓ Preprocessing
                  </div>
                  <div className={progress >= 50 ? "text-primary" : "text-muted-foreground"}>
                    {progress >= 50 ? "✓" : "○"} AI Inference
                  </div>
                  <div className={progress >= 75 ? "text-primary" : "text-muted-foreground"}>
                    {progress >= 75 ? "✓" : "○"} Encoding
                  </div>
                  <div className={progress >= 100 ? "text-primary" : "text-muted-foreground"}>
                    {progress >= 100 ? "✓" : "○"} Report Generation
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Results Section */}
          {progress === 100 && (
            <>
              {/* Summary Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
                <Card className="p-4 border-critical/30 bg-critical/5">
                  <div className="text-xs text-muted-foreground mb-1">Total Hazards</div>
                  <div className="text-2xl font-bold text-critical">12</div>
                </Card>
                <Card className="p-4 border-warning/30 bg-warning/5">
                  <div className="text-xs text-muted-foreground mb-1">Max Severity</div>
                  <div className="text-2xl font-bold text-warning">HIGH</div>
                </Card>
                <Card className="p-4 border-primary/30">
                  <div className="text-xs text-muted-foreground mb-1">Stopping Distance</div>
                  <div className="text-2xl font-bold">124m</div>
                </Card>
                <Card className="p-4 border-safe/30 bg-safe/5">
                  <div className="text-xs text-muted-foreground mb-1">Action</div>
                  <div className="text-lg font-bold text-safe">BRAKE</div>
                </Card>
                <Card className="p-4">
                  <div className="text-xs text-muted-foreground mb-1">Process Time</div>
                  <div className="text-2xl font-bold">2.4s</div>
                </Card>
              </div>

              {/* Main Content - Two Columns on Desktop */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Video Player */}
                <div className="lg:col-span-2 console-panel">
                  <div className="console-panel-header flex items-center justify-between">
                    <span>Annotated Video Output</span>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Play className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="aspect-video bg-secondary flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <FileVideo className="w-16 h-16 mx-auto mb-4 opacity-30" />
                      <p>Video player with bounding boxes</p>
                      <p className="text-sm mt-2">Real-time hazard annotations</p>
                    </div>
                  </div>
                </div>

                {/* Right Sidebar Panels */}
                <div className="space-y-6">
                  {/* Risk Timeline */}
                  <div className="console-panel">
                    <div className="console-panel-header">Risk Timeline</div>
                    <div className="p-4">
                      <div className="h-32 bg-secondary rounded flex items-center justify-center border border-border">
                        <BarChart3 className="w-12 h-12 text-muted-foreground opacity-30" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        Risk level over time
                      </p>
                    </div>
                  </div>

                  {/* Map Preview */}
                  <div className="console-panel">
                    <div className="console-panel-header">Location Map</div>
                    <div className="p-4">
                      <div className="h-32 bg-secondary rounded flex items-center justify-center border border-border">
                        <MapPin className="w-12 h-12 text-muted-foreground opacity-30" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 text-center">
                        GPS: 23.45°N, 77.41°E
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detection Events Table */}
              <div className="console-panel">
                <div className="console-panel-header">Detection Events</div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-secondary/50 border-b border-border">
                      <tr className="text-left text-sm">
                        <th className="p-3">Time</th>
                        <th className="p-3">Preview</th>
                        <th className="p-3">Type</th>
                        <th className="p-3">Risk Level</th>
                        <th className="p-3">Distance</th>
                        <th className="p-3">Decision</th>
                        <th className="p-3">Location</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border">
                      {detections.map((detection) => (
                        <tr key={detection.id} className="hover:bg-secondary/30 transition-colors">
                          <td className="p-3 font-mono text-sm">{detection.time}</td>
                          <td className="p-3 text-2xl">{detection.thumbnail}</td>
                          <td className="p-3 font-medium">{detection.type}</td>
                          <td className="p-3">
                            <span
                              className={`px-2 py-1 rounded text-xs font-semibold ${
                                detection.risk === "critical"
                                  ? "bg-critical/20 text-critical"
                                  : "bg-warning/20 text-warning"
                              }`}
                            >
                              {detection.risk.toUpperCase()}
                            </span>
                          </td>
                          <td className="p-3">{detection.distance}</td>
                          <td className="p-3">
                            <span className="text-critical font-semibold">BRAKE</span>
                          </td>
                          <td className="p-3 text-sm text-muted-foreground">23.45°N, 77.41°E</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Detection;
