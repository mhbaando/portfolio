"use client";

import Image from "next/image";
import Card from "../card";
import { motion } from "framer-motion";

const stats = [
  { label: "Years Exp.", value: "5+" },
  { label: "Projects", value: "20+" },
  { label: "Technologies", value: "15+" },
  { label: "Clients", value: "10+" },
];

const About = () => {
  return (
    <section className="mt-32 md:mt-40" id="about">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid md:grid-cols-2 gap-8 md:gap-14 items-stretch"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex"
          >
            <div className="relative rounded-3xl overflow-hidden w-full h-full shadow-lg shadow-indigo-100/30">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-violet-500/5 z-10 pointer-events-none" />
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-400/30 via-indigo-400/20 to-violet-400/30 rounded-3xl blur-sm -z-10" />
              <Image
                src="/me.png"
                alt="Mohamud Abshir"
                priority
                width={1354}
                height={1250}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <span className="text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#1d1d1f] mb-5 leading-[1.15]">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                elegant
              </span>{" "}
              solutions
            </h2>
            <p className="text-[#86868b] leading-relaxed mb-8 text-base md:text-lg">
              Full stack developer &amp; UI/UX designer bridging JavaScript,
              TypeScript, and Python into products that feel right — from
              architecture to the last pixel.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                >
                  <Card className="text-center py-5 px-4">
                    <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#86868b] mt-1 font-medium">
                      {stat.label}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default About;
