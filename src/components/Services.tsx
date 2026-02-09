import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ServicePlan from "./ServicePlan";
import {
  Wrench,
  Database,
  Layers,
  Activity,
  Rocket,
  Shield,
  Brain,
  Building2,
} from "lucide-react";

const plansConfig = [
  {
    key: "essential",
    icon: Wrench,
    colorClass: "bg-plan-essential",
    title: "Essential",
  },
  {
    key: "projects",
    icon: Layers,
    colorClass: "bg-plan-projects",
    title: "Projects & New Features",
  },
  {
    key: "data",
    icon: Database,
    colorClass: "bg-plan-data",
    title: "Data & Performance",
  },
  {
    key: "professional",
    icon: Rocket,
    colorClass: "bg-plan-professional",
    title: "Professional",
  },
  {
    key: "observability",
    icon: Activity,
    colorClass: "bg-plan-observability",
    title: "Observability & Monitoring",
  },
  {
    key: "sre",
    icon: Shield,
    colorClass: "bg-plan-sre",
    title: "SRE",
  },
  {
    key: "ai",
    icon: Brain,
    colorClass: "bg-plan-ai",
    title: "AI & Automation",
  },
  {
    key: "enterprise",
    icon: Building2,
    colorClass: "bg-plan-enterprise",
    title: "Enterprise",
  },
];

const Services = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-24 md:py-32 relative">
      <div className="container px-4 md:px-6 relative z-10">

        <motion.div className="text-center mb-16">
          <span className="text-primary font-mono text-sm mb-4 block">
            {t("servicesSection.label")}
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("servicesSection.title")}{" "}
            <span className="text-gradient">
              {t("servicesSection.highlight")}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t("servicesSection.description")}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plansConfig.map((plan, index) => (
            <ServicePlan
              key={plan.key}
              // title={plan.title}
              title={t(`plans.${plan.key}.title`)}
              subtitle={t(`plans.${plan.key}.subtitle`)}
              objectiveLabel={t(`plans.labels.objective`)}
              servicesLabel={t(`plans.labels.services`)}
              practicesLabel={t(`plans.labels.practices`)}
              resultsLabel={t(`plans.labels.results`)}
              objective={t(`plans.${plan.key}.objective`)}
              services={t(`plans.${plan.key}.services`, { returnObjects: true }) as string[]}
              practices={t(`plans.${plan.key}.practices`, { returnObjects: true }) as string[]}
              results={t(`plans.${plan.key}.results`, { returnObjects: true }) as string[]}
              icon={plan.icon}
              colorClass={plan.colorClass}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
