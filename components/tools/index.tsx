"use client";

import { motion } from "framer-motion";
import { Palette, Code2, Database } from "lucide-react";
import Tag from "../tag";

const categories = [
  {
    name: "Design",
    icon: Palette,
    gradient: "from-blue-500/20 via-sky-400/15 to-cyan-400/10",
    border: "border-blue-200/50",
    accent: "text-blue-600",
    tools: [
      "Figma",
      "Adobe XD",
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe After Effect",
    ],
  },
  {
    name: "Frontend",
    icon: Code2,
    gradient: "from-indigo-500/20 via-violet-400/15 to-purple-400/10",
    border: "border-indigo-200/50",
    accent: "text-indigo-600",
    tools: [
      "HTML",
      "CSS",
      "Sass",
      "Bootstrap",
      "TailwindCSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Angular",
    ],
  },
  {
    name: "Backend & Data",
    icon: Database,
    gradient: "from-violet-500/20 via-purple-400/15 to-fuchsia-400/10",
    border: "border-violet-200/50",
    accent: "text-violet-600",
    tools: [
      "Python",
      "Django",
      "Node.js",
      "Firebase",
      "MongoDB",
      "MySQL",
      "PostgreSQL",
    ],
  },
];

const Tools = () => {
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
            TECH STACK
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] mt-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
            Tools &amp; Technologies
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: catIndex * 0.12,
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div
                className={`glass-card rounded-2xl p-6 h-full relative overflow-hidden group ${category.border}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${category.gradient} ${category.accent}`}>
                      <category.icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {category.name}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.tools.map((tool, i) => (
                      <motion.span
                        key={tool}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: catIndex * 0.12 + i * 0.03,
                          duration: 0.3,
                        }}
                      >
                        <Tag>{tool}</Tag>
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
