import { motion } from "framer-motion";
import { 
  Target, 
  ListChecks, 
  Users, 
  Eye, 
  RefreshCw,
  CheckCircle2
} from "lucide-react";

const practices = [
  {
    icon: Target,
    title: "Planejamento em Sprints",
    description: "Ciclos curtos e focados para entregas frequentes e previsíveis.",
  },
  {
    icon: ListChecks,
    title: "Backlog Priorizado",
    description: "Funcionalidades ordenadas por valor de negócio.",
  },
  {
    icon: Users,
    title: "Daily Meetings",
    description: "Reuniões diárias objetivas para alinhamento rápido.",
  },
  {
    icon: Eye,
    title: "Sprint Review",
    description: "Demonstração de resultados com stakeholders.",
  },
  {
    icon: RefreshCw,
    title: "Retrospectiva",
    description: "Melhoria contínua do processo e da equipe.",
  },
];

const benefits = [
  "Visibilidade total do projeto",
  "Redução de riscos",
  "Entregas frequentes",
  "Feedback rápido",
  "Transparência",
  "Colaboração contínua",
];

const Methodology = () => {
  return (
    <section id="methodology" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// METODOLOGIA</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Agile &{" "}
              <span className="text-gradient">Scrum</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Utilizamos metodologias ágeis para garantir entregas incrementais, 
              feedback rápido e total transparência no desenvolvimento dos projetos.
            </p>

            {/* Benefits grid */}
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right content - Practices */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {practices.map((practice, index) => (
              <motion.div
                key={practice.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-5 flex items-start gap-4 hover:bg-card/80 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <practice.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{practice.title}</h3>
                  <p className="text-sm text-muted-foreground">{practice.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
