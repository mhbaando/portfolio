"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative pt-36 md:pt-52 pb-20 md:pb-28 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="text-center max-w-2xl px-5 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-white/20 text-sm font-medium text-[#86868b] mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r from-blue-500 to-indigo-500" />
          </span>
          Available for opportunities
        </motion.div>

        <div className="relative inline-block">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-r from-blue-500/20 via-indigo-500/25 to-violet-500/20 rounded-full blur-[100px] pointer-events-none" />
          <h1 className="relative text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#1d1d1f] leading-[1.1]">
            I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Mohamud
            </span>
            ,{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Full Stack
            </span>{" "}
            Engineer
          </h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-[#86868b] max-w-lg mx-auto mt-6 mb-10 text-lg leading-relaxed"
        >
          Crafting polished, performant digital products — bridging design and
          engineering from Somalia to the world.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#connect"
            className={cn(
              buttonVariants({ size: "lg" }),
              "bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-200/50 hover:shadow-xl hover:shadow-indigo-300/50 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500"
            )}
          >
            Let&apos;s Build Together
          </a>
          <a
            href="#about"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "border-[#d2d2d7] text-[#1d1d1f]"
            )}
          >
            View My Work
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-14 flex items-center justify-center gap-6"
        >
          {[
            { name: "React", color: "#61dafb" },
            { name: "Next.js", color: "#000" },
            { name: "TypeScript", color: "#3178c6" },
            { name: "Python", color: "#3776ab" },
            { name: "Django", color: "#092e20" },
          ].map((tech) => (
            <span
              key={tech.name}
              className="text-xs font-medium text-[#86868b] hover:text-[#1d1d1f] transition-colors cursor-default"
            >
              {tech.name}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
