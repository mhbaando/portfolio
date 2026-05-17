"use client";

import Card from "../card";
import Tag from "../tag";
import { Companies, agencies, startUp } from "./data";
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  }),
};

const SectionHeader = ({
  label,
  gradient,
  children,
}: {
  label: string;
  gradient: string;
  children: React.ReactNode;
}) => (
  <div className="mb-12">
    <span className="text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
      {label}
    </span>
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-2 leading-[1.15]">
      <span className={gradient}>{children}</span>
    </h2>
  </div>
);

const ExperienceCard = ({
  data,
  index,
}: {
  data: (typeof agencies)[0];
  index: number;
}) => (
  <motion.div
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeIn}
  >
    <Card className="h-full flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-[#1d1d1f] tracking-tight">
            {data.title}
          </h3>
          <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mt-0.5">
            {data.company}
          </p>
        </div>
        <span className="text-xs text-[#86868b] bg-[#f5f5f7] px-3 py-1.5 rounded-full whitespace-nowrap shrink-0 border border-[#e8e8ed]">
          {data.date}
        </span>
      </div>

      <p className="text-[#86868b] text-sm leading-relaxed mb-5 flex-1">
        {data.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {data.technology.map((tech, i) => (
          <Tag key={i} className="text-xs px-3 py-1">
            {tech}
          </Tag>
        ))}
      </div>
    </Card>
  </motion.div>
);

const Experience = () => {
  return (
    <section className="mt-32 md:mt-40">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <SectionHeader
          label="Experience"
          gradient="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent"
        >
          I helped agencies across the globe
        </SectionHeader>
        <div className="grid md:grid-cols-2 gap-4 mb-28">
          {agencies.map((item, i) => (
            <ExperienceCard key={item.expID} data={item} index={i} />
          ))}
        </div>

        <SectionHeader
          label="Projects"
          gradient="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent"
        >
          Projects I&apos;ve contributed to
        </SectionHeader>
        <div className="grid md:grid-cols-2 gap-4 mb-28">
          {startUp.map((item, i) => (
            <ExperienceCard key={item.expID} data={item} index={i} />
          ))}
        </div>

        <SectionHeader
          label="Ventures"
          gradient="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent"
        >
          Startups I&apos;ve built
        </SectionHeader>
        <div className="grid md:grid-cols-2 gap-4">
          {Companies.map((item, i) => (
            <ExperienceCard key={item.expID} data={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Experience;
