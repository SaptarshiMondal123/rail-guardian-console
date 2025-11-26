import { Gamepad2, Zap } from "lucide-react";

const Simulations = () => {
  return (
    <div className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Simulation Center</h2>
        <p className="text-muted-foreground">Railway digital twin testing environment</p>
      </div>

      {/* Mode Selection */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <button className="console-panel p-8 hover:border-primary hover:glow-primary transition-all group text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded bg-primary/20 group-hover:bg-primary/30 transition-colors">
              <Gamepad2 className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Obstacle Simulation</h3>
          </div>
          <p className="text-muted-foreground">
            Test detection systems with various obstacle scenarios including animals, vehicles, and debris
          </p>
        </button>

        <button className="console-panel p-8 hover:border-warning hover:glow-warning transition-all group text-left">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 rounded bg-warning/20 group-hover:bg-warning/30 transition-colors">
              <Zap className="w-8 h-8 text-warning" />
            </div>
            <h3 className="text-xl font-bold">Track Fault Simulation</h3>
          </div>
          <p className="text-muted-foreground">
            Simulate track defects and analyze system response for maintenance scenarios
          </p>
        </button>
      </div>

      {/* Simulation Viewer */}
      <div className="console-panel">
        <div className="console-panel-header">3D Simulation Environment</div>
        <div className="aspect-video bg-secondary rounded-b flex items-center justify-center border-t-0">
          <div className="text-center text-muted-foreground">
            <Gamepad2 className="w-16 h-16 mx-auto mb-4 opacity-30" />
            <p className="text-lg font-medium">Select a simulation mode to begin</p>
            <p className="text-sm mt-2">Real-time 3D rendering with physics simulation</p>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="console-panel p-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">Current Speed</h4>
          <div className="text-3xl font-bold">0 km/h</div>
        </div>
        <div className="console-panel p-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">Distance to Object</h4>
          <div className="text-3xl font-bold">-- m</div>
        </div>
        <div className="console-panel p-6">
          <h4 className="text-sm font-medium uppercase tracking-wide text-muted-foreground mb-2">Reaction Time</h4>
          <div className="text-3xl font-bold">-- ms</div>
        </div>
      </div>
    </div>
  );
};

export default Simulations;
