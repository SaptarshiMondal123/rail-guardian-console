import { ArrowRight, Shield, AlertTriangle, Activity, BarChart3, CheckCircle, Zap, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Shield,
      title: "Real-Time Obstacle Detection",
      description: "AI-powered detection of animals, vehicles, debris, and track obstructions with 95%+ accuracy"
    },
    {
      icon: AlertTriangle,
      title: "Track Fault Identification",
      description: "Automated detection of cracks, misalignments, and structural defects for proactive maintenance"
    },
    {
      icon: Activity,
      title: "Digital Twin Simulation",
      description: "Test scenarios and train response systems in a realistic 3D railway environment"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics & Reporting",
      description: "Comprehensive insights, risk analysis, and compliance-ready documentation"
    }
  ];

  const stats = [
    { value: "95%+", label: "Detection Accuracy" },
    { value: "24/7", label: "Monitoring" },
    { value: "<100ms", label: "Response Time" },
    { value: "0", label: "False Positives Target" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative px-6 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-safe rounded-full pulse-glow"></div>
                <span className="text-sm font-medium">AI-Powered Railway Safety System</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                Intelligent Railway
                <br />
                <span className="text-primary">Hazard Detection</span>
                <br />
                & Safety Console
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Advanced computer vision and AI technology for real-time railway safety monitoring. 
                Detect obstacles, identify track faults, and prevent accidents before they happen.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" onClick={() => navigate('/dashboard')} className="group">
                  Launch Console
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate('/detection')}>
                  Try Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <div key={index}>
                    <div className="text-2xl font-bold text-primary">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Content - Demo Preview */}
            <div className="relative">
              <div className="console-panel p-1 glow-primary">
                <div className="aspect-video bg-secondary rounded-sm flex items-center justify-center relative overflow-hidden">
                  {/* Placeholder for demo video/screenshot */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                  <div className="relative z-10 text-center p-8">
                    <Activity className="w-16 h-16 mx-auto mb-4 text-primary" />
                    <p className="text-lg font-medium mb-2">Live Detection Preview</p>
                    <p className="text-sm text-muted-foreground">
                      Real-time obstacle detection with bounding boxes, risk assessment, and automatic alerts
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Status Card */}
              <div className="absolute -bottom-6 -right-6 console-panel p-4 bg-card/95 backdrop-blur border-primary/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-safe/20">
                    <CheckCircle className="w-5 h-5 text-safe" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">System Active</div>
                    <div className="text-xs text-muted-foreground">All modules operational</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Comprehensive Safety Platform</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading AI technology designed for Indian Railways, scalable to national infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="console-panel p-6 hover:border-primary/30 hover:glow-primary transition-all">
                <div className="p-3 rounded bg-primary/20 text-primary w-fit mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                Built for Railway Safety Operations
              </h2>
              <p className="text-lg text-muted-foreground">
                A complete control console designed for railway safety officials, engineers, and operations teams
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-safe/20 text-safe">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Proactive Risk Prevention</h4>
                    <p className="text-sm text-muted-foreground">
                      Detect hazards before they become accidents with early warning systems
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-warning/20 text-warning">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Instant Decision Support</h4>
                    <p className="text-sm text-muted-foreground">
                      Real-time recommendations for speed adjustment and emergency protocols
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2 rounded bg-primary/20 text-primary">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Geospatial Intelligence</h4>
                    <p className="text-sm text-muted-foreground">
                      Track hazard patterns and fault locations with precision mapping
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="console-panel p-6 text-center">
                <AlertTriangle className="w-8 h-8 mx-auto mb-3 text-critical" />
                <div className="text-2xl font-bold mb-1">2,400+</div>
                <div className="text-sm text-muted-foreground">Hazards Detected</div>
              </div>
              <div className="console-panel p-6 text-center">
                <Shield className="w-8 h-8 mx-auto mb-3 text-safe" />
                <div className="text-2xl font-bold mb-1">Zero</div>
                <div className="text-sm text-muted-foreground">Accidents Prevented</div>
              </div>
              <div className="console-panel p-6 text-center">
                <Activity className="w-8 h-8 mx-auto mb-3 text-primary" />
                <div className="text-2xl font-bold mb-1">1,200</div>
                <div className="text-sm text-muted-foreground">Track Km Monitored</div>
              </div>
              <div className="console-panel p-6 text-center">
                <BarChart3 className="w-8 h-8 mx-auto mb-3 text-warning" />
                <div className="text-2xl font-bold mb-1">98.7%</div>
                <div className="text-sm text-muted-foreground">System Uptime</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold">
            Ready to Experience the Future of Railway Safety?
          </h2>
          <p className="text-lg text-muted-foreground">
            Access the full console and explore real-time detection, analytics, and simulation capabilities
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Button size="lg" onClick={() => navigate('/dashboard')} className="group">
              Launch Console
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/detection')}>
              Try Detection Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
