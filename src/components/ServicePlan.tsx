import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface ServicePlanProps {
  title: string;
  subtitle: string;
  objectiveLabel: string;
  objective: string;
  servicesLabel: string;
  services: string[];
  practicesLabel: string;
  practices: string[];
  resultsLabel: string;
  results: string[];
  icon: LucideIcon;
  colorClass: string;
  index: number;
}

const ServicePlan = ({
  title,
  subtitle,
  objectiveLabel,
  objective,
  servicesLabel,
  services,
  practicesLabel,
  practices,
  resultsLabel,
  results,
  icon: Icon,
  colorClass,
  index,
}: ServicePlanProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative glass-card rounded-2xl p-6 md:p-8 glow-effect hover:bg-card/80 transition-all duration-300"
    >
      <div className={`w-12 h-12 rounded-xl ${colorClass} bg-opacity-20 flex items-center justify-center mb-6`}>
        <Icon className={`h-6 w-6 ${colorClass.replace("bg-", "text-")}`} />
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-bold mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground">{subtitle}</p>
      </div>

      <div className="mb-6 pb-6 border-b border-border/50">
        <p className="text-sm font-medium text-primary mb-2">
          {objectiveLabel}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {objective}
        </p>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium mb-3">{servicesLabel}</p>
        <ul className="space-y-2">
          {services.slice(0, 4).map((service, i) => (
            <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 ${colorClass}`} />
              {service}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <p className="text-sm font-medium mb-3">{practicesLabel}</p>
        <div className="flex flex-wrap gap-2">
          {practices.slice(0, 4).map((practice, i) => (
            <span
              key={i}
              className="text-xs px-2 py-1 rounded-md bg-secondary text-muted-foreground"
            >
              {practice}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-6 border-t border-border/50">
        <p className="text-sm font-medium mb-3 text-primary">
          {resultsLabel}
        </p>
        <ul className="space-y-1">
          {results.map((result, i) => (
            <li
              key={i}
              className="text-sm text-muted-foreground flex items-center gap-2"
            >
              <span className="text-primary">✓</span>
              {result}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServicePlan;
