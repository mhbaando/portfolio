"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { useState } from "react";

const Hero = () => {
  return (
    <div className="mt-[200px] flex flex-col items-center justify-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={cn("text-5xl text-center text-zinc-500 leading-normal")}
      >
        I&apos;m <span className={cn("text-white")}>Mohamud</span>
        <br /> A <span className={cn("text-white")}>full stack</span> developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={cn(
          "text-zinc-500 max-w-[500px] mx-auto text-center mt-4 mb-9"
        )}
      >
        A talented <span className="text-white">developer</span> &
        <span className="text-white">designer</span> from{" "}
        <span className="text-white">Somalia</span>, bridging the gap between{" "}
        <span className="text-white">JavaScript</span> &{" "}
        <span className="text-white">Python</span>, crafting{" "}
        <span className="text-white">innovative</span> solutions for{" "}
        <span className="text-white">clients worldwide</span>
      </motion.p>

      <Link
        href="#"
        className={cn(
          buttonVariants(),
          "rounded-full bg-secondary text-white hover:text-black transition-all duration-300 px-7"
        )}
      >
        Let&apos;s Build
      </Link>
    </div>
  );
};

export default Hero;
