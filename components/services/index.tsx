"use client";

import Card from "../card";
import { motion } from "framer-motion";
import { Code2, Palette, Server, Globe } from "lucide-react";

const services = [
  {
    icon: Palette,
    gradient: "from-blue-500/20 via-sky-400/15 to-cyan-400/10",
    accent: "text-blue-600",
    variant: "blue" as const,
    title: "UI/UX Design",
    description:
      "Clean, user-centric interfaces that balance aesthetics with intuitive usability.",
  },
  {
    icon: Code2,
    gradient: "from-indigo-500/20 via-violet-400/15 to-purple-400/10",
    accent: "text-indigo-600",
    variant: "indigo" as const,
    title: "Front-End",
    description:
      "Responsive, accessible web apps with React, Next.js, and TypeScript.",
  },
  {
    icon: Server,
    gradient: "from-violet-500/20 via-purple-400/15 to-fuchsia-400/10",
    accent: "text-violet-600",
    variant: "violet" as const,
    title: "Back-End",
    description:
      "Robust, scalable APIs with Python, Django, and Node.js.",
  },
  {
    icon: Globe,
    gradient: "from-blue-500/20 via-indigo-400/15 to-violet-400/10",
    accent: "text-indigo-600",
    variant: "default" as const,
    title: "Full Stack",
    description:
      "End-to-end product delivery — from architecture to deployment.",
  },
];

const Services = () => {
  return (
    <section className="mt-32 md:mt-40">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            What I bring to the table
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <Card className="h-full" variant={service.variant}>
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br ${service.gradient} ${service.accent} mb-4`}>
                  <service.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-[#1d1d1f] tracking-tight mb-2 text-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-[#86868b] leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
