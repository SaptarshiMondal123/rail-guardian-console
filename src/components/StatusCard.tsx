import { LucideIcon } from "lucide-react";

interface StatusCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "default" | "critical" | "warning" | "safe";
  trend?: string;
}

const StatusCard = ({ title, value, subtitle, icon: Icon, variant = "default", trend }: StatusCardProps) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "critical":
        return "border-critical/50 glow-critical";
      case "warning":
        return "border-warning/50 glow-warning";
      case "safe":
        return "border-safe/50 glow-safe";
      default:
        return "border-border";
    }
  };

  const getIconBg = () => {
    switch (variant) {
      case "critical":
        return "bg-critical/20 text-critical";
      case "warning":
        return "bg-warning/20 text-warning";
      case "safe":
        return "bg-safe/20 text-safe";
      default:
        return "bg-primary/20 text-primary";
    }
  };

  return (
    <div className={`console-panel ${getVariantStyles()} p-6 hover:border-primary/30 transition-all`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded ${getIconBg()}`}>
          <Icon className="w-6 h-6" />
        </div>
        {trend && (
          <span className="text-xs text-muted-foreground uppercase tracking-wider">{trend}</span>
        )}
      </div>
      
      <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">{title}</h3>
      <div className="text-3xl font-bold mb-1">{value}</div>
      {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
    </div>
  );
};

export default StatusCard;
