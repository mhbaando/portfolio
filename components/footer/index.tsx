"use client";

import Image from "next/image";
import { Socials } from "../cta/socails";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 md:mt-40 border-t border-[#e8e8ed]">
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <span className="h-7 w-7 rounded-lg bg-[#0071e3] flex items-center justify-center text-white font-bold text-xs">
              M
            </span>
            <span className="text-[#1d1d1f] font-semibold text-sm tracking-tight">
              MhBaando
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            {Socials.map((social) => (
              <a
                href={social.url}
                key={social.id}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/90 via-indigo-500/90 to-violet-500/90 hover:from-blue-600 hover:via-indigo-600 hover:to-violet-600 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300"
                title={social.name}
              >
                <Image
                  src={social.iconURL}
                  width={16}
                  height={16}
                  alt={social.name}
                  className="brightness-0 invert"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#f5f5f7] text-center">
          <p className="text-xs text-[#86868b]">
            &copy; {year} Mohamud Abshir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
