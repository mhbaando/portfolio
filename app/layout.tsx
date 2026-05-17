import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav";
import Background from "@/components/background";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Mohamud Abshir | Portfolio",
  description: "Mohamud Abshir Portfolio | mhbaando",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen bg-[#fafafa]", poppins.className)}
      >
        <Background />
        <div className="fixed inset-0 z-0 pointer-events-none opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJuIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBudW1PY3RhdmVzPSIzIiAvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNuKSIgb3BhY2l0eT0iMSIgLz48L3N2Zz4=')]" />
        <Navbar />
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
