"use client";

import { Socials } from "./socails";
import Image from "next/image";
import { motion } from "framer-motion";

const CallToAction = () => {
  return (
    <section className="mt-32 md:mt-40" id="connect">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="glass-card rounded-3xl p-8 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.15] bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Let&apos;s build something great
            </h2>
            <p className="text-[#86868b] mt-3 mb-8 max-w-md mx-auto text-base leading-relaxed">
              Open to new projects, creative ideas, and opportunities to bring
              your vision to life.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {Socials.map((social) => (
                <a
                  href={social.url}
                  key={social.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 px-6 py-3 text-white text-sm font-medium shadow-md shadow-indigo-200/40 hover:shadow-lg hover:shadow-indigo-300/50 hover:scale-105 transition-all duration-300"
                >
                  <Image
                    src={social.iconURL}
                    width={18}
                    height={18}
                    alt={social.name}
                    className="brightness-0 invert"
                  />
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
