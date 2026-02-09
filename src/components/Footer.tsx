"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  ArrowRight,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const links = {
    services: [
      "essential",
      "professional",
      "sre",
      "dataPerformance",
      "aiAutomation",
      "enterprise",
    ],
    company: ["about", "careers", "blog", "contact"],
    resources: ["docs", "caseStudies", "whitepapers", "status"],
  };

  return (
    <footer id="contact" className="border-t border-border bg-card/50">
      <div className="container px-4 md:px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">
                  FS
                </span>
              </div>
              <span className="font-bold text-xl">FeasibleSolutions</span>
            </a>

            <p className="text-muted-foreground text-sm mb-6 max-w-sm leading-relaxed">
              {t("footer.description")}
            </p>

            <div className="space-y-3">
              <a
                href="mailto:fssystemsolutions@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                fssystemsolutions@gmail.com
              </a>

              <a
                href="https://wa.me/5511998200402"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground"
              >
                <Phone className="h-4 w-4" />
                +55 11 99820-0402
              </a>

              <span className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                {t("footer.location")}
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">
              {t("footer.sections.services")}
            </h4>
            <ul className="space-y-3">
              {links.services.map((key) => (
                <li key={key}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t(`footer.services.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">
              {t("footer.sections.company")}
            </h4>
            <ul className="space-y-3">
              {links.company.map((key) => (
                <li key={key}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t(`footer.company.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">
              {t("footer.sections.resources")}
            </h4>
            <ul className="space-y-3">
              {links.resources.map((key) => (
                <li key={key}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t(`footer.resources.${key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 p-8 md:p-10 rounded-2xl glass-card text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {t("footer.cta.title")}
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            {t("footer.cta.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group text-base px-8 py-6 shadow-button">
              <a href="mailto:fssystemsolutions@gmail.com">
                {t("footer.cta.primary")}
              </a>
              
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 py-6 border-border hover:bg-secondary"
            >
              <MessageSquare className="mr-2 h-5 w-5" />
              <a
                href="https://wa.me/5511998200402"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("footer.cta.secondary")}
              </a>
            </Button> 
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} FeasibleSolutions. {t("footer.rights")}
          </p>

          <div className="flex items-center gap-4">
            <Linkedin className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Github className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            <Twitter className="h-5 w-5 text-muted-foreground hover:text-foreground cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
