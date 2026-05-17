"use client";

import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import Wrapper from "../wrapper";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-sm" : "bg-transparent"
      )}
    >
      <Wrapper className="py-4">
        <div className="w-full flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="h-8 w-8 rounded-lg bg-[#0071e3] flex items-center justify-center text-white font-bold text-sm">
              M
            </span>
            <span className="text-[#1d1d1f] font-semibold text-base tracking-tight">
              MhBaando
            </span>
          </a>
          <a
            href="#connect"
            className={cn(
              buttonVariants({ size: "sm" }),
              "bg-[#0071e3] hover:bg-[#0077ed] text-white"
            )}
          >
            Let&apos;s Connect
          </a>
        </div>
      </Wrapper>
    </nav>
  );
};
export default Navbar;
